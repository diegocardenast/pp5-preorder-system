from rest_framework import viewsets
from .models import profile
from .serializers import profileSerializer

# Create your views here.

class profileViewSet(viewsets.ModelViewSet):
    queryset = profile.objects.all()
    serializer_class = profileSerializer