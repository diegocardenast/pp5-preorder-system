# Generated by Django 5.0.6 on 2024-06-17 15:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preorder', '0002_alter_bread_image_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='preferedSellingPoint',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='preorder.sellingpoint'),
        ),
    ]
