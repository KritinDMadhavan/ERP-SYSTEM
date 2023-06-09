# Generated by Django 4.0.5 on 2023-04-11 02:51

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_open_po_product_requirements_inventory'),
    ]

    operations = [
        migrations.AddField(
            model_name='order_status',
            name='completed',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order_status',
            name='cost',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order_status',
            name='scheduled',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='unit_price',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order_status',
            name='department',
            field=models.ForeignKey(default='Profile', on_delete=django.db.models.deletion.CASCADE, to='api.department'),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='schedule',
        ),
    ]
