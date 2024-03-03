import {precioNeto,precioTotal} from "./totalizador.js";

function mostrarPrecioNeto(cantidad, precio) {
    return "El precio neto es: " + precioNeto(cantidad, precio);
}

function mostrarPrecioTotal(neto, porcentaje) {
    return "El precio total es: " + precioTotal(neto, porcentaje);
}

function mostrarImpuesto(neto, estado) {
    return "El impuesto de " + estado + " es: " + 33;
}

export {mostrarPrecioNeto, mostrarPrecioTotal, mostrarImpuesto};