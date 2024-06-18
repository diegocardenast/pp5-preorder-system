from rest_framework import serializers
from .models import preorder

class preorderSerializer(serializers.ModelSerializer):
    class Meta:
        model = preorder
        fields = '__all__'
