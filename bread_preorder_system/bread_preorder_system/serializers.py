from djoser.serializers import UserSerializer, UserCreateSerializer as BaseUserSerializer
from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers

class UserCreateSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'email', 'username', 'password']

class CurrentUserSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        fields = ['id', 'email', 'username', 'password']