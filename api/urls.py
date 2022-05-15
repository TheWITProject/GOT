from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.getNotes, name = "notes"),
    path('notes/<str:pk>/update/',views.updateNote, name="update-note"),
    path('notes/<str:pk>/',views.getNote, name="note"),
    
    path('careers/', views.getCareers, name="careers"),

    path('stories/',views.getAllStories, name="stories"),
    path('stories/create',views.createStory, name="create-story"),
    path('stories/<str:pk>',views.getStories, name="get-stories"),

    path('post/<str:pk>/',views.getPost, name="post"),
    path('posts/', views.getPosts, name="posts"),

    path('careeroverviews/',views.getAllOverviews, name="career_overviews"),
    path('careeroverviews/create',views.createOverview, name="create-career_overview"),
    path('careeroverviews/<str:pk>',views.getOverview, name="get-overview"),
    
]
