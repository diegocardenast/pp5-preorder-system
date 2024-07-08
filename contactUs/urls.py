from django.urls import path
from contactUs import views

urlpatterns = [
    path('', views.ContactUsListApiView.as_view()),
    path('<int:pk>/', views.ContactUsDetailApiView.as_view())
]

