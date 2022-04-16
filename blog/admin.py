from django.contrib import admin
from .models import Post, Book
## included the post model defined in models.py
admin.site.register(Post) ## makes it visble on admin 
admin.site.register(Book)