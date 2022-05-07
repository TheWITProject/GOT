
from rest_framework.views import APIView
# from rest_framework import permissions
# from django.contrib import auth
from rest_framework.response import Response
# from user_profile.models import UserProfile
from .serializers import UserProfileSerializer
# from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
# from django.utils.decorators import method_decorator
from .models import UserProfile

# get our profile 
class GetUserProfileView(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            # gets user
            # get retrives single unique obj 
            # filter returns list of objects that match filter criteria
            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({ 'profile': user_profile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when retrieving profile' })



class UpdateUserProfileView(APIView):
    # use put bc we are updating
    def put(self, request, format=None):
        try:
            user = self.request.user
            username = user.username
                
            data = self.request.data
            first_name = data['first_name']
            last_name = data['last_name']
            phone = data['phone']
            city = data['city']

            UserProfile.objects.filter(user=user).update(first_name=first_name, last_name=last_name, phone=phone, city=city)

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({ 'profile': user_profile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when updating profile' })