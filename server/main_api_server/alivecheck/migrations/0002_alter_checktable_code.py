# Generated by Django 5.1.1 on 2024-09-23 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alivecheck', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='checktable',
            name='code',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
        ),
    ]
