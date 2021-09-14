// Replica la siguiente estructura HTML creando nodos mediante javascript

// <ul>
// 	<li>Verduras</li>
// 	<li>Garbanzos</li>
// 	<li>
// 		Frutas
// 		<ul>
// 			<li>Manzanas</li>
// 			<li>Naranjas</li>
// 			<li>Bananas</li>
// 			<li>Frutillas</li>
// 		</ul>
// 	</li>
// </ul>;

let contenido = ["verduras", "garbanzos", "palta"];
let contenidoDos = ["Manzanas", "Naranjas", "Bananas", "Frutillas"];
const divHtml = document.getElementById("div");

const lista = document.createElement("ul");
divHtml.appendChild(lista);
console.log(lista);

const listaDos = document.createElement("ul");
lista.appendChild(listaDos);

for (let i = 0; i < contenido.length; i++) {
	const listaLi = document.createElement("li");
	listaLi.textContent = contenido[i];
	lista.appendChild(listaLi);
}
for (let j = 0; j < 4; j++) {
	const listaLiDos = document.createElement("li");
	listaLiDos.textContent = contenidoDos[j];
	listaDos.appendChild(listaLiDos);
}
