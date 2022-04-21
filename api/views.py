
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from .models import Note
from .models import Careers
from .serializers import CareersSerializer, NoteSerializer
# Create your views here.

@api_view(['GET'])
def getCareers(request):
    careers = Careers.objects.all()
    serializer = CareersSerializer(careers,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all() 
    #notes can not be passed directly to Response it needs to be serialized
    serializer = NoteSerializer(notes, many=True)
    #many -> do you want to serialize multiple objects or just one?
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request,pk):
    notes = Note.objects.get(id=pk) 
    #notes can not be passed directly to Response it needs to be serialized
    serializer = NoteSerializer(notes, many=False)
    #many -> do you want to serialize multiple objects or just one?
    return Response(serializer.data)

#HTTP methods:
# @api_view(['GET'])
# def getRoutes(request):
#     routes = [
#         {
#             'Endpoint': '/notes/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns an array of notes'
#         },
#         {
#             'Endpoint': '/notes/id',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns a single note object'
#         },
#         {
#             'Endpoint': '/notes/create/',
#             'method': 'POST',
#             'body': {'body': ""},
#             'description': 'Creates new note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/update/',
#             'method': 'PUT',
#             'body': {'body': ""},
#             'description': 'Creates an existing note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/delete/',
#             'method': 'DELETE',
#             'body': None,
#             'description': 'Deletes and exiting note'
#         },
#     ]
#     return Response(routes)