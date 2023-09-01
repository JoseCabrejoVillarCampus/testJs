/* let nota=0; 
let count= Number(prompt("Cuantos datos desea ingresar: ")); */

export const promedio = (notas, count) => {
    return notas.reduce((sum, nota)=> sum + nota,0)/count;
}
