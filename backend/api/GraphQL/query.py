from graphene import relay, Node
from graphene_django.filter import DjangoFilterConnectionField
from api.models import *
from api.GraphQL.types import *


class CustomQuery:
    # Node queries
    openpo_node = Node.Field(OpenPOType)
    product_node = Node.Field(ProductType)
    department_node = Node.Field(DepartmentType)
    order_status_node = Node.Field(OrderStatusType)
    inventory_node = Node.Field(InventoryType)
    requirements_node = Node.Field(RequirementType)
    costing_node = Node.Field(CostingType)
    ipo_node = Node.Field(IPOType)
    user_node = Node.Field(UserType)
    company_node = Node.Field(CompanyType)
    benchmark_node = Node.Field(BenchmarkType)

    # Connection queries
    openpos = DjangoFilterConnectionField(OpenPOType)
    products = DjangoFilterConnectionField(ProductType)
    departments = DjangoFilterConnectionField(DepartmentType)
    order_statuses = DjangoFilterConnectionField(OrderStatusType)
    inventories = DjangoFilterConnectionField(InventoryType)
    requirements = DjangoFilterConnectionField(RequirementType)
    costings = DjangoFilterConnectionField(CostingType)
    ipos = DjangoFilterConnectionField(IPOType)
    users = DjangoFilterConnectionField(UserType)
    companies = DjangoFilterConnectionField(CompanyType)
    benchmarks = DjangoFilterConnectionField(BenchmarkType)
