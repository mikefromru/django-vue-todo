from rest_framework import serializers
from rest_framework.serializers import ValidationError
from .models import Todo

from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:

        model = User
        fields = '__all__'

class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = '__all__'

