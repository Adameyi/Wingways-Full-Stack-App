import pytz
from django.utils import timezone
from django.core.management.base import BaseCommand
from api.models import Flight, Airport
from datetime import datetime, timedelta

class Command(BaseCommand):
    help = "Create Sample Flights"
    
    def handle(self, *args, **kwargs):
        create_flights()
        self.stdout.write(self.style.SUCCESS('Flights created successfully.'))

def create_flights():
    # List of Airports
    airports = Airport.objects.all()
    
    # List of Timeslots (hour, minute)
    timeslots = [
        (6, 5),
        (7, 5),
        (8, 35),
        (10, 35),
        (12, 35),
        (14, 35),
        (16, 35),
    ]
    
    # Current Timezone
    tz = pytz.timezone('UTC')
    
    # Default values
    duration = timedelta(hours=8, minutes=30)
    price = 1500.00
    seats_left = 50
    flight_class = 'Economy'
    airline = 'Qantas'
    
    for departure_airport in airports:
        for arrival_airport in airports:
            if departure_airport == arrival_airport:
                continue  # Skip if departing and arriving airports are the same
                
            for idx, (hour, minute) in enumerate(timeslots, start=1):
                # Create a naive datetime and make it timezone-aware using pytz
                naive_departure_time = datetime.now().replace(hour=hour, minute=minute, second=0, microsecond=0)
                departure_time = tz.localize(naive_departure_time)  # Localize naive datetime
                
                flight_id = f"{departure_airport.iata_code}-{arrival_airport.iata_code}_{str(idx).zfill(2)}"
                
                if not Flight.objects.filter(flight_id=flight_id).exists():
                    Flight.objects.create(
                        flight_id=flight_id,
                        departingFlight_code=departure_airport.iata_code,
                        returningFlight_code=arrival_airport.iata_code,
                        departure_airport=departure_airport,
                        arrival_airport=arrival_airport,
                        departure_time=departure_time,
                        duration=duration,
                        price=price,
                        seats_left=seats_left,
                        flight_class=flight_class,
                        airline=airline
                    )
                else:
                    print(f"Flight {flight_id} already exists!")
