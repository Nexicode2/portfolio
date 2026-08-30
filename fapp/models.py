from django.db import models
from django.utils import timezone

class Contact(models.Model):

    name = models.CharField(max_length=100)

    phone = models.CharField(max_length=20)

    timeline = models.CharField(max_length=100)
    
    email = models.EmailField()

    services = models.CharField(max_length=200)

    message = models.TextField(null=True, blank=False)

    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name