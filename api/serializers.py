from rest_framework.serializers import ModelSerializer
from .models import Note

#import this in views
class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
         #list of attributes you want to serialize in this case all attributes
