import { calcularMontoAPagar } from "../../../version/v1/ejercicio7";

describe("Prueba de la función calcularMontoAPagar", () => {
    test('Calcula el monto correctamente', () => {
        const monto = calcularMontoAPagar("Articulo1", "10.5", "3");
        expect(monto).toBe(31.5);
    });
});