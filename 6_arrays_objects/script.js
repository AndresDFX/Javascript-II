// Ejemplo 1: Uso de map
function ejemploMap() {
    const numeros = [1, 2, 3, 4, 5];
    const cuadrados = numeros.map(num => num * num);
    alert(`Cuadrados: ${cuadrados.join(', ')}`);
}

// Ejemplo 2: Uso de filter
function ejemploFilter() {
    const numeros = [10, 20, 30, 15, 5];
    const mayoresDe15 = numeros.filter(num => num > 15);
    alert(`Números mayores de 15: ${mayoresDe15.join(', ')}`);
}

// Ejemplo 3: Uso de reduce
function ejemploReduce() {
    const numeros = [1, 2, 3, 4, 5];
    const sumaTotal = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
    alert(`Suma total: ${sumaTotal}`);
}