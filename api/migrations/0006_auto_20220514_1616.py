# Generated by Django 2.2.27 on 2022-05-14 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_merge_20220514_1615'),
    ]

    operations = [
        migrations.AlterField(
            model_name='careers',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='discussionpost',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='note',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]