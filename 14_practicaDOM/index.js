//-------------------> Challenge <------------------
// * Usar Bootstrap *
// Preguntar Nombre
// Preguntar Direccion
// Preguntar Telefono
// Preguntar si quiren pizza con piña o  sin
// respuestas : si -> :( esta bien || no -> Excelente :)  -> caso de error
// -> mostrar las respuestas en una card


var nombre=prompt("por favor ingresa tu nombre: ");
var direccion=prompt("por favor ingresa tu dirección: ");
var telefono=prompt("por favor ingresa tu teléfono: ");
var piña=prompt("cómo prefieres tu pizza  1. Con piña o 2. Sin piña ");

console.log(nombre,direccion,telefono,piña);



document.getElementById("titulo").innerHTML =  `Hola ${nombre}`;
//document.getElementById("titulo").innerHTML = "New text!";
console.log(document.getElementById("titulo"));

if(piña == 1){
    document.getElementById("contenido").innerHTML=`🤢 esta bien`;
}else if(piña == 2){
    document.getElementById("contenido").innerHTML=`😊 excelente`;
}else{
    document.getElementById("contenido").innerHTML=`⁉ no hay coincidencias con tu elección`;
}
