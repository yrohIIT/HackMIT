from django.shortcuts import render
from .models import Profile
from django.contrib.auth.models import User

from .serializers import UserSerializer
from django.http.response import JsonResponse

# Create your views here.

def make_user(request):
    if request.method == 'POST':
        uname = request.POST.get("username")
        passwd = request.POST.get("password")
        title = request.POST.get("title")
        lat = request.POST.get("lat")
        lng = request.POST.get("lng")

        print(uname)
        print(passwd)
        print(title)
        print(lat)
        print(lng)

        user = User.objects.create_user(username = uname, password = passwd)
        user.profile.title = title
        user.profile.lat = lat
        user.profile.lng = lng

        user.save()
        return
    return

def get_users(request):
    if request.method == "GET":
        profiles = Profile.objects.all()

        serializers = UserSerializer(profiles, many=True)
        return JsonResponse(serializers.data, safe=False)