from django.urls import path, include
from .views import (
    BreadListApiView,
)
from bread_preorder_system.views import(
    BreadDetailApiView,
)

urlpatterns = [
    path('api/', BreadListApiView.as_view()),
    path('api/<int:bread_id>/', BreadDetailApiView.as_view())
]

