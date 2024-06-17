from django.db import models
from django.contrib.auth.models import User

"""Data model for the selling points or locations"""
class sellingPoint(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    googleMapsLink = models.CharField(max_length=255)

    def __str__(self):
        return self.name

"""Data model for the breads that will be sold"""
class bread(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='bread_images/')
    description = models.CharField(max_length=255)
    canBeSliced = models.BooleanField()
    canBeInQuarters = models.BooleanField()
    price = models.IntegerField()
    pricePerKilogram = models.IntegerField()
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

"""Details that the customer can select when ordering bread"""
class orderedBread(models.Model):
    name = models.ForeignKey(bread, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    sliced = models.BooleanField()
    quarters = models.IntegerField()
    totalPrice = models.IntegerField()
    
    def __str__(self):
        return self.name


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


