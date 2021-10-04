// Crear un array vacío, luego generar 10 números al azar y guardarlos en un array.
// Mostrar en consola el resultado del array.

// El usuario deberá ingresar un string con varias palabras separadas por coma
// en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

// De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor,
// muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

//Ejercicio 1
var arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
console.log( "Array numeros: ", arrayNumeros);


//Ejercicio 2
var numerosUsuario = prompt("Ingresa numeros separados por comas");
console.log("El array generado es:", numerosUsuario.split(','));

//Ejercicio 3

var numeros = new Array(10,40,30,20,15,5);
console.log("Array original: ", numeros);
console.log("Array ordenado: ", console.log(numeros.sort()));
console.log("Num mayor: ", Math.max.apply(null,numeros));
console.log("Num menor: ", Math.min.apply(null,numeros));
