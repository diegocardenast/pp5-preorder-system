from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from bread.models import Bread

# Create your models here.
"""Details that the customer can select when ordering bread"""
class OrderedBread(models.Model):
    name = models.ForeignKey(Bread, on_delete=models.CASCADE, blank=True, null=True)
    quantity = models.IntegerField()
    sliced = models.BooleanField()
    quarters = models.IntegerField()
    totalPrice = models.IntegerField()
    
    def __str__(self):
        return self.name