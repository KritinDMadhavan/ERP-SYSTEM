from rest_framework import serializers
from .models import *
from django.contrib.auth.models import Group
from django.contrib.auth.models import User, Group
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import uuid


class userSerializer(serializers.ModelSerializer):

    permission_groups = serializers.SerializerMethodField('get_group_names')

    class Meta:
        model = user
        fields = ('uuid', 'phone', 'name', 'designation', 'is_superuser', 'permission_groups')

    def get_group_names(self, obj):
        group_name_list = obj.groups.values_list(
            'name', flat=True)  # assuming group has a name field
        return group_name_list


class RegistrationUserSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type': 'password'},
                                      write_only=True)

    class Meta:
        model = user
        fields = ('phone', 'password', 'password2',
                  'name', 'designation', 'email',)
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        print(kwargs)
        print(self.validated_data)

        userObj = user(phone=self.validated_data['phone'], uuid=uuid.uuid4())
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError(
                {'Password': 'Passwords do not match.'})

        userObj.set_password(password)

        userObj.name = kwargs['name']
        userObj.designation = kwargs['designation']
        userObj.email = kwargs['email']

        userObj.save()

        group = Group.objects.get(name=kwargs['destinationGroup'])
        print(group)
        userObj.groups.add(group)

        return userObj


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['group'] = user.groups.values_list('name', flat=True)[0]

        return token


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        instance.groups.add(Group.objects.get(name='base'))


class open_po_Serializer(serializers.ModelSerializer):
    class Meta:
        model = open_po
        fields = '__all__'


class product_Serializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = '__all__'


class department_Serializer(serializers.ModelSerializer):
    class Meta:
        model = department
        fields = '__all__'

class order_status_Serializer(serializers.ModelSerializer):
    class Meta:
        model = order_status
        fields = '__all__'


class inventory_Serializer(serializers.ModelSerializer):
    class Meta:
        model = inventory
        fields = '__all__'


class requirements_Serializer(serializers.ModelSerializer):
    class Meta:
        model = requirements
        fields = '__all__'


class costing_Serializer(serializers.ModelSerializer):
    class Meta:
        model = costing
        fields = '__all__'


class ipo_Serializer(serializers.ModelSerializer):
    class Meta:
        model = ipo
        fields = '__all__'


class company_Serializer(serializers.ModelSerializer):
    class Meta:
        model = company
        fields = '__all__'


class benchmark_Serializer(serializers.ModelSerializer):
    class Meta:
        model = benchmark
        fields = '__all__'
