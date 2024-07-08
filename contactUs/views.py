from django.db.models import Count
from rest_framework import generics, permissions, filters
from .models import ContactUs
from .serializers import ContactUsSerializer


# Create your views here.
class ContactUsListApiView(generics.ListCreateAPIView):
    """
    List contact messages or create a contact message
    """
    serializer_class = ContactUsSerializer
    permission_classes = (permissions.AllowAny, )
    queryset = ContactUs.objects.all().order_by('-createdAt')

    def perform_create(self, serializer):
        serializer.save()


class ContactUsDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a contact message and edit or delete it if you are admin.
    """
    serializer_class = ContactUsSerializer
    permission_classes = (permissions.AllowAny, permissions.IsAdminUser,)
    queryset = ContactUs.objects.all().order_by('-createdAt')