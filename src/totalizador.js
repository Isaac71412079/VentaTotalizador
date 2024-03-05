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
        if (estado === "NV")
          return 8;
        else
          return 6.65;
}

function precioTotal(total, impuesto) {
  let totalConImpuesto = total + (total * impuesto / 100);
  let descuento = 0;

  if ((total>=1000) && (total<3000)) {
      descuento = total * 0.01; // Aplicar descuento del 3%
  }

  totalConImpuesto -= descuento; // Restar el descuento al total con impuesto
  return totalConImpuesto;
}

export {precioNeto, precioTotal, impuestoEstado};

