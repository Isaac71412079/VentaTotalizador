import {mostrarPrecioNeto, mostrarPrecioTotal, mostrarImpuesto} from "./mostrarTotalizador.js";
import { precioNeto } from "./totalizador.js";

const cantidad = document.querySelector("#cantidaddeitem");
const precio = document.querySelector("#precioporitem");
const estado = document.querySelector("#impuestoEstado");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidaditem = Number.parseInt(cantidad.value);
  const precioitem = Number.parseInt(precio.value);
  const estadoItem = estado.value;

  const precioNeto_str = mostrarPrecioNeto(cantidaditem, precioitem);
  const precioTotal_str = mostrarPrecioTotal(precioNeto(cantidaditem, precioitem), 8.25);

  console.log(estadoItem);

  div.innerHTML = "<p>" + precioNeto_str + "</p> <p>" + mostrarImpuesto(precioNeto(cantidaditem, precioitem), estadoItem) + "</p> <p>" + precioTotal_str + "</p>";
});
