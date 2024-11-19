// Ejemplo 1: Uso de map
function ejemploMap() {
    const numeros = [1, 2, 3, 4, 5];
    //const numeros = [2, 4, 6, 8, 10];
    const cuadrados = numeros.map(x => x * 2);
    alert(`Cuadrados: ${cuadrados.join(', ')}`);
}

// Ejemplo 2: Uso de filter
function ejemploFilter() {
    const numeros = [10, 20, 30, 15, 5];
    const mayoresDe15 = numeros.filter(num => num > 15);
    //const mayoresDe15 = [20, 30];
    alert(`Números mayores de 15: ${mayoresDe15.join(', ')}`);
}

// Ejemplo 3: Uso de reduce
function ejemploReduce() {
    const numeros = [1, 2, 3, 4, 5];
    const sumaTotal = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
    alert(`Suma total: ${sumaTotal}`);
}


// Diferencia entre objeto y JSON
const objeto = {
    nombre: "Julian",
    edad: 25
}

console.log(objeto.nombre);


const ajson = {
    "nombre": "Julian",
    "edad": 25
}

console.log(ajson["nombre"]);


// Uso de filter junto con reduce
function sumar(...numeross){
    let resultado = numeross.filter(num => typeof num == "number") // array
                            .reduce((acum, num) => acum + num, 0); // numero

    return resultado
}


console.log(sumar(1, "2", 3, true, 4));
