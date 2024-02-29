import {precioNeto,precioTotal} from "./totalizador.js";
import mostrarPrecioNeto from "./mostrarTotalizador.js";

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
  
});