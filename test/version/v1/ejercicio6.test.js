import { analizarNotas } from '../../../version/v1/ejercicio6.js';

describe('analizarNotas', () => {
  it('debe analizar las notas correctamente', () => {
    // Simular las entradas del usuario
    const mockPrompt = jest.spyOn(global.console, 'log');
    mockPrompt.mockImplementation(() => {});
    const estudiantes = [
      { nombre: 'Estudiante1', promedio: 95, sexo: 'M' },
      { nombre: 'Estudiante2', promedio: 85, sexo: 'F' },
      { nombre: 'Estudiante3', promedio: 90, sexo: 'M' },
      { nombre: 'Estudiante4', promedio: 88, sexo: 'F' },
    ];

    const resultado = analizarNotas(estudiantes);

    // Restaurar la función original de console.log
    mockPrompt.mockRestore();

    // Realizar aserciones sobre el resultado
    expect(resultado.estudianteMax).toBe('Estudiante1');
    expect(resultado.puntajeMax).toBe(95);
    expect(resultado.estudianteMin).toBe('Estudiante2');
  expect(resultado.puntajeMin).toBe(85);
    expect(resultado.hombres).toBe(2);
    expect(resultado.mujeres).toBe(2);
  });
});
