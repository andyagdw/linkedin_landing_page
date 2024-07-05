"""Defines the views for the LinkedIn clone application."""
# linkedin_app/views.py

from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from .forms import SignInForm


# Create your views here.
def index(request: HttpRequest) -> HttpResponse:
    """
    Handles both GET and POST requests. If the request method is POST,
    it processes the sign-in form and redirects to the index page.
    For GET requests, it displays an empty sign-in form.

    Parameters
    ---------
    request: HttpRequest
        The HTTP request object.

    Returns
    ---------
    HttpResponse
    """

    if request.method == 'POST':
        form = SignInForm(request.POST)
        return redirect('linkedin_app:index')

    else:
        form = SignInForm()

    context = {
        'form': form,
    }

    return render(request, 'linkedin_app/index.html', context=context)
