from django.db.models import Count
from rest_framework import generics, permissions, filters
from .models import Bread
from .serializers import BreadSerializer


class BreadListApiView(generics.ListCreateAPIView):
    """
    List bread or create a bread if Admin
    The perform_create method associates the bread with the logged in Admin user.
    """
    serializer_class = BreadSerializer
     # add both permission classes 
    permission_classes = (permissions.IsAdminUser,)
    queryset = Bread.objects.all().order_by('name')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
    ]
    filterset_fields = [
        'canBeSliced',
    ]
    search_fields = [
        'name',
        'description',
    ]
    ordering_fields = [
        'price',
        'pricePerKilogram',
        'name',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class BreadDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a bread and edit or delete it if you are admin.
    """
    serializer_class = BreadSerializer
    permission_classes = (permissions.IsAdminUser,)
    queryset = Bread.objects.all().order_by('name')


class BreadDetailListApiView(generics.ListAPIView):
    """
    Retrieve a bread list only to read it.
    """
    serializer_class = BreadSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Bread.objects.all().order_by('name')