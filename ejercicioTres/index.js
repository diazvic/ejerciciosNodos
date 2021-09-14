// Ejercicio 3: Botones
// Por cada ítem de la siguiente lista, crear un botón con el texto de dicho ítem. Al clickear un botón, debe aparecer un alert que diga Has clickeado el mes X, dependiendo del mes clickeado (por ejemplo, Has clickeado el mes: Mayo)

const meses = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
];

const lista = document.querySelector(".div");
console.log(lista);

for (let i = 0; i < meses.length; i++) {
	const boton = document.createElement("button");
	boton.textContent = meses[i];
	boton.onclick = () => {
		alert(`Hiciste click en el mes: ${meses[i]}`);
	};
	lista.appendChild(boton);
}
