# we have this bc we want to see all users so we must make a view --> creates serializers
from rest_framework import serializers
from .models import UserProfile # passes it from models.py

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'