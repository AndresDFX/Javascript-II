// Ejemplo 1: Uso de setTimeout
function ejemploTimeout() {
    console.log("Inicio");
    setTimeout(() => {
        console.log("Tarea asíncrona completada");
    }, 2000);
    console.log("Fin");
}

// Ejemplo 2: Promesa Simple
function ejemploPromesa() {
    const promesa = new Promise((resolve, reject) => {
        const exito = true;
        if (exito) {
            resolve("Operación exitosa");
        } else {
            reject("Error en la operación");
        }
    });

    promesa
        .then((mensaje) => alert(mensaje))
        .catch((error) => alert(error));
}

// Ejemplo 3: Simulación de API
function ejemploSimulacionAPI() {
    function obtenerDatos() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id: 1, nombre: "Producto A" });
            }, 1500);
        });
    }

    obtenerDatos().then((datos) => alert(JSON.stringify(datos)));
}