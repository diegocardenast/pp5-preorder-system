from django.contrib import admin
from django.urls import path, include
from sellingPoint import views

urlpatterns = [
    path('sellingPoint/', views.PostList.as_view()),
    path('sellingPoint/<int:pk>/', views.PostDetail.as_view())
]
