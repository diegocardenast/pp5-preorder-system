from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User

# Create your models here.
"""Data model for the user profiles"""
class profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)
    lastLogin = models.DateTimeField(auto_now_add=True)
    userName = models.CharField(max_length=255, blank=True)
    email = models.EmailField(blank=True)

    class Meta:
        ordering = ['-createdAt']

    def __str__(self):
        return f"{self.owner}'s profile"

def createProfile(sender, instance, created, **kwargs):
    if created:
        profile.objects.create(owner=instance)

post_save.connect(createProfile, sender=User)