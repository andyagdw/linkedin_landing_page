"""Context Processors for Django Templates

This module provides custom context processors for use in Django
templates. These context processors add specific context variables
to the template context, making them available to all templates that
use the request context
"""
# linkedin_app/context_processors.py

from django.conf import settings

def fontawesome_kit(request):
    """
    A context processor that adds the FontAwesome kit code to the
    context.

    This function retrieves the FontAwesome kit code from the settings
    and makes it available to all templates that use the request
    context.

    Parameters
    ---------
    request: The HttpRequest object

    Returns
    ---------
    dict: A dictionary with the FontAwesome kit code under the key
    'FONTAWESOME_KIT'.
    """
    return {
        'FONTAWESOME_KIT': settings.FONTAWESOME_KIT
    }
    