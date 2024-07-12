from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField


class Bread(models.Model):
    """Data model for the breads that will be sold"""

    name = models.CharField(max_length=100, unique=True)
    image = CloudinaryField("image", default="placeholder")
    description = models.CharField(max_length=255)
    canBeSliced = models.BooleanField(default=False)
    canBeInQuarters = models.BooleanField(default=False)
    price = models.IntegerField(blank=False)
    pricePerKilogram = models.IntegerField(blank=False)
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
