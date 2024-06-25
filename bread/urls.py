from django.urls import path
from bread import views

urlpatterns = [
    path('bread/', views.BreadListApiView.as_view()),
    path('bread/<int:bread_id>/', views.BreadDetailApiView.as_view())
]

