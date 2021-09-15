// Ejercicio 4: Lista de tareas
// Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem y un botón que diga Eliminar. Al clickear el botón, se debe eliminar de la lista el nodo correspondiente.

const tareas = [
	"Comprar comida ",
	"Estudiar para examen ",
	"Pagar impuestos ",
	"Pasear a perro ",
	"Comprar entradas para el cine ",
];

const divHtml = document.querySelector(".divHtml");
console.log(divHtml);
const listaDesordenada = document.createElement("ul");

for (let i = 0; i < tareas.length; i++) {
	const lista = document.createElement("li");
	const boton = document.createElement("button");
	lista.textContent = tareas[i];
	boton.textContent = "Eliminar";

	lista.appendChild(boton);
	listaDesordenada.appendChild(lista);

	boton.onclick = () => {
		lista.remove();
	};
}
divHtml.appendChild(listaDesordenada);
