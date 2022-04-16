from rest_framework import serializers
from blog.models import Post, Book
class PostSerializer(serializers.ModelSerializer):
   class Meta:
       model = Post
       fields = ('author', 'title', 'text', 'created_date', 'published_date')

class BookSerializer(serializers.ModelSerializer):
   class Meta:
       model = Book
       fields = ('author', 'title', 'description', 'pages', 'published_date')
