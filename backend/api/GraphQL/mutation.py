from graphene import ObjectType, Mutation, String, Boolean
from graphene.types.generic import GenericScalar
from .types import *

import inspect
import api.models
import api.serializers

from rest_framework.serializers import ModelSerializer
from django.db.models import Model, ForeignKey, F, Value, CharField
from django.db.models.functions import Concat, Cast

from django.utils import timezone
from datetime import datetime, timedelta

import json


model_objects = {name: obj for name, obj in inspect.getmembers(api.models)
                 if inspect.isclass(obj) and issubclass(obj, Model) and
                 all(item not in name.lower() for item in ['user', 'group'])}

serializer_objects = {name: obj for name, obj in inspect.getmembers(api.serializers)
                      if inspect.isclass(obj) and issubclass(obj, ModelSerializer) and
                      all(item not in name.lower() for item in ['user', 'group'])}


# type_objects = [obj for name, obj in inspect.getmembers(objTypes)
#                 if inspect.isclass(obj) and 'Type' in name and 'Django' not in name]

# class GenericType(Union):
#     class Meta:
#         types = type_objects
#         # types = (OrderType, ProductType)


def parse_serializer_errors(error_dict):
    out = {}
    for error in error_dict:
        for field, errors in error.items():
            out[field] = " ".join(item for item in errors)
    return out


def get_foreign_keys(model):
    fields = model._meta.get_fields()

    foreign_key_names = []
    for field in fields:
        if isinstance(field, ForeignKey):
            foreign_key_names.append(field.name)

    return foreign_key_names


def create_return_object(model, input):
    dataObj = model()
    for key, value in input.items():
        try:
            setattr(dataObj, key, value)
        except TypeError:
            getattr(dataObj, key).set(value)
    return dataObj


class CreateObject(Mutation):
    class Arguments:
        input = GenericScalar(required=True)
        resource = String(required=True)

    ok = Boolean()
    error = GenericScalar()

    def mutate(root, info, **kwargs):

        if kwargs['resource'] not in model_objects.keys():
            return CreateObject(error='Resource does not exist')

        serializer = serializer_objects[kwargs['resource'] +
                                        '_Serializer'](data=kwargs['input'], many=True)
        print('e')
        if serializer.is_valid():
            serializer.save()
            return CreateObject(ok=True, error=None)
        else:
            print('f')
            return CreateObject(ok=False, error=parse_serializer_errors(serializer.errors))


class UpdateObject(Mutation):
    class Arguments:
        input = GenericScalar(required=True)
        resource = String(required=True)

    ok = Boolean()
    error = GenericScalar()

    def mutate(root, info, **kwargs):

        if kwargs['resource'] not in model_objects.keys():
            return UpdateObject(error='Resource does not exist')

        identifier_fields = []
        pk_name = model_objects[kwargs['resource']]._meta.pk.name
        if pk_name == 'id':
            identifier_fields = get_foreign_keys(
                model_objects[kwargs['resource']])
        else:
            identifier_fields.append(pk_name)

        record = model_objects[kwargs['resource']].objects.get(
            **{field: kwargs['input'].get(field, None) for field in identifier_fields}
        )

        serializer = serializer_objects[kwargs['resource'] + '_Serializer'](
            record, data=kwargs['input'],
            partial=True)

        if serializer.is_valid():
            serializer.save()
            return UpdateObject(ok=True, error=None)
        else:
            return UpdateObject(ok=False, error=parse_serializer_errors(serializer.errors))


class DeleteObject(Mutation):
    class Arguments:
        input = GenericScalar(required=True)
        resource = String(required=True)

    ok = Boolean()
    error = GenericScalar()

    def mutate(root, info, **kwargs):

        identifier_fields = []
        pk_name = model_objects[kwargs['resource']]._meta.pk.name
        if pk_name == 'id':
            identifier_fields = get_foreign_keys(
                model_objects[kwargs['resource']])
        else:
            identifier_fields.append(pk_name)

        recordSet = model_objects[kwargs['resource']].objects.filter(
            **{field: kwargs['input'].get(field, None) for field in identifier_fields}
        )

        if recordSet.exists():
            recordSet.first().delete()
            return DeleteObject(ok=True)
        else:
            return DeleteObject(ok=False, error="Object not found")


class ParseExcelData(Mutation):
    class Arguments:
        input = GenericScalar(required=True)

    ok = Boolean()
    error = GenericScalar()

    def mutate(root, info, **kwargs):

        # Get all the products referenced in the current OpenPO data.
        open_po_products = set()
        for open_po in kwargs['input']:
            open_po_products.add(open_po['product'])
        
        # Create a mapping from product name to department and duration for the above dervied products.
        value_list = benchmark.objects.filter(product__in=open_po_products).values_list('product', flat=True)
        group_by_value = {}
        for value in value_list:
            group_by_value[value] = list((benchmark.objects.filter(product=value).
                                          values('department', 'duration')))

        # Find start of next day datetime.
        now = timezone.now()
        next_day = now + timedelta(days=1)
        next_day_start = datetime(next_day.year, next_day.month, next_day.day, tzinfo=now.tzinfo)

        status_data = []
        # For all the OpenPO excel records:
        for item in kwargs['input']:
            # Create an OpenPO status for each department. Set all the data and create the records.
            for benchmark_item in group_by_value[item['product']]:
                record = {}
                record['order'] = item['iwo']
                record['department'] = benchmark_item['department']
                record['quantity'] = 0
                record['scheduled'] = (next_day_start + benchmark_item['duration'])
                record['completed'] = None
                record['cost'] = 0
                
                status_data.append(record)
        
        # Save all the Open PO data alone. Exit with error info if any.
        serializer = serializer_objects['open_po_Serializer'](data=kwargs['input'], many=True)
        if serializer.is_valid():
            serializer.save()
        else:
            return ParseExcelData(ok=False, error=parse_serializer_errors(serializer.errors))
        
        # Save all the OpenPO status data alone. Exit with error info if any.
        serializer = serializer_objects['order_status_Serializer'](data=status_data, many=True)
        if serializer.is_valid():
            serializer.save()
        else:
            return ParseExcelData(ok=False, error=parse_serializer_errors(serializer.errors))

        return ParseExcelData(ok=True, error=None)


class ObjectMutation(ObjectType):

    CreateObject = CreateObject.Field()
    UpdateObject = UpdateObject.Field()
    DeleteObject = DeleteObject.Field()
    ParseExcelData = ParseExcelData.Field()
