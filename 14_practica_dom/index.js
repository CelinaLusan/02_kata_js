//Challenge 3
/*
Construir un script que almacene un listado de ingredientes(5 Ingredientes) para cocinar una pizza y crear una lista de pasos a seguir para cocinar ese platillo

y ademas crear un boton que cree los pasos a seguir(5 Pasos)

[tomate,queso,harina,peperoni,pimienta]

PASO 1 -> cortar los tomates

PASO 2 -> rebanar el queso
*/ 


function generarPasos(){

	let items = document.getElementsByTagName("li");
	let plantilla="";
	let content=document.getElementById("pasos");
	let paso=["Para ello, lo primero que vamos a hacer es mezclar en un recipiente",
	"Cuando hayas mezclado la levadura con el agua, agrega",
	"Antes de que la preparación se enfríe, echa en un bol amplio la harina de fuerza y",
	"Ahora es cuando tienes que comenzar a amasar bien hasta que notes que la masa de pizza casera, agrega",
	"Pasado el tiempo correspondiente, espolvorea"
	]
	
	var contador=0;
	
	//console.log(items);
	for (let index of items) {

		plantilla = plantilla + `<li> ${paso[contador]} ${index.textContent} </li>`;
		
		contador++;
	}

	content.innerHTML = plantilla;

	

}