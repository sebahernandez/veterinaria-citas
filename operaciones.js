// operaciones.js
const fs = require("fs");

// Función para registrar una nueva cita
function registrar(nombre, edad, tipo, color, enfermedad) {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  const nuevaCita = { nombre, edad, tipo, color, enfermedad };
  citas.push(nuevaCita);
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
  console.log("Cita registrada con éxito");
}

// Función para leer todas las citas
function leer() {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(citas);
}

module.exports = { registrar, leer };
