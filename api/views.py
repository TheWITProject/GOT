
from urllib import response
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note, Careers, ProfessionalStory
from .serializers import CareersSerializer, NoteSerializer, ProfessionalSerializer
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework import permissions

# Create your views here.
@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set' })



@api_view(['GET'])
def getCareers(request):
    careers = Careers.objects.all()
    serializer = CareersSerializer(careers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getStories(request, pk):
    stories = ProfessionalStory.objects.filter(careerID=pk)
    serializer = ProfessionalSerializer(stories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getAllStories(request):
    stories = ProfessionalStory.objects.all()
    serializer = ProfessionalSerializer(stories, many=True)
    return Response(serializer.data)

#@method_decorator(csrf_protect, name='dispatch')
@api_view(['POST'])
def createStory(request):
    data = request.data
    story = ProfessionalStory.objects.create(
        careerID=data['careerID'],
        name=data['name'],
        experience=data['experience'],
        description=data['description'],
        funfact=data['funfact'],
        q1=data['q1'],
        q2=data['q2'],
        q3=data['q3'],
        q4=data['q4'],
        q5=data['q5'],
        q6=data['q6'],
        q7=data['q7'],
        q8=data['q8'])
    serializer = ProfessionalSerializer(story, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    # notes can not be passed directly to Response it needs to be serialized
    serializer = NoteSerializer(notes, many=True)
    # many -> do you want to serialize multiple objects or just one?
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request, pk):
    notes = Note.objects.get(id=pk)
    # notes can not be passed directly to Response it needs to be serialized
    serializer = NoteSerializer(notes, many=False)
    # many -> do you want to serialize multiple objects or just one?
    return Response(serializer.data)


@api_view(['PUT'])  # put is for updating items
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
