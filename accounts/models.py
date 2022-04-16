from django.conf import settings
from django.db import models

# Create your models here.

class Login(models.Model): 
# should it be foreign key?
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.email
