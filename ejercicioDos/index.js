// Ejercicio 2: Creación de listas
// Crear un elemento desde el DOM de tipo ol

// Asignarle 3 elementos de tipo li, con lo siguientes textos:

// Home
// Nosotros
// Contacto

let contenido = ["Home", "Nosotros", "Contacto"];

const divHtml = document.querySelector(".div");

const lista = document.createElement("ol");
divHtml.appendChild(lista);

for (let i = 0; i < 3; i++) {
	const listaLi = document.createElement("li");
	listaLi.textContent = contenido[i];
	lista.appendChild(listaLi);
}

// listaLi.textContent = "Home";
// listaLi.textContent = "Nosotros";
// listaLi.textContent = "Contacto";
