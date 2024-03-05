import {mostrarPrecioNeto, mostrarPrecioTotal, mostrarImpuesto, mostrarDescuento} from "./mostrarTotalizador.js";
import { precioNeto, precioTotal, impuestoEstado, calcularDescuento } from "./totalizador.js";

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
  const precioTotal_str = mostrarPrecioTotal(precioNeto(cantidaditem, precioitem), impuestoEstado(estadoItem));
  const impuesto_str = mostrarImpuesto(precioNeto(cantidaditem, precioitem), estadoItem);
  const descuento_str = mostrarDescuento(precioNeto(cantidaditem, precioitem), impuestoEstado(estadoItem));

  div.innerHTML = "<p>" + precioNeto_str + "</p> <p>" + descuento_str +"</p> <p>" + impuesto_str + "</p> <p>" + precioTotal_str + "</p>";
});
