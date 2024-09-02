from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse
from .models import Airport
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
# from .models import Note

def search_airports(request):
    query = request.GET.get('q','')
    results = Airport.objects.filter(city__icontains=query) |  Airport.objects.filter(country__icontains=query)
    airports = [{'iata_code':a.iata_code,'city':a.city,'country':a.country, 'country_code':a.country_code} for a in results]
    return JsonResponse(airports, safe=False)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all() #List all users to ensure duplicates do not exist.
    serializer_class = UserSerializer #Tell view what kind of info required to create User
    permission_classes = [AllowAny] #Anyone can call this class.
    

# # class NoteListCreate(generics.ListCreateAPIView):
# #     serializer_class = NoteSerializer
# #     permission_classes = [IsAuthenticated] #Root cannot be called unless you have a valid JWT Token.

# #     def get_queryset(self):
# #         user = self.request.user
# #         return Note.objects.filter(author=user) 
    
# #     def perform_create(self, serializer):
# #         if serializer.is_valid():
# #             serializer.save(author=self.request.user)
# #         else:
# #             print(serializer.errors)

# # class NoteUpdate(generics.UpdateAPIView):
# #     serializer_class = NoteSerializer
# #     permission_classes = [IsAuthenticated]

# #     def get_queryset(self):
# #         user = self.request.user
# #         return Note.objects.filter(author=user)

# # class NoteDelete(generics.DestroyAPIView):
# #     # queryset = Note.objects.all()
# #     serializer_class = NoteSerializer
# #     permission_classes = [IsAuthenticated]

# #     def get_queryset(self):
# #         user = self.request.user
# #         return Note.objects.filter(author=user) 
    
