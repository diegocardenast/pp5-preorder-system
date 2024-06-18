from django.urls import path
from contactUs import views

urlpatterns = [
    path('contactUs/', views.PostList.as_view()),
    path('contactUs/<int:pk>/', views.PostDetail.as_view())
]

