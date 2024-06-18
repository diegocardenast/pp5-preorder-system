from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User

"""Data model for the contact of users"""
class contactUs(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(blank=True)
    message = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    def __str__(self):
        return f"Contact request | {self.name}"