import precioNeto from "./totalizador.js";

describe("Totalizador", () => {
  it("deberia mostrar el precio neto", () => {
    expect(precioNeto(3, 2)).toEqual(6);
  });
  it("deberia entergar precio neto", () => {
    expect(precioNeto(5, 2)).toEqual(10);
  });
});