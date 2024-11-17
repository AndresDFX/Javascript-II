// Ejemplo 1: Cambiar Texto
function cambiarTexto() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Texto actualizado";
}

// Ejemplo 2: Agregar Elementos
function agregarElemento() {
    const lista = document.getElementById("lista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo Elemento";
    lista.appendChild(nuevoElemento);
}

// Ejemplo 3: Delegación de Eventos
const listaDelegacion = document.getElementById("listaDelegacion");
listaDelegacion.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        alert(`Elemento clickeado: ${event.target.textContent}`);
    }
});