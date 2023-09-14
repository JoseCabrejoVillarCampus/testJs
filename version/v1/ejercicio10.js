export const analizarNumeros = (numeros) => {
    
    let list = [];
    for (let i = 0; i < numeros.length; i++) {
        let opc = numeros[i];
        list.unshift(opc);
    }

    let sum = list.reduce((accumulator, a) => accumulator + a, 0);

    let maximo = Math.max(...list);
    let minimo = Math.min(...list);
    let totalNumeros = list.length;
    let promedio = sum / totalNumeros;

    return {
        numeros: list,
        suma: sum,
        maximo: maximo,
        minimo: minimo,
        total: totalNumeros,
        promedio: promedio,
    };
};
