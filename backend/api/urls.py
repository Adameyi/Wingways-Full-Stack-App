from django.urls import path
from . import views

urlpatterns = [
    path('search-airports/', views.search_airports, name='search_airports')
]
