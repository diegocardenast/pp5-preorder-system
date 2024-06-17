from rest_framework import viewsets
from .models import sellingPoint, bread, orderedBread, preorder
from .serializers import sellingPointSerializer, breadSerializer, orderedBreadSerializer, preorderSerializer

# Create your views here.
class sellingPointViewSet(viewsets.ModelViewSet):
    queryset = sellingPoint.objects.all()
    serializer_class = sellingPointSerializer

class breadViewSet(viewsets.ModelViewSet):
    queryset = bread.objects.all()
    serializer_class = breadSerializer

class orderedBreadViewSet(viewsets.ModelViewSet):
    queryset = orderedBread.objects.all()
    serializer_class = orderedBreadSerializer

class preorderViewSet(viewsets.ModelViewSet):
    queryset = preorder.objects.all()
    serializer_class = preorderSerializer