# Generated by Django 4.0.5 on 2023-04-10 12:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_inventory_id_remove_product_id_inventory_uuid_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='open_po',
            name='product',
        ),
        migrations.RemoveField(
            model_name='requirements',
            name='inventory',
        ),
    ]
