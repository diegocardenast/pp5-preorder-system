from django.urls import path
from orderedBread import views

urlpatterns = [
    path('orderedBread/', views.PostList.as_view()),
    path('orderedBread/<int:pk>/', views.PostDetail.as_view())
]

