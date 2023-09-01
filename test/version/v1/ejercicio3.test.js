import { voltaje } from "../../../version/v1/ejercicio3";

describe("test del archivo ejercicio3.js", () => {
    test('La funcion voltaje devuelve Resultado', () => {
        const corriente=10;
        const resistencia=5;
        const resultado = voltaje(corriente,resistencia);
        expect(resultado).toBe(50);
    });
});