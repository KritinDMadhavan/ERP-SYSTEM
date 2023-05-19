from graphene import relay, String
from graphene_django import DjangoObjectType
from api.models import *


class OpenPOType(DjangoObjectType):
    class Meta:
        model = open_po
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"


class ProductType(DjangoObjectType):
    class Meta:
        model = product
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"


class DepartmentType(DjangoObjectType):
    class Meta:
        model = department
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"
    

class OrderStatusType(DjangoObjectType):
    class Meta:
        model = order_status
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"


class InventoryType(DjangoObjectType):
    class Meta:
        model = inventory
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"


class RequirementType(DjangoObjectType):
    class Meta:
        model = requirements
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"


class CostingType(DjangoObjectType):
    class Meta:
        model = costing
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"


class IPOType(DjangoObjectType):
    class Meta:
        model = ipo
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"


class CompanyType(DjangoObjectType):
    class Meta:
        model = company
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"


class BenchmarkType(DjangoObjectType):
    
    duration_string = String()
    
    def resolve_duration(self, info):
        return self.duration.total_seconds()
    
    def resolve_duration_string(self, info):
        return str(self.duration)
    
    class Meta:
        model = benchmark
        interfaces = (relay.Node,)
        fields = "__all__"
        filter_fields = "__all__"


class UserType(DjangoObjectType):
    class Meta:
        model = user
        interfaces = (relay.Node,)
        fields = ['name', 'designation', 'uuid']
        filter_fields = ['name', 'designation', 'uuid']