from graphene import ObjectType, Schema

from .GraphQL.query import *
from .GraphQL.mutation import ObjectMutation
from django.contrib.auth.mixins import LoginRequiredMixin
from graphene_django.views import GraphQLView


class Query(CustomQuery, ObjectType):
    pass  


class Mutation(ObjectMutation, ObjectType):
    pass  
  

schema = Schema(query=Query, mutation=Mutation)


class PrivateGraphQLView(LoginRequiredMixin, GraphQLView):
    raise_exception = True


class TestGraphQLView(GraphQLView):
    pass

# TODO: GraphQL implementation
# Perform Auth for endpoint https://asvrada.github.io/blog/django-graphql-jwt/
