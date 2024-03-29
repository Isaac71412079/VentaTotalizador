import {precioNeto, precioTotal, impuestoEstado, calcularDescuento} from "./totalizador.js";
import {mostrarPrecioNeto, mostrarPrecioTotal, mostrarImpuesto, mostrarDescuento} from "./mostrarTotalizador.js";

describe("Totalizador", () => {
  it("deberia mostrar el precio neto", () => {
    expect(precioNeto(3, 2)).toEqual(6);
  });
  
  it("deberia entergar precio neto", () => {
    expect(precioNeto(5, 2)).toEqual(10);
  });

  it("deberia mostrar el precio neto de 5 items a un precio de 2 debria mostrar 10", () => {
    expect(mostrarPrecioNeto(5, 2)).toEqual("El precio neto (5*$2) es: 10");
  });

  //IMPUESTOS
  it("se muestra Impuesto y porcentaje de CA", () => {
    const neto = precioNeto(100, 1);
    expect(precioTotal(neto, 8.25)).toEqual(108.25);
  })
  
  it("se muestra un mensaje del precio total de 200 unidades a un precio de 2 con un impuesto de 8,25", () => {
    expect(mostrarPrecioTotal(precioNeto(200, 2), 8.25)).toEqual("El precio total es: 433");
  });

  it("Se calcula el precio total de acuerdo a CA, con 200 unidades a un precio de 2", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarPrecioTotal(neto, impuestoEstado("CA"))).toEqual("El precio total es: 433");
  });

  it("Se muestra cuanto es el impuesto segun que estado", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarImpuesto(neto, "CA")).toEqual("El impuesto de CA(%8.25) es: 33");
  });

  it("Se calcula el precio total de acuerdo a TX, con 200 unidades a un precio de 2", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarPrecioTotal(neto, impuestoEstado("TX"))).toEqual("El precio total es: 425");
  });

  it("Se muestra cuanto es el impuesto segun que estado", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarImpuesto(neto, "TX")).toEqual("El impuesto de TX(%6.25) es: 25");
  });

  it("Se calcula el precio total de acuerdo a AL, con 200 unidades a un precio de 2", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarPrecioTotal(neto, impuestoEstado("AL"))).toEqual("El precio total es: 416");
  });

  it("Se muestra cuanto es el impuesto segun que estado (AL) deberia mostrar 16", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarImpuesto(neto, "AL")).toEqual("El impuesto de AL(%4) es: 16");
  });

  it("Se calcula el precio total de acuerdo a NV, con 200 unidades a un precio de 2", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarPrecioTotal(neto, impuestoEstado("NV"))).toEqual("El precio total es: 432");
  });

  it("Se muestra cuanto es el impuesto segun que estado (NV) deberia mostrar 32", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarImpuesto(neto, "NV")).toEqual("El impuesto de NV(%8) es: 32");
  });

  it("Se calcula el precio total de acuerdo a UT, con 200 unidades a un precio de 2", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarPrecioTotal(neto, impuestoEstado("UT"))).toEqual("El precio total es: 426.6");
  });

  it("Se muestra cuanto es el impuesto segun que estado (UT) deberia mostrar 26.6", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarImpuesto(neto, "UT")).toEqual("El impuesto de UT(%6.65) es: 26.6");
  });

  //DESCUENTOS
  //>1000
  it("Se muestra el precio total mas el impuesto y el descuento de > 1000", () => {
    const totalConDescuento = precioTotal(1000, impuestoEstado("CA"));
    expect(totalConDescuento).toEqual(1052.5);
  });

  it("Calcula correctamente el descuento para un total mayor a 1000", () => {
    const descuento = calcularDescuento(1200);
    expect(descuento).toEqual(36); 
  });

  it("Se muestra el mensaje correctamente sobre cuanto es el descuento para un total mayor a 1000", () => {
    const descuento = precioNeto(1200, 1);
    expect(mostrarDescuento(descuento, impuestoEstado("CA"))).toEqual("El descuento(3%): 37.89"); 
  });

  //>3000
  it("Se muestra el precio total mas el impuesto y el descuento de > 3000", () => {
    const totalConDescuento = precioTotal(3000, impuestoEstado("CA"));
    expect(totalConDescuento).toEqual(3097.5);
  });

  it("Calcula correctamente el descuento para un total mayor a 3000", () => {
    const descuento = calcularDescuento(3000);
    expect(descuento).toEqual(150); 
  });

  it("Se muestra el mensaje correctamente sobre cuanto es el descuento para un total mayor a 3000", () => {
    const descuento = precioNeto(3000, 1);
    expect(mostrarDescuento(descuento, impuestoEstado("CA"))).toEqual("El descuento(5%): 154.875"); 
  });

  //>7000
  it("Se muestra el precio total mas el impuesto y el descuento de > 7000 del estado de NV", () => {
    const totalConDescuento = precioTotal(7100, impuestoEstado("NV"));
    expect(totalConDescuento).toEqual(7171);
  });

  it("Calcula correctamente el descuento para un total mayor a 7000", () => {
    const descuento = calcularDescuento(7450);
    expect(descuento).toEqual(521.5); 
  });
});