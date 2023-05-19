"""backend URL Configuration
"""

from django.contrib import admin
from django.urls import path, include
from api import urls as api_urls
from api.graphQL import schema, PrivateGraphQLView, TestGraphQLView
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',  include(api_urls)),
    path("graphql", PrivateGraphQLView.as_view(graphiql=True, schema=schema)),
]


if settings.DEBUG:
    urlpatterns += [
        path('graphqltest/', TestGraphQLView.as_view(graphiql=True, schema=schema)),
    ]