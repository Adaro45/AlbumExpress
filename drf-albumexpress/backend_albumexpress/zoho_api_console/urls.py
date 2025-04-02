from django.urls import path
from .views import zoho_auth, zoho_callback

urlpatterns = [
    path("oauth/authorize/", zoho_auth, name="zoho_auth"),
    path("oauth/callback/", zoho_callback, name="zoho_callback"),
]
