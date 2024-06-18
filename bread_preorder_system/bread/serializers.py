from rest_framework import serializers
from .models import bread

class breadSerializer(serializers.ModelSerializer):
    class Meta:
        model = bread
        fields = '__all__'