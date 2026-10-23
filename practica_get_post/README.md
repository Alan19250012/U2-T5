# Practica: conectar HTML, FastAPI y PostgreSQL (GET y POST)

Esta practica registra alumnos desde una pagina web y los guarda en PostgreSQL.

## Flujo

```
Navegador (frontend, puerto 5500)
    |
    | fetch() -> GET /alumnos o POST /alumnos
    v
FastAPI (backend, puerto 8000)
    |
    | consultas SQL
    v
PostgreSQL (base: clase_web, tabla: alumnos)
```

## Estructura

```
practica_get_post/
├── README.md
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── api.js
└── backend/
    ├── database.py
    ├── main.py
    └── requirements.txt
```

## Datos de conexion

- Base de datos: `clase_web`
- Usuario: `clase_user`
- Contraseña: `clase123` (solo de practica local)
- Servidor: `localhost`
- Puerto: `5432`

## Paso 1: crear la base de datos

```sql
CREATE USER clase_user WITH PASSWORD 'clase123';
CREATE DATABASE clase_web OWNER clase_user;
```

Conectate con el usuario nuevo y crea la tabla:

```sql
CREATE TABLE alumnos (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    carrera VARCHAR(80) NOT NULL
);
```

## Paso 2: ejecutar el backend

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Abre http://127.0.0.1:8000/docs para ver los endpoints.

## Paso 3: abrir el frontend

En otra terminal:

```powershell
cd frontend
python -m http.server 5500
```

Abre http://localhost:5500, llena el formulario y guarda un alumno.
