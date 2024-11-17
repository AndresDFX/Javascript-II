// Ejemplo 1: Uso de Async/Await
async function ejemploAsyncAwait() {
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resultado Async");
        }, 2000);
    });
    alert(resultado);
}

// Ejemplo 2: Simulación de API con Async/Await
async function ejemploSimulacionAsync() {
    async function obtenerDatos() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id: 2, nombre: "Producto B" });
            }, 2000);
        });
    }

    const datos = await obtenerDatos();
    alert(JSON.stringify(datos));
}