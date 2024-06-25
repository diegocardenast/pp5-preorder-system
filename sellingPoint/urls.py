from django.contrib import admin
from django.urls import path, include
from sellingPoint import views

urlpatterns = [
    path('sellingPoint/', views.SellingPointListApiView.as_view()),
    path('sellingPoint/<int:pk>/', views.SellingPointDetailApiView.as_view())
]
