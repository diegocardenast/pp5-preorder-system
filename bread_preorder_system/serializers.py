from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers


class CurrentUserSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        
        fields = ["last_login", "is_superuser", "username", "first_name", "last_name", "email", "is_staff", "date_joined"]
