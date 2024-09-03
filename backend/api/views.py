from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse
from .models import Airport, Flight, Flightselection
from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, FlightSerializer
# from .models import Note

def search_airports(request):
    query = request.GET.get('q','')
    if not query:
        return JsonResponse({'error':'Query Parameter is missing!'}, status=400)
    
    results = Airport.objects.filter(city__icontains=query) |  Airport.objects.filter(country__icontains=query)
    airports = [{'iata_code':a.iata_code,'city':a.city,'country':a.country, 'country_code':a.country_code} for a in results]
    return JsonResponse(airports, safe=False)

def flight_list(request):
    flights = Flight.objects.all()
    flights_data = [
        {
        'flight_id': flight.flight_id,
        'departingFlight_code': flight.departingFlight_code ,
        'returningFlight_code': flight.returningFlight_code,
        'departure_airport__iata_code': flight.departure_airport.iata_code,
        'arrival_airport__iata_code': flight.arrival_airport.iata_code,
        'departure_time': flight.departure_time,
        'arrival_time': flight.arrival_time,
        'duration': flight.duration,
        'price': flight.price,
        'seats_left': flight.seats_left,
        'flight_class' : flight.flight_class,
        'airline' : flight.airline,
        }
        for flight in flights
    ]

    return JsonResponse(flights_data, safe=False)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all() #List all users to ensure duplicates do not exist.
    serializer_class = UserSerializer #Tell view what kind of info required to create User
    permission_classes = [AllowAny] #Anyone can call this class.

class FlightViewSet(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    

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
    
