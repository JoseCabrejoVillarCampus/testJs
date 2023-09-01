import { promedio} from "../../../version/v1/ejercicio1"

describe("test del archivo ejercicio1.js", () => {
    test('La funcion ejercicio1 devuelve Resultado', () => {

        const count = 3;
        const notas = [1, 2 ,3];

        const resultado = promedio(notas,count) ;
        expect(resultado).toBe(2);
    })
});