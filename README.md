# U2 T5 - Practica: conectar HTML, FastAPI y PostgreSQL (GET y POST)

Practica que registra alumnos desde una pagina web y los guarda en PostgreSQL.

El codigo completo esta en la carpeta `practica_get_post/`:

```
practica_get_post/
├── README.md          # instrucciones completas
├── frontend/          # index.html, styles.css, script.js, api.js
└── backend/           # database.py, main.py, requirements.txt
```

## Flujo

Navegador (frontend) -> fetch() -> FastAPI (backend) -> PostgreSQL -> navegador

## Datos de conexion (practica local)

- Base de datos: `clase_web`
- Usuario: `clase_user`
- Contraseña: `clase123`
- Puerto: `5432`

Revisa `practica_get_post/README.md` para los pasos de ejecucion.
