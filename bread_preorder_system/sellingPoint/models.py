from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


"""Data model for the selling points or locations"""
class sellingPoint(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    googleMapsLink = models.CharField(max_length=255)

    def __str__(self):
        return self.name