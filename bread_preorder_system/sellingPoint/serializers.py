from rest_framework import serializers
from .models import sellingPoint

class sellingPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = sellingPoint
        fields = '__all__'
