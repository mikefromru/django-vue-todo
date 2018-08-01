from django.urls import path
from . import views

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'todo', views.TodoView)

urlpatterns = [
    path('current-user/', views.CurrentUser.as_view()),
    # path('api/todo/', views.TodoView.as_view()),
    path('rest-auth/facebook/', views.FacebookLogin.as_view(), name='fb_connect'),
    path('rest-auth/google/', views.GoogleLogin.as_view(), name='google_login'),
]

urlpatterns += router.urls
