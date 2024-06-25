from django.urls import path
from contactUs import views

urlpatterns = [
    path('contactUs/', views.ContactUsListApiView.as_view()),
    path('contactUs/<int:pk>/', views.ContactUsDetailApiView.as_view())
]

