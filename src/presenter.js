import {mostrarPrecioNeto, mostrarPrecioTotal} from "./mostrarTotalizador.js";
import { precioNeto } from "./totalizador.js";

const cantidad = document.querySelector("#cantidaddeitem");
const precio = document.querySelector("#precioporitem");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidaditem = Number.parseInt(cantidad.value);
  const precioitem = Number.parseInt(precio.value);

  const precioNeto_str = mostrarPrecioNeto(cantidaditem, precioitem);
  const precioTotal_str = mostrarPrecioTotal(precioNeto(cantidaditem, precioitem), 8.25);

  div.innerHTML = "<p>" + precioNeto_str + "</p> <p>" + precioTotal_str + "</p>";
});
