function precioNeto(cantidad, precio) {
    return cantidad*precio;
}

function impuestoEstado(estado){
  if (estado === "CA")
    return 8.25;
  else
    if (estado === "TX")
      return 6.25;
    else
      if (estado === "AL")
        return 4;
      else
        return 8;
}

function precioTotal(total, impuesto){
    const totalConImpuesto = total + (total * impuesto / 100);
    return totalConImpuesto;
      
  }
export {precioNeto, precioTotal, impuestoEstado};

