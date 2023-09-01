import { area } from "../../../version/v1/ejercicio8";

describe("Prueba de la función calcularMontoAPagar", () => {
    test('Calcula el monto correctamente', () => {
        const opcion=1
        const a= 2
        const b=4

        const resultado = area(opcion,a,b);
        expect(resultado).toBe(8);
    });
});