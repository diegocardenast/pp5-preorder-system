from django.db import models
from django.contrib.auth.models import User

class ContactUs(models.Model):
    """Data model for the contact of users"""
    name = models.CharField(max_length=100)
    email = models.EmailField(blank=True)
    message = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-createdAt']

    def __str__(self):
        return f"Contact request | {self.name}"