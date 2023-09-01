// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.


export const restaSuma = (num1, num2) => {
    if (num1 > num2) {
        return {
            suma: num1 + num2,
            diferencia: num1 - num2
        };
    } else {
        return {
            producto: num1 * num2,
            division: num1 / num2
        };
    }
}