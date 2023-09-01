//7. Programa que pida el ingreso del nombre y precio de un artículo y la
//cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
//en su factura.

export const calcularMontoAPagar = (nombre, precio, cantidad) => {
    const monto = parseFloat(precio) * parseInt(cantidad);
    return monto;
}

