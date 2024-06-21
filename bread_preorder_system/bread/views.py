from django.db.models import Count
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, permissions, filters, status
from bread_preorder_system.permissions import IsOwnerOrReadOnly
from .models import bread
from .serializers import breadSerializer


class BreadListApiView(APIView):
    """Breads Data models views"""
    serializer_class = breadSerializer
    """add permission to check if user is authenticated"""
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    # 1. List all
    def get (self, request, *args, **kwargs):
        breads = bread.objects.annotate
        serializer = serializer_class(breads, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    # 2. Create
    def post (self, request, *args, **kwargs):
        """Create the Bread with given bread data"""
        data = {
            'name': request.data.get('name'),
            'image': request.data.get('image'),
            'description': request.data.get('description'),
            'canBeSliced': request.data.get('canBeSliced'),
            'canBeInQuarters': request.data.get('canBeInQuarters'),
            'price': request.data.get('price'),
            'pricePerKilogram': request.data.get('pricePerKilogram'),
            'createdBy': request.user.id
        }
        serializer = TodoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # """The perform_create method associates the post with the logged in user."""
    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)