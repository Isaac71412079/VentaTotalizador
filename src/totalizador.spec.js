import {precioNeto, precioTotal, impuestoEstado} from "./totalizador.js";
import {mostrarPrecioNeto, mostrarPrecioTotal, mostrarImpuesto} from "./mostrarTotalizador.js";

describe("Totalizador", () => {
  it("deberia mostrar el precio neto", () => {
    expect(precioNeto(3, 2)).toEqual(6);
  });
  
  it("deberia entergar precio neto", () => {
    expect(precioNeto(5, 2)).toEqual(10);
  });

  it("deberia mostrar el precio neto de 5 items a un precio de 2 debria mostrar 10", () => {
    expect(mostrarPrecioNeto(5, 2)).toEqual("El precio neto es: 10");
  });

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
    expect(mostrarImpuesto(neto, "CA")).toEqual("El impuesto de CA es: 33");
  });

  it("Se calcula el precio total de acuerdo a TX, con 200 unidades a un precio de 2", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarPrecioTotal(neto, impuestoEstado("TX"))).toEqual("El precio total es: 425");
  });

  it("Se muestra cuanto es el impuesto segun que estado", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarImpuesto(neto, "TX")).toEqual("El impuesto de TX es: 25");
  });

  it("Se calcula el precio total de acuerdo a AL, con 200 unidades a un precio de 2", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarPrecioTotal(neto, impuestoEstado("AL"))).toEqual("El precio total es: 416");
  });

  it("Se muestra cuanto es el impuesto segun que estado (AL) deberia mostrar 16", () => {
    const neto = precioNeto(200, 2);
    expect(mostrarImpuesto(neto, "AL")).toEqual("El impuesto de AL es: 16");
  });

  
});