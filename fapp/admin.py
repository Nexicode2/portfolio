from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name','phone','timeline','email',  'services', 'message' ,'created_at')
    search_fields = ('name', 'email', 'services')