# Generated by Django 3.2.9 on 2022-05-17 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_remove_careeroverview_horn_length'),
    ]

    operations = [
        migrations.AddField(
            model_name='careeroverview',
            name='ordering',
            field=models.DateTimeField(default=True),
            preserve_default=False,
        ),
    ]