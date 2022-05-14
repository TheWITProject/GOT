from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.getNotes, name = "notes"),
    path('notes/<str:pk>/update/',views.updateNote, name="update-note"),
    path('notes/<str:pk>/',views.getNote, name="note"),
    path('careers/', views.getCareers, name="careers"),
    path('post/<str:pk>/',views.getPost, name="post"),
    path('posts/', views.gePosts, name="posts"),

]
