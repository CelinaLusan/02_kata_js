
//1.
// Crea una función llamada palindrome() que 
// reciba como parámetro una palabra, si la oración 
// es un palíndromo la función deberá devolver 
// true en otro caso, devolver false
// Extra: con oraciones


var palindrome = function (palabra){

var fraseDos="";

	palabra = palabra.replace(/ /g, "");


	for(var x=0;x<palabra.length;x++){
		fraseDos = palabra.charAt(x) + fraseDos;
	}

	fraseDos=  fraseDos.replace(/ /g, "");
	console.log(palabra, ": ", fraseDos);
	

	if(palabra.trim() == fraseDos.trim()){
		return true;
	}else{
		return false;
	}

}

var frase = prompt("Ingresa una palabra");

if(palindrome(frase)){
	console.log("Es palindromo");
}else{
	console.log("No es palindromo");
}


//2.
// Crea una función llamada longestCountry(), 
// esta función recibirá de parámetro un arreglo con 
// nombres de distintos países, la función deberá 
// retornar el país con mayor número de letras. 
// Toma como ejemplo, del siguiente arreglo de países:
// const paises = ["México", "Panamá", 
// "Guatemala", "El Salvador"]

const paises = ["México", "Panamá","Guatemala", "El Salvador"];

var longestCountry = function(paises){

var mayor=0;
var posicion=0;

	console.log(paises.length);

	for(let x=0;x<paises.length;x++){
		if(paises[x].length>mayor){
			mayor=paises[x].length;
			posicion=x;
		}
	}
return paises[posicion];

}


console.log("El país con mayor número de letras: ",longestCountry(paises));


//3.
// Crea una función llamada 
// farenheitToCelsius() que reciba como 
// parámetro los grados farenheit y los convierta a 
// grados centígrados.

var farenheitToCelsius = function(farenheit){

	var celsius=((farenheit-32)*5)/9; 

	return celsius;

}

var farenheit = prompt("Grados farenheit");

console.log(`${farenheit} grados F a C = `,farenheitToCelsius(farenheit));

//4.
// Crea una función que imprima el número de 
// parámetros enviados. 


var parametros = function(unos,dos){

	return arguments.length;

}

console.log("Número de argumentos recibidos: ", parametros("hola",3));
