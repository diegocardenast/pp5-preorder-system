from rest_framework import viewsets
from .models import ContactUs
from .serializers import contactUsSerializer

# Create your views here.
class contactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    serializer_class = contactUsSerializer