import {precioNeto,precioTotal} from "./totalizador.js";
import {mostrarPrecioNeto, mostrarPrecioTotal} from "./mostrarTotalizador.js";

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
});