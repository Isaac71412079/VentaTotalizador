function precioNeto(cantidad, precio) {
    return cantidad*precio;
}

function precioTotal(total, impuesto){
    const totalConImpuesto = total + (total * impuesto / 100);
    return totalConImpuesto;
      
  }
export {precioNeto, precioTotal};

