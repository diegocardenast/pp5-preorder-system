from django.urls import path
from contactUs import views

urlpatterns = [
    path('contactUs/', views.contactUsViewSet.as_view()),
    path('contactUs/<int:pk>/', views.contactUsViewSet.as_view())
]

