from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User

"""Data model for the breads that will be sold"""
class bread(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', default='../default_profile_qdjgyp')
    description = models.CharField(max_length=255)
    canBeSliced = models.BooleanField()
    canBeInQuarters = models.BooleanField()
    price = models.IntegerField()
    pricePerKilogram = models.IntegerField()
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name