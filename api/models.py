from django.db import models

# Create your models here.

class Note(models.Model):
    body = models.TextField(null=True,blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]

class Careers(models.Model):
    careerName = models.TextField(null=True,blank=True)
    imagePath = models.TextField(max_length = 200)

    def __str__(self):
        return self.careerName[0:50]

class DiscussionPost(models.Model):
    title = models.TextField(null=True,blank=True)
    author = models.TextField(max_length = 200)
    date_created = models.DateTimeField(auto_now_add=True)
    content = models.TextField(null=True,blank=True)
    
    def __str__(self):
        return self.careerName[0:50]