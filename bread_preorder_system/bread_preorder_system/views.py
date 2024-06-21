# Source: https://blog.logrocket.com/django-rest-framework-create-api/
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from bread.models import bread
from bread.serializers import breadSerializer
from rest_framework import permissions

class BreadDetailApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAdminUser]

    def get_object(self, bread_id):
        '''
        Helper method to get the object with given bread_id
        '''
        try:
            return bread.objects.get(id=bread_id)
        except bread.DoesNotExist:
            return None

    # 3. Retrieve
    def get(self, request, bread_id, *args, **kwargs):
        '''
        Retrieves the bread with given bread_id
        '''
        bread_instance = self.get_object(bread_id, request.user.id)
        if not bread_instance:
            return Response(
                {"res": "Object with id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = breadSerializer(bread_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 4. Update
    def put(self, request, bread_id, *args, **kwargs):
        '''
        Updates the bread item with given bread_id if exists
        '''
        bread_instance = self.get_object(bread_id, request.user.id)
        if not bread_instance:
            return Response(
                {"res": "Object with bread id does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        data = {
            'name': request.data.get('name'),
            'image': request.data.get('image'),
            'description': request.data.get('description'),
            'canBeSliced': request.data.get('canBeSliced'),
            'canBeInQuarters': request.data.get('canBeInQuarters'),
            'price': request.data.get('price'),
            'pricePerKilogram': request.data.get('pricePerKilogram')
        }
        serializer = breadSerializer(instance = bread_instance, data=data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # 5. Delete
    def delete(self, request, bread_id, *args, **kwargs):
        '''
        Deletes the todo item with given todo_id if exists
        '''
        todo_instance = self.get_object(todo_id, request.user.id)
        if not todo_instance:
            return Response(
                {"res": "Object with todo id does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        todo_instance.delete()
        return Response(
            {"res": "Object deleted!"},
            status=status.HTTP_200_OK
        )