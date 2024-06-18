from rest_framework import viewsets
from .models import sellingPoint
from .serializers import sellingPointSerializer

# Create your views here.
class sellingPointViewSet(viewsets.ModelViewSet):
    queryset = sellingPoint.objects.all()
    serializer_class = sellingPointSerializer