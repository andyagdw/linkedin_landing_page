"""Defines the URL patterns for the LinkedIn clone application."""
# linkedin_app/urls.py

from django.urls import path
from . import views

app_name = 'linkedin_app'  # Namespace
urlpatterns = [
    path('', views.index, name='index'),
]
