from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^make_user$', views.make_user),
    url(r'^get_users$', views.get_users)
]