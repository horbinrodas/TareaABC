from django.shortcuts import render
from rest_framework import generics
from .models import Alumno
from .serializer import AlumnoSerializer

# Create your views here.

def alumno(requests):
  return render(requests, 'alumno/alumno.html')

class AlumnoListCreate(generics.ListCreateAPIView):
  queryset = Alumno.objects.all()
  serializer_class = AlumnoSerializer

class AlumnoRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
  queryset= Alumno.objects.all()
  serializer_class = AlumnoSerializer

class AlumnoList(generics.ListAPIView):
  queryset = Alumno.objects.all()
  serializer_class = AlumnoSerializer