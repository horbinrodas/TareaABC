from django.db import models

# Create your models here.

class Alumno(models.Model):
  carnet = models.IntegerField(primary_key = True)
  nombres = models.CharField()
  apellidos = models.CharField()
  correoelectronico = models.CharField()
  fechanacimiento = models.DateField()