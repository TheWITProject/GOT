from django.contrib import admin
from .models import Login
# Register your models here.
## included the post model defined in models.py
admin.site.register(Login) ## makes it visble on admin 

