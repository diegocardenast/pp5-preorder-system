from django.db.models import Count
from rest_framework import generics, permissions, filters
from .models import ContactUs
from .serializers import ContactUsSerializer


# Create your views here.
class ContactUsListApiView(generics.ListCreateAPIView):
    """
    List contact messages or create a contact message if Authenticated
    The perform_create method associates the selling point with the logged in Admin user.
    """
    serializer_class = ContactUsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, permissions.IsAdminUser,)
    queryset = ContactUs.objects.all().order_by('-createdAt')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ContactUsDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a contact message and edit or delete it if you are admin.
    """
    serializer_class = ContactUsSerializer
    permission_classes = (permissions.IsAdminUser,)
    queryset = ContactUs.objects.all().order_by('-createdAt')