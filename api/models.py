from django.db import models

# Create your models here.


class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]


class Careers(models.Model):
    careerID = models.CharField(max_length=300)
    careerName = models.CharField(max_length=300)
    imagePath = models.URLField(max_length=200)

    def __str__(self):
        return self.careerID[0:50]


class ProfessionalStory(models.Model):
    careerID = models.CharField(max_length=300)
    name = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    experience = models.CharField(max_length=300)
    funfact = models.CharField(max_length=300)
    q1 = models.TextField(null=True, blank=True)
    q2 = models.TextField(null=True, blank=True)
    q3 = models.TextField(null=True, blank=True)
    q4 = models.TextField(null=True, blank=True)
    q5 = models.TextField(null=True, blank=True)
    q6 = models.TextField(null=True, blank=True)
    q7 = models.TextField(null=True, blank=True)
    q8 = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.careerID[0:50]


# create table that stores the bios -> primarykey
# career type will be a foreign key
# make user from django admin auth will be foreign key
