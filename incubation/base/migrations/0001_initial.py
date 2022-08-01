# Generated by Django 4.0.6 on 2022-07-21 15:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Slots',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.CharField(max_length=15)),
                ('time', models.CharField(max_length=15)),
                ('section', models.CharField(choices=[('a', 'a'), ('b', 'b'), ('c', 'c'), ('d', 'd')], max_length=5)),
                ('booked', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=50)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('phone_number', models.CharField(max_length=10)),
                ('company_name', models.CharField(max_length=50)),
                ('team_description', models.TextField(max_length=200)),
                ('product_description', models.TextField(max_length=200)),
                ('problem_description', models.TextField(max_length=200)),
                ('status', models.CharField(choices=[('registered', 'registered'), ('pending', 'pending'), ('approved', 'approved')], default='registered', max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('slot', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.slots')),
            ],
        ),
    ]