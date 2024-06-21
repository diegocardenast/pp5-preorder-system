from rest_framework import serializers
from bread.models import Bread


class BreadSerializer(serializers.ModelSerializer):
    name = serializers.ReadOnlyField()
    image = serializers.ReadOnlyField(source='owner.profile.image.url')
    canBeSliced = serializers.ReadOnlyField()
    canBeInQuarters = serializers.ReadOnlyField()
    price = serializers.ReadOnlyField()
    pricePerKilogram = serializers.ReadOnlyField()
    createdBy = serializers.ReadOnlyField(source='owner.username')

    def validate_image(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        return value

    class Meta:
        model = Bread
        fields = '__all__'