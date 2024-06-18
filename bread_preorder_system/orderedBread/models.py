from django.db import models
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User

# Create your models here.
"""Details that the customer can select when ordering bread"""
class orderedBread(models.Model):
    name = models.ForeignKey(bread, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    sliced = models.BooleanField()
    quarters = models.IntegerField()
    totalPrice = models.IntegerField()
    
    def __str__(self):
        return self.name