"""
Defines the forms used in the LinkedIn clone application.
"""
# linkedin_app/forms.py

from django import forms


class SignInForm(forms.Form):
    """
    Form for user sign-in.

    Fields
    ---------
    email_or_phone: CharField
        A required field for the user to enter their email address or
        phone number.
    password: CharField
        A required field for the user to enter their password.
    """

    email_or_phone = forms.CharField(
        label="Email or phone",
        widget=forms.TextInput(
            attrs={
                'class': 'flex-grow-1 py-3 rounded px-3'
            }
        )
    )

    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                'class': 'flex-grow-1 py-3 px-3 rounded password-input'
            }
        )
    )
