import requests
import os
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Cargar variables de entorno
ZOHO_CLIENT_ID = os.getenv("ZOHO_CLIENT_ID")
ZOHO_CLIENT_SECRET = os.getenv("ZOHO_CLIENT_SECRET")
ZOHO_REDIRECT_URI = os.getenv("ZOHO_REDIRECT_URI")
ZOHO_ACCOUNTS_URL = os.getenv("ZOHO_ACCOUNTS_URL")


@api_view(["GET"])
def zoho_auth(request):
    """
    Redirige al usuario a Zoho para autenticarse.
    """
    auth_url = (
        f"{ZOHO_ACCOUNTS_URL}/oauth/v2/auth?"
        f"client_id={ZOHO_CLIENT_ID}"
        f"&response_type=code"
        f"&redirect_uri={ZOHO_REDIRECT_URI}"
        f"&scope=ZohoCRM.modules.ALL"
        f"&access_type=offline"
        f"&prompt=consent"
    )
    return redirect(auth_url)


@api_view(["GET"])
def zoho_callback(request):
    """
    Maneja la respuesta de Zoho con el código de autorización y obtiene el Access Token.
    """
    authorization_code = request.GET.get("code")

    if not authorization_code:
        return Response({"error": "Código de autorización no encontrado"}, status=400)

    token_url = f"{ZOHO_ACCOUNTS_URL}/oauth/v2/token"

    data = {
        "grant_type": "authorization_code",
        "client_id": ZOHO_CLIENT_ID,
        "client_secret": ZOHO_CLIENT_SECRET,
        "redirect_uri": ZOHO_REDIRECT_URI,
        "code": authorization_code,
    }

    response = requests.post(token_url, data=data)
    token_data = response.json()

    if "access_token" in token_data:
        # Guardar los tokens en la base de datos o devolverlos como respuesta
        return Response(token_data)
    else:
        return Response({"error": "Error al obtener el Access Token", "details": token_data}, status=500)
