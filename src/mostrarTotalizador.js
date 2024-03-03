import {precioNeto,precioTotal} from "./totalizador.js";

function mostrarPrecioNeto(cantidad, precio) {
    return "El precio neto es: " + precioNeto(cantidad, precio);
}

function mostrarPrecioTotal(neto, porcentaje) {
    return "El precio total es: " + precioTotal(neto, porcentaje);
}

export {mostrarPrecioNeto, mostrarPrecioTotal};