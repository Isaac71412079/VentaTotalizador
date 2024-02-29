import {precioNeto,precioTotal} from "./totalizador.js";

function mostrarPrecioNeto(cantidad, precio) {
    return "El precio neto es: " + precioNeto(cantidad, precio);
}

export default mostrarPrecioNeto;