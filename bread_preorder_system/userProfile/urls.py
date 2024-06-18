from django.contrib import admin
from django.urls import path, include
from userProfile import views

urlpatterns = [
    path('userProfile/', views.PostList.as_view()),
    path('userProfile/<int:pk>/', views.PostDetail.as_view())
]
