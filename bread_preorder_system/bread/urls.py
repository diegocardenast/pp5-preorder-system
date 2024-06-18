from django.urls import path
from bread import views

urlpatterns = [
    path('bread/', views.PostList.as_view()),
    path('bread/<int:pk>/', views.PostDetail.as_view())
]

