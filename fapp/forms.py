from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):

    class Meta:
        model = Contact

        fields = [
            'name',
            'phone',
            'timeline',
            'email',
            'services',
            'message',
        ]

        widgets = {

            'name': forms.TextInput(attrs={
                'placeholder': 'Enter Your Name',
                'class': 'form-control'
            }),

            'phone': forms.TextInput(attrs={
                'placeholder': 'Enter Phone Number',
                'class': 'form-control'
            }),
            'timeline': forms.TextInput(attrs={
                'placeholder': 'Enter Your timeline',
                'class': 'form-control'
            }),

            'email': forms.EmailInput(attrs={
                'placeholder': 'Enter Your Email',
                'class': 'form-control'
            }),


            'services': forms.TextInput(attrs={
                'placeholder': 'Which Service You Need?',
                'class': 'form-control'
            }),

            'message': forms.Textarea(attrs={
                'placeholder': 'Write Message',
                'class': 'form-control',
                'rows': 5
            }),
        }