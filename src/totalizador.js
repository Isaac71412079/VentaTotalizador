function precioNeto(cantidad, precio) {
    return cantidad*precio;
}

function impuestoEstado(estado){
  return 8.25;
}

function precioTotal(total, impuesto){
    // impuesto = impuestoEstado(estado);
    const totalConImpuesto = total + (total * impuesto / 100);
    return totalConImpuesto;
      
  }
export {precioNeto, precioTotal, impuestoEstado};

