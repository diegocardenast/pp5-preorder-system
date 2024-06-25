from rest_framework import viewsets
from .models import orderedBread
from .serializers import orderedBreadSerializer

# Create your views here.
class orderedBreadViewSet(viewsets.ModelViewSet):
    queryset = orderedBread.objects.all()
    serializer_class = orderedBreadSerializer