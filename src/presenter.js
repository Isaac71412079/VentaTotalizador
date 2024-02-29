import mostrarPrecioNeto from "./mostrarTotalizador.js";

const cantidad = document.querySelector("#cantidaddeitem");
const precio = document.querySelector("#precioporitem");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidaditem = Number.parseInt(cantidad.value);
  const precioitem = Number.parseInt(precio.value);

  div.innerHTML = "<p>" + mostrarPrecioNeto(cantidaditem, precioitem) + "</p>";
});
