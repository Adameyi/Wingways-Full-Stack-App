from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import FlightViewSet, search_airports, flight_list

router = DefaultRouter()
router.register(r'flights', FlightViewSet)

urlpatterns = [
    path('search-airports/', search_airports, name='search_airports'),
    path('flights-list/', flight_list, name='flight_list'),
    path('', include(router.urls)),
]
