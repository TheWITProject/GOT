# Generated by Django 3.2.9 on 2022-05-15 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_careeroverview_careerid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='careeroverview',
            name='tech_skill',
            field=models.TextField(blank=True, null=True),
        ),
    ]
