# Generated by Django 4.0.5 on 2023-04-10 12:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_open_po_product_remove_requirements_inventory'),
    ]

    operations = [
        migrations.AddField(
            model_name='open_po',
            name='product',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.product'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='requirements',
            name='inventory',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.inventory'),
            preserve_default=False,
        ),
    ]