from django.contrib import admin
from django.urls import path, include
from preorder import views

urlpatterns = [
    path('preorder/', views.PostList.as_view()),
    path('preorder/<int:pk>/', views.PostDetail.as_view())
]
