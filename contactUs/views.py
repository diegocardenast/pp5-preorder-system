from rest_framework import viewsets
from .models import contactUs
from .serializers import orderedBreadSerializer

# Create your views here.
class contactUsViewSet(viewsets.ModelViewSet):
    queryset = contactUs.objects.all()
    serializer_class = contactUsSerializer