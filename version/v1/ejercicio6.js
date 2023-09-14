    // 6. Construir el algoritmo en Javascript para un programa
    // para cualquier cantidad de estudiantes que lea el nombre,
    // el sexo y la nota definitiva y halle al estudiante con la mayor
    // nota y al estudiante con la menor nota y cuantos eran
    // hombres y cuantos mujeres.

    export const analizarNotas=(estudiantes)=> {
        let nombres = [];
        let definitivas = [];
        let hombres = 0;
        let mujeres = 0;
    
        for (const estudiante of estudiantes) {
        nombres.push(estudiante.nombre);
        definitivas.push(estudiante.promedio);
    
        if (estudiante.sexo.toLowerCase() === 'm') {
            hombres++;
        } else if (estudiante.sexo.toLowerCase() === 'f') {
            mujeres++;
        }
        }
    
        let posicionMax = definitivas.indexOf(Math.max(...definitivas));
        let estudianteMax = nombres[posicionMax];
        let puntajeMax = definitivas[posicionMax];
    
        let posicionMin = definitivas.indexOf(Math.min(...definitivas));
        let estudianteMin = nombres[posicionMin];
        let puntajeMin = definitivas[posicionMin];
    
        return {
        estudianteMax,
        puntajeMax,
        estudianteMin,
        puntajeMin,
        hombres,
        mujeres,
        };
    }
    
