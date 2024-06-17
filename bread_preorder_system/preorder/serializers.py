from rest_framework import serializers
from .models import sellingPoint, bread, orderedBread, preorder

class sellingPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = sellingPoint
        fields = '__all__'

class breadSerializer(serializers.ModelSerializer):
    class Meta:
        model = bread
        fields = '__all__'

class orderedBreadSerializer(serializers.ModelSerializer):
    class Meta:
        model = orderedBread
        fields = '__all__'

class preorderSerializer(serializers.ModelSerializer):
    class Meta:
        model = preorder
        fields = '__all__'
