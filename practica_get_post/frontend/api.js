// api.js
// Envia las peticiones fetch al backend de FastAPI.

const URL_API = "http://127.0.0.1:8000";

// GET /alumnos: pide la lista de alumnos guardados
export async function obtenerAlumnos() {
  const respuesta = await fetch(URL_API + "/alumnos");
  return respuesta.json();
}

// POST /alumnos: guarda un alumno nuevo
export async function registrarAlumno(alumno) {
  const respuesta = await fetch(URL_API + "/alumnos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(alumno)
  });
  return respuesta.json();
}
