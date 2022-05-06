from django.contrib import admin

# Register your models here.

from .models import Note
from .models import Careers
from .models import ProfessionalStory

admin.site.register(Note)
admin.site.register(Careers)
admin.site.register(ProfessionalStory)