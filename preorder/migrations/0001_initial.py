# Generated by Django 5.0.6 on 2024-06-17 11:53

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='sellingPoint',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=255)),
                ('googleMapsLink', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='bread',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='bread_images/')),
                ('description', models.CharField(max_length=255)),
                ('canBeSliced', models.BooleanField()),
                ('canBeInQuarters', models.BooleanField()),
                ('price', models.IntegerField()),
                ('pricePerKilogram', models.IntegerField()),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('createdBy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='orderedBread',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('sliced', models.BooleanField()),
                ('quarters', models.IntegerField()),
                ('totalPrice', models.IntegerField()),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='preorder.bread')),
            ],
        ),
        migrations.CreateModel(
            name='preorder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('preorderPrice', models.IntegerField()),
                ('status', models.CharField(choices=[('received', 'Received'), ('confirmed', 'Confirmed'), ('delivered', 'Delivered'), ('cancelled', 'Cancelled')], max_length=20)),
                ('pickUpDate', models.DateField()),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('sellingPoint', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='preorder.sellingpoint')),
            ],
        ),
    ]
