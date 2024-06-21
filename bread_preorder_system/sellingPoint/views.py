from django.db.models import Count
from rest_framework import generics, permissions, filters
from .models import SellingPoint
from .serializers import SellingPointSerializer

class SellingPointListApiView(generics.ListCreateAPIView):
    """
    List selling points or create a selling point if Admin
    The perform_create method associates the selling point with the logged in Admin user.
    """
    serializer_class = SellingPointSerializer
     # add both permission classes 
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, permissions.IsAdminUser,)
    queryset = SellingPoint.objects.all().order_by('name')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
    ]
    search_fields = [
        'name',
        'address',
    ]
    ordering_fields = [
        'name',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class SellingPointDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a selling point and edit or delete it if you are admin.
    """
    serializer_class = SellingPointSerializer
    permission_classes = (permissions.IsAdminUser,)
    queryset = SellingPoint.objects.all().order_by('name')