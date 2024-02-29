import precioNeto from "./totalizador";

function mostrarPrecioNeto(cantidad, precio) {
    return "El precio neto es: " + precioNeto(cantidad, precio);
}

export default mostrarPrecioNeto;