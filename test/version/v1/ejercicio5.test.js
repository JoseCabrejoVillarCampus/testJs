import { restaSuma } from "../../../version/v1/ejercicio5";

describe("test del archivo ejercicio5.js", () => {
    test('La funcion restaSuma devuelve la suma y la diferencia cuando num1 > num2', () => {
        const num1 = 10;
        const num2 = 5;
        const resultado = restaSuma(num1, num2);

        expect(resultado.suma).toBe(num1 + num2);
        expect(resultado.diferencia).toBe(num1 - num2);
        expect(resultado.producto).toBeUndefined();
        expect(resultado.division).toBeUndefined();
    });

    test('La funcion restaSuma devuelve el producto y la división cuando num1 <= num2', () => {
        const num1 = 5;
        const num2 = 10;
        const resultado = restaSuma(num1, num2);

        expect(resultado.producto).toBe(num1 * num2);
        expect(resultado.division).toBe(num1 / num2);
        expect(resultado.suma).toBeUndefined();
        expect(resultado.diferencia).toBeUndefined();
    });
});





