from django.db import models
from django.contrib.auth.models import User

class SellingPoint(models.Model):
    """Data model for the selling points or locations"""
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    googleMapsLink = models.CharField(max_length=255)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name