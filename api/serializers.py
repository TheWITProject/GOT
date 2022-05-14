from rest_framework.serializers import ModelSerializer
from .models import Note
from .models import Careers
from .models import *

#import this in views
class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
         #list of attributes you want to serialize in this case all attributes

class CareersSerializer(ModelSerializer):
    class Meta:
        model = Careers
        fields = '__all__'


class ProfessionalSerializer(ModelSerializer):
    class Meta:
        model = ProfessionalStory
class DiscussionSerializer(ModelSerializer):
    class Meta:
        model = DiscussionPost
        fields = '__all__'