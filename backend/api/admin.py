from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *


class user_admin(UserAdmin):
    list_display = ('uuid', 'phone', 'name', 'designation',)
    search_fields = ('phone', 'name')
    readonly_fields=()
    ordering = ('phone', 'name',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
    add_fieldsets = (
    (None, {
        'classes': ('wide',),
        'fields': ('phone', 'password1', 'password2'),
    }),
)


admin.site.register(user, user_admin)

admin.site.register(open_po)
admin.site.register(product)
admin.site.register(department)
admin.site.register(order_status)
admin.site.register(inventory)
admin.site.register(requirements)
admin.site.register(costing)
admin.site.register(ipo)

# Open_PO: IWO, Open_Qty, Closed_Qty, QC_comments, Product_ID, Unit_Price
# Product: Product_ID, Desc, Material_group, part_num
# Department: Name, Head, Desc, Type [Internal/Subcontractor]

# Schedule: IWO, Dept, Scheduled, Completed, Cost
# Status: IWO, Dept, Qty
# Inventory: Name, Desc, Dept?, Qty

# Requirements: IWO, Inventory_ID, Qty
# Costing: Date, Type, Amt, Comments
# IPO: Inventory_ID, Status, Qty

# Open_PO, Product, Department, Schedule, Status, Inventory, Requirements, Costing, IPO 