from api.models import user
from api.serializers import userSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework_simplejwt.tokens import RefreshToken

import sys

import dotenv
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

ENV_FILE_PATH = BASE_DIR / ".env"
dotenv.load_dotenv(ENV_FILE_PATH)

sys.path.append('../..')


class UserActions(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, uuid, *args, **kwargs):

        if user.objects.filter(uuid=uuid).exists():
            data = user.objects.get(uuid=uuid)
            serializer = userSerializer(data)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response("", status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, uuid, *args, **kwargs):

        data = {}
        # Get group name of user who made request and check for credentials
        group = request.user.groups.values_list('name', flat=True)
        if not any(item in ('admin',) for item in group):
            data['response'] = 'Cannot delete unless admin.'
            return Response(data, status=status.HTTP_401_UNAUTHORIZED)

        if user.objects.filter(uuid=uuid).exists():
            data = user.objects.get(uuid=uuid).delete()
            return Response("", status=status.HTTP_200_OK)
            
        return Response("", status=status.HTTP_404_NOT_FOUND)
    
    
class BlacklistTokenUpdateView(APIView):
    
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)