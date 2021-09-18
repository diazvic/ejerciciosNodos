// Ejercicio 6: Completar tareas
// Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem y un checkbox. Si el checkbox está tildado, al texto deben agregarse los estilos text-decoration: line-through; color: gray;. Si está destildado, debe volver a la normalidad.

const tareas = [
	"Comprar comida",
	"Estudiar para examen",
	"Pagar impuestos",
	"Pasear a perro",
	"Comprar entradas para el cine",
];

const divHtml = document.querySelector(".div");
console.log(divHtml);

const listaDesordenada = document.createElement("ul");
divHtml.appendChild(listaDesordenada);

for (let i = 0; i < tareas.length; i++) {
	const lista = document.createElement("li");
	lista.textContent = tareas[i];
	const boton = document.createElement("INPUT");
	boton.setAttribute("type", "checkbox");
	boton.value = "";
	lista.appendChild(boton);
	listaDesordenada.appendChild(lista);

	boton.onclick = () => {
		lista.style.textDecoration = "line-through";
		lista.style.color = "grey";
	};
}
