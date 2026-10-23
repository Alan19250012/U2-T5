// script.js
// Responde a los clics del usuario y actualiza la tabla con los datos de la API.

import { obtenerAlumnos, registrarAlumno } from "./api.js";

const formulario = document.getElementById("formulario");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const mensaje = document.getElementById("mensaje");

// Dibuja la tabla con la lista de alumnos
function mostrarAlumnos(alumnos) {
  cuerpoTabla.innerHTML = "";

  if (alumnos.length === 0) {
    cuerpoTabla.innerHTML =
      '<tr><td colspan="3">Todavia no hay alumnos registrados.</td></tr>';
    return;
  }

  alumnos.forEach(function (alumno) {
    const fila = document.createElement("tr");
    fila.innerHTML =
      "<td>" + alumno.id + "</td>" +
      "<td>" + alumno.nombre + "</td>" +
      "<td>" + alumno.carrera + "</td>";
    cuerpoTabla.appendChild(fila);
  });
}

// Pide la lista al backend y la muestra
async function actualizarLista() {
  const alumnos = await obtenerAlumnos();
  mostrarAlumnos(alumnos);
}

// Al enviar el formulario se guarda un alumno
formulario.addEventListener("submit", async function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const carrera = document.getElementById("carrera").value;

  await registrarAlumno({ nombre: nombre, carrera: carrera });

  formulario.reset();
  mensaje.textContent = "Alumno guardado correctamente.";
  actualizarLista();
});

// Boton para repetir el GET manualmente
document.getElementById("btn-actualizar").addEventListener("click", function () {
  mensaje.textContent = "";
  actualizarLista();
});

// Al cargar la pagina se muestra la lista actual
actualizarLista();
