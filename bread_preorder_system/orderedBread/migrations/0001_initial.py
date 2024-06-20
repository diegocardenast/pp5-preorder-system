# Generated by Django 5.0.6 on 2024-06-20 09:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('bread', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='orderedBread',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('sliced', models.BooleanField()),
                ('quarters', models.IntegerField()),
                ('totalPrice', models.IntegerField()),
                ('name', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='bread.bread')),
            ],
        ),
    ]
