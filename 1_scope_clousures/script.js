// Ejemplo 1: Scope Global y Local
function mostrarScope() {
    var globalVar = "Soy global";
    let localVar = "Soy local";
    alert(globalVar + " y " + localVar);
}

// Ejemplo 2: Closure Simple
const crearContador = () => {
    let contador = 0;
    return () => {
        contador++;
        alert(`Contador: ${contador}`);
    };
};
const mostrarContador = crearContador();

// Ejemplo 3: Funciones de Orden Superior
function calcular(operacion, a, b) {
    return operacion(a, b);
}
const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
function mostrarOperaciones() {
    alert(`Suma: ${calcular(suma, 5, 3)}, Resta: ${calcular(resta, 5, 3)}`);
}