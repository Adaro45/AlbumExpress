"""
WSGI config for albumexpress project.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_albumexpress.settings')

application = get_wsgi_application()

