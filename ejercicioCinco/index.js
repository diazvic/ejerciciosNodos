// Ejercicio 5: Prioridades
// Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem. Cada vez que se clickea el ítem, debe ir cambiando de color, siguiendo este orden: gris -> celeste -> amarillo -> rojo. Cuando llega al último color y se lo vuelve a clickear, debe volver al primer color.

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
	listaDesordenada.appendChild(lista);

	lista.onclick = () => {
		switch (lista.style.color) {
			case "":
				lista.style.color = "grey";
				break;
			case "grey":
				lista.style.color = "lightblue";
				break;
			case "lightblue":
				lista.style.color = "yellow";
				break;
			case "yellow":
				lista.style.color = "red";
				break;
			case "red":
				lista.style.color = "grey";
				break;
		}
	};
}
