from rest_framework import serializers
from sellingPoint.models import SellingPoint

class SellingPointSerializer(serializers.ModelSerializer):
    name = serializers.ReadOnlyField()
    address = serializers.ReadOnlyField()
    googleMapsLink = serializers.ReadOnlyField()
    
    class Meta:
        model = SellingPoint
        fields = '__all__'
