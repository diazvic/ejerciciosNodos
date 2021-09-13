// Ejercicio 1 : Creación de nodo.
// Crear un nodo de tipo h1
// Asignarle un texto Hola DOM!
// Colocarle un color, un tamaño de texto y una familia de fuente a elección.

const divHtml = document.querySelector(".div");
const titulo = document.createElement("h1");
console.log(titulo);

//agrego hijo
divHtml.appendChild(titulo);
titulo.textContent = "Hola DOM!";
titulo.style.color = "green";
titulo.style.fontSize = "55px";
titulo.style.fontFamily = "Arial";
