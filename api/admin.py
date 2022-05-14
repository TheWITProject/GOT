from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Note)
admin.site.register(Careers)
admin.site.register(ProfessionalStory)
admin.site.register(DiscussionPost)

