from rest_framework import serializers
from bread.models import Bread
from django.contrib.auth.models import User


class BreadSerializer(serializers.ModelSerializer):
    createdBy = serializers.ReadOnlyField(source='owner.username')

    def create(self, validated_data):
        createdBy = validated_data['owner']
        del validated_data['owner']
        bread = Bread(**validated_data, createdBy=createdBy)
        bread.save()
        return bread





    class Meta:
        model = Bread
        fields = '__all__'
