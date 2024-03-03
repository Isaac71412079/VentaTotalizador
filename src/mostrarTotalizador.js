import {impuestoEstado, precioNeto,precioTotal} from "./totalizador.js";

function mostrarPrecioNeto(cantidad, precio) {
    return "El precio neto es: " + precioNeto(cantidad, precio);
}

function mostrarPrecioTotal(neto, porcentaje) {
    return "El precio total es: " + precioTotal(neto, porcentaje);
}

function mostrarImpuesto(neto, estado) {
    const impuesto = impuestoEstado(estado);
    const porcentaje = neto * impuesto / 100;
    return "El impuesto de " + estado + " es: " + porcentaje;
}

export {mostrarPrecioNeto, mostrarPrecioTotal, mostrarImpuesto};