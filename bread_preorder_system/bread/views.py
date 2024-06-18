from rest_framework import viewsets
from .models import bread
from .serializers import breadSerializer

# Create your views here.
class breadViewSet(viewsets.ModelViewSet):
    queryset = bread.objects.all()
    serializer_class = breadSerializer