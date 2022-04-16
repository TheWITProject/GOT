from django.urls import include, path
from rest_framework import routers
from . import views
#from . import PostViewSet


router = routers.DefaultRouter()

urlpatterns = [
   path('', include(router.urls)),
  
]

