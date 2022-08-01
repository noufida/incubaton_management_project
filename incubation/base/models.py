from django.db import models
from django.contrib.auth.models import User
# Create your models here.

SECTION=[
    ('a','a'),
    ('b','b'),
    ('c','c'),
    ('d','d'),]

class Slots(models.Model):
    day = models.CharField(max_length=15)
    time = models.CharField(max_length=15)
    section = models.CharField( max_length=5, choices=SECTION)
    booked = models.BooleanField(default=False)


CHOICES=[
    ('registered','registered'),
    ('pending','pending'),
    ('approved','approved'),
    
]

class Register(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    email = models.CharField(max_length=50)   
    phone_number = models.CharField(max_length=10) 
    company_name = models.CharField(max_length=50)     
    team_description = models.TextField(max_length=200)
    product_description = models.TextField(max_length=200)
    problem_description = models.TextField(max_length=200)
    status = models.CharField( max_length=50, choices=CHOICES, default='registered') 
    slot = models.ForeignKey(Slots, on_delete=models.SET_NULL ,null=True,blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.company_name

