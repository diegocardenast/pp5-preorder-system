from django.urls import path
from .views import (
    BreadListApiView,
)

urlpatterns = [
    path('bread/', BreadListApiView.as_view()),
    # path('bread/<int:pk>/', views.PostDetail.as_view())
]

