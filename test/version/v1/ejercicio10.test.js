import { analizarNumeros } from '../../../version/v1/ejercicio10.js';

describe('analizarNumeros', () => {
  it('debe analizar los números correctamente', () => {
    const numeros = [10, 5, 8, 2, 0, 12, 4];

    const resultado = analizarNumeros(numeros);

    // Verifica que los números sean iguales sin importar el orden
    expect(resultado.numeros).toContain(0);
    expect(resultado.numeros).toContain(2);
    expect(resultado.numeros).toContain(4);
    expect(resultado.numeros).toContain(5);
    expect(resultado.numeros).toContain(8);
    expect(resultado.numeros).toContain(10);
    expect(resultado.numeros).toContain(12);

    // Verifica los otros resultados
    expect(resultado.suma).toBe(41);
    expect(resultado.maximo).toBe(12);
    expect(resultado.minimo).toBe(0);
    expect(resultado.total).toBe(7);
    expect(resultado.promedio).toBeCloseTo(5.857, 3);
  });
});
