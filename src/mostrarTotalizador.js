import {impuestoEstado, precioNeto, precioTotal, calcularDescuento} from "./totalizador.js";

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

function mostrarDescuento(neto, porcentaje) {
    const total = precioTotal(neto, porcentaje);
    let descuento = 0;
    if ((total >= 1000) && (total < 3000)) {
        descuento = 0.03 * total;
    }
    return "El descuento(" + (descuento / total * 100) + "%): " + descuento;
}

export {mostrarPrecioNeto, mostrarPrecioTotal, mostrarImpuesto, mostrarDescuento};