// Construir el algoritmo que solicite el nombre y edad de 3
// personas y determine el nombre de la persona con mayor edad.

export const personaMayor = (personas) => {
    let mayorEdad = -1; 
    let nombreMayorEdad = '';

    for (const persona of personas) {
        if (persona.edad > mayorEdad) {
            mayorEdad = persona.edad;
            nombreMayorEdad = persona.nombre;
        }
    }

    return nombreMayorEdad;
}


