from django.urls import path
from bread import views

urlpatterns = [
    path("", views.BreadDetailListApiView.as_view()),
    path("create/", views.BreadListApiView.as_view()),
    path("edit/<int:pk>/", views.BreadDetailApiView.as_view()),
]
