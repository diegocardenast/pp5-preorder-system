from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


"""Data model for the preorders"""
class preorder(models.Model):
    
    STATUS_CHOICES = [
        ('received', 'Received'),
        ('confirmed', 'Confirmed'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled')
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sellingPoint = models.ForeignKey(sellingPoint, on_delete=models.CASCADE)
    preorderPrice = models.IntegerField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    pickUpDate = models.DateField()
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.product.name} for {self.user.username} on {self.pickUpDate}"
        