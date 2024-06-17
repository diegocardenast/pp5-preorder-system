from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import sellingPointViewSet, breadViewSet, orderedBreadViewSet, preorderViewSet

router = DefaultRouter()
router.register(r'selling-point', sellingPointViewSet)
router.register(r'bread', breadViewSet)
router.register(r'ordered-bread', orderedBreadViewSet)
router.register(r'preorders', preorderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]