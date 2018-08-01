from django.shortcuts import render
from .models import Todo
from .serializers import TodoSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

from rest_framework import generics 

# from django_filters.rest_framework import DjangoFilterBackend

class GoogleLogin(SocialLoginView):

    adapter_class = GoogleOAuth2Adapter

class FacebookLogin(SocialLoginView):

    adapter_class = FacebookOAuth2Adapter

class CurrentUser(APIView):
    
    permission_classes = (IsAuthenticated,)

    def lslls(self):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
     

    
class TodoView(viewsets.ModelViewSet):
    
    permission_classes = (IsAuthenticated,)
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user)

    def post(self, request):
        print('fuck you bitch')