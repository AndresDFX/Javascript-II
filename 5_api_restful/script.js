// Ejemplo 1: Fetch GET
function ejemploFetchGET() {
    fetch("https://rickandmortyapi.com/api/character")
        .then((respuesta) => respuesta.json())
        .then((datos) => alert(JSON.stringify(datos.results.slice(0, 3))));
}

// Ejemplo 2: Fetch POST
function ejemploFetchPOST() {
    fetch("https://jsonplaceholder.typicode.com/posts", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo: "foo", cuerpo: "bar", usuarioId: 1 }),
    })
        .then((respuesta) => respuesta.json())
        .then((datos) => alert(JSON.stringify(datos)));
}