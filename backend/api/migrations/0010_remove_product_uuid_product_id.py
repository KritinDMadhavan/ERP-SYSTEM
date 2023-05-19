# Generated by Django 4.0.5 on 2023-05-03 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_remove_open_po_product'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='uuid',
        ),
        migrations.AddField(
            model_name='product',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]
