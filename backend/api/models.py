from django.db import models


# from django.contrib.auth.models import User


class Airport(models.Model):
    iata_code = models.CharField(max_length=5, unique=True)
    country_code = models.CharField(max_length=5)   
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.city}, {self.country} ({self.code})"

# class Note(models.Model):
#     title = models.CharField(max_length=100)
#     content = models.TextField()
#     creation_date = models.DateTimeField(auto_now_add=True) #Do not pass, automatically populate DB
#     author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes") #Delete all notes if this User is deleted

#     def __str__ (self):
#         return self.title 