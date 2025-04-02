from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("zoho_api_console/", include("zoho_api_console.urls")),
]
