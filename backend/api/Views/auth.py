from api.models import user
from api.serializers import RegistrationUserSerializer, userSerializer, CustomTokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework import status, permissions

from rest_framework.authtoken.models import Token

from rest_framework_simplejwt.views import TokenObtainPairView

import datetime
import requests
import sys

import dotenv
from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

ENV_FILE_PATH = BASE_DIR / ".env"
dotenv.load_dotenv(ENV_FILE_PATH)

sys.path.append('../..')


@api_view(['POST', ])
@permission_classes([IsAuthenticated])
def registration_view(request):
    if request.method == 'POST':
        data = {}

        phone = request.data.get('phone')

        if validate_user(phone) != None:
            data['response'] = 'That phone is already in use.'
            return Response(data, status=status.HTTP_409_CONFLICT)

        # Check for existence of group, if it exists verify that only an admin can create the user
        destinationGroup = None
        if 'destinationGroup' in request.data:
            # Get group name of user who made request and check for credentials
            groupOrigin = request.user.groups.values_list('name', flat=True)
            if not any(item in ('admin',) for item in groupOrigin):
                data['response'] = 'Cannot create new user unless admin.'
                return Response(data, status=status.HTTP_401_UNAUTHORIZED)
            destinationGroup = request.data['destinationGroup']
        else:
            return Response("Provide auth level of user to be created", status=status.HTTP_400_BAD_REQUEST)

        serializer = RegistrationUserSerializer(data=request.data)

        if serializer.is_valid():
            account = serializer.save(destinationGroup=destinationGroup, 
                                      name=request.data['name'],
                                      designation=request.data['designation'],
                                      email=request.data['email'])
            data['response'] = 'Successfully registered new user.'
            # data['email'] = account.email
            data['permission_groups'] = list(account.groups.values_list('name', flat=True))
            data['uuid'] = account.uuid
            
            return Response(data, status=status.HTTP_201_CREATED)    
        else:
            data = serializer.errors
            
            return Response(data, status=status.HTTP_400_BAD_REQUEST)


def validate_user(phone):
    try:
        accountObj = user.objects.get(phone=phone)
    except user.DoesNotExist:
        return None

    if accountObj != None:
        return phone


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    permission_classes = []
    
    def post(self, request):
        context = {}

        phone = request.data.get('phone')
        password = request.data.get('password')

        # If user existence and auth credentials,  return JWT
        # If user existence and bad credentials, return None, increment passWrongCount
        # Else return None.

        userObj = user.objects.filter(phone=phone)

        if userObj:
            userObj = userObj[0]

            if userObj.status == 'locked':
                    context = {
                        'response': 'Accont locked due to multiple bad login attempts.'}
                    return Response(context, status=status.HTTP_403_FORBIDDEN)

            # TODO: Add the duration limit check

            account = authenticate(phone=phone, password=password)
            if account:
                serializer = self.get_serializer(data=request.data)
                if serializer.is_valid():
                    return Response(serializer.validated_data, status=status.HTTP_200_OK)
                else:
                    return Response({'respones': 'Serialization error'}, status=status.HTTP_401_UNAUTHORIZED)
            else:
                context = {'response': 'Bad credentials'}
                # userObj.passWrongCount += 1
                # if userObj.passWrongCount >= 3:
                #     userObj.passWrongCount = 0
                #     userObj.status = "locked"
                userObj.save()
                return Response(context, status=status.HTTP_401_UNAUTHORIZED)
        else:
            # FIXME: Secuity vulnerablity, can check if account exists because of message
            context = {'response': 'User does not exist'}
            return Response(context, status=status.HTTP_404_NOT_FOUND)


class TokenAction(APIView):
    
    # TODO: Check if secure method of performing auth
    def get(self, request, token, *args, **kwargs):
        
        # return Response(f'{Token._meta.fields}', status=status.HTTP_200_OK)
        try:
            if Token.objects.get(key=token):
                return Response("", status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response("", status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response('', status=status.HTTP_400_BAD_REQUEST)
