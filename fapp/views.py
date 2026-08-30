from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact
from .forms import ContactForm


def contact(request):
    form = ContactForm()

    if request.method == "POST":
        form = ContactForm(request.POST)
       
        if form.is_valid():
            form.save()
            

            messages.success(request, "Message sent successfully!")
            return redirect('contact')

    return render(request, 'contact.html', {'form': form})


def home(request):
    return render(request, 'base.html')


def about(request):
    return render(request, 'about.html')


def services(request):
    return render(request, 'services.html')


def blog(request):
    return render(request, 'portfolio.html')

