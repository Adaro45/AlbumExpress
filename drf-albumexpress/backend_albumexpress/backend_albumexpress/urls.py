from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('products.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api-auth/', include('dj_rest_auth.urls')),
    path('api-token-auth/', obtain_auth_token),  # Endpoint adicional para obtener token
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

