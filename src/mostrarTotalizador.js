import {impuestoEstado, precioNeto, precioTotal} from "./totalizador.js";

function mostrarPrecioNeto(cantidad, precio) {
    const precioN = precioNeto(cantidad, precio);
    return "El precio neto (" + cantidad + "*$"+precio+") es: "+ precioN;
}

function mostrarPrecioTotal(neto, porcentaje) {
    return "El precio total es: " + precioTotal(neto, porcentaje);
}

function mostrarImpuesto(neto, estado) {
    const impuesto = impuestoEstado(estado);
    const porcentaje = neto * impuesto / 100;
    return "El impuesto de " + estado +"(%"+ impuesto +")"+ " es: " + porcentaje;
}

export {mostrarPrecioNeto, mostrarPrecioTotal, mostrarImpuesto};