import { personaMayor } from "../../../version/v1/ejercicio4";

describe("test del archivo ejercicio4.js", () => {
    test('La funcion personaMayor devuelve el nombre correcto', () => {
        const lista = [
            { nombre: "Persona1", edad: 10 },
            { nombre: "Persona2", edad: 20 },
            { nombre: "Persona3", edad: 24 }
        ];

        const resultado = personaMayor(lista);
        expect(resultado).toBe("Persona3");
    });
});