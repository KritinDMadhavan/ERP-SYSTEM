# Generated by Django 4.0.5 on 2023-05-04 07:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_remove_product_route_benchmarks'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='benchmarks',
            new_name='benchmark',
        ),
    ]