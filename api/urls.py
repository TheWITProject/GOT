from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.getNotes, name = "notes"),
    path('notes/<str:pk>/update/',views.updateNote, name="update-note"),
    path('notes/<str:pk>/',views.getNote, name="note"),
    path('careers/', views.getCareers, name="careers"),
    path('stories/',views.getAllStories, name="stories"),
    path('stories/<str:pk>',views.getStories, name="get-stories"),
    path('stories/create',views.postStories, name="create-stories")

]
