# Generated by Django 5.0.6 on 2024-06-17 15:45

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preorder', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='bread',
            name='image',
            field=models.ImageField(default='../default_profile_qdjgyp', upload_to='images/'),
        ),
        migrations.CreateModel(
            name='profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now_add=True)),
                ('lastLogin', models.DateTimeField(auto_now_add=True)),
                ('userName', models.CharField(blank=True, max_length=255)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('owner', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('preferedSellingPoint', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='preorder.sellingpoint')),
            ],
            options={
                'ordering': ['-createdAt'],
            },
        ),
    ]
