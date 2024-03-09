from django.urls import path
from alumno import views
from .views import AlumnoListCreate, AlumnoRetrieveUpdateDelete, AlumnoList

urlpatterns = [
  path("alumnos", views.alumno, name="alumno"),
  path("alumnos/create", AlumnoListCreate.as_view(), name="Create-Alumno-List"),
  path("alumnos/<int:pk>", AlumnoRetrieveUpdateDelete.as_view(), name="Alumno-Details"),
  path("alumnos/all", AlumnoList.as_view(), name="Alumno-All")
]