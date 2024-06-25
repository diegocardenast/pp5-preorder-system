from rest_framework import serializers
from .models import orderedBread

class orderedBreadSerializer(serializers.ModelSerializer):
    class Meta:
        model = orderedBread
        fields = '__all__'
