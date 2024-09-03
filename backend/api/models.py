from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.db.models import Q, CheckConstraint
from datetime import timedelta
# from django.contrib.auth.models import User

class Airport(models.Model):
    iata_code = models.CharField(max_length=3, unique=True)
    country_code = models.CharField(max_length=5)   
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.city}, {self.country} ({self.iata_code})"


FLIGHT_CLASS_CHOICES = [
    ('Economy','Economy'),
    ('Business','Business'),
    ('First Class','First Class'),   
]

class Flight(models.Model):
    flight_id = models.CharField(max_length=10, unique=True)
    departingFlight_code = models.CharField(max_length=10)
    returningFlight_code = models.CharField(max_length=10)
    departure_airport = models.ForeignKey(Airport, related_name='departure_flights', on_delete=models.CASCADE)
    arrival_airport = models.ForeignKey(Airport, related_name='arrival_flights', on_delete=models.CASCADE)
    departure_time = models.DateTimeField()
    duration = models.DurationField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    seats_left = models.PositiveIntegerField()
    flight_class = models.CharField(max_length=25, default='Economy', choices=FLIGHT_CLASS_CHOICES)
    airline = models.CharField(max_length=50, default='Anonymous Airline')
    
    class Meta:
        unique_together = (
            ('departure_airport','arrival_airport','departure_time')
        )
        indexes=[
            models.Index(fields=['departure_airport']),
            models.Index(fields=['arrival_airport']),
            models.Index(fields=['departure_time'])
        ]
        # 
        constraints = [
            CheckConstraint(check=Q(seats_left__gte=0), name='seats_left_positive'),
            CheckConstraint(check=Q(price__gte=0), name='price_positive'),
        ]
    
    @property
    def arrival_time(self):
        return self.departure_time + self.duration
    
    def clean(self):
        if self.duration <= timedelta(0):
            raise ValidationError("Flight Duration must be a positive integer.")
        if self.departure_airport == self.arrival_airport:
            raise ValidationError("Airport of Departure and Arrival must not be the same.")
        if self.departure_time <= timezone.now():
            raise ValidationError("Departure Time must be set in the future.")
    
    def __str__(self):
        return f"{self.flight_id} - {self.departure_airport} to {self.arrival_airport} | Timeslot: {self.departure_time} to {self.arrival_time}"
    
class Flightselection(models.Model):
    departing_flight = models.ForeignKey(Flight, related_name='departing_flight', on_delete=models.CASCADE)
    returning_flight = models.ForeignKey(Flight, related_name='returning_flight', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    tag = models.CharField(max_length=20)
    
    def __str__(self):
        return f"{self.departing_flight} / {self.returning_flight} - {self.price} [{self.tag}]"
    
# class Note(models.Model):
#     title = models.CharField(max_length=100)
#     content = models.TextField()
#     creation_date = models.DateTimeField(auto_now_add=True) #Do not pass, automatically populate DB
#     author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes") #Delete all notes if this User is deleted

#     def __str__ (self):
#         return self.title 