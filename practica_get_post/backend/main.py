# main.py
# Practica: conectar HTML, FastAPI y PostgreSQL con GET y POST.

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import get_connection

app = FastAPI(title="Registro de alumnos", version="1.0")

# Permitir que el frontend (servido en el puerto 5500) pueda llamar a la API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5500", "http://127.0.0.1:5500"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Alumno(BaseModel):
    """Modelo de datos que recibe el POST."""
    nombre: str
    carrera: str


@app.get("/alumnos")
def listar_alumnos():
    """Devuelve todos los alumnos guardados en PostgreSQL."""
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT id, nombre, carrera FROM alumnos ORDER BY id")
            columnas = [desc.name for desc in cur.description]
            return [dict(zip(columnas, fila)) for fila in cur.fetchall()]


@app.post("/alumnos")
def registrar_alumno(alumno: Alumno):
    """Guarda un alumno nuevo y devuelve el registro creado."""
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO alumnos (nombre, carrera) VALUES (%s, %s) "
                "RETURNING id, nombre, carrera",
                (alumno.nombre, alumno.carrera),
            )
            fila = cur.fetchone()
            columnas = [desc.name for desc in cur.description]
            return dict(zip(columnas, fila))
