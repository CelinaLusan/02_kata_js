// Funciones 
// es un conjuto de instrucciones para realizar una tarea

// nombre de mi funcion
// () es si necesita parametros -> ingredientes
// {} Dentro de los corchetes van los pasos a seguir


/*
console.log('hoisting', saludar());

function holaAtodos() {
  return 'Hola a todos';
};

console.log(holaAtodos());

*/

// function suma(n1, n2) {
//   console.log('primer paramatro:', n1);
//   console.log('segundo paramatro:', n2);
//   var total = n1 + n2;
//   console.log('total', total);
// };

// suma( 1, 2 );


/*
function suma(n1, n2) {
  console.log('primer paramatro:', n1);
  console.log('segundo paramatro:', n2);
  var total = n1 + n2;
  return total;
};

var resultadoUno = suma(1, 2);
var resultadoDos = suma(1, 6);
var resultadoTres = suma(6, 1);

console.log(resultadoUno + resultadoDos + resultadoTres);

// Anidando Funciones
function obtenerMarcador() {
  var partido1 = 3;
  var partido2 = 2;
  console.log(partido1);
  var totalDeGoles = partido1 + partido2

  function agregar() {
    var nombre = 'Pedrito';
    return nombre + ' anoto: ' + (totalDeGoles) + ' goles';
  };

  return agregar();
}

var pedro = obtenerMarcador();

// Funcion Impura

function sumaRandom(n1) {
  return n1 + (Math.random() * 10)
}

var resultadoImpuroUno = sumaRandom(2);
var resultadoImpuroDos = sumaRandom(2);
var resultadoImpuroTres = sumaRandom(2);

console.log(resultadoImpuroUno + resultadoImpuroDos + resultadoImpuroTres )


// Scope 
// Alcance de funciones/variables

var partido1 = 3
var partido2 = 2
console.log('goles en partido 2, declarado', partido2);

function scopeGlobal(n1, n2) {
  var partido1 = 3;
  partido2 = 5;
  console.log('goles en partido 2, deentro de la funcion', partido2);
  var totalDeGoles = partido1 + partido2

  function scopeLocal() {
    var nombre = 'Pedrito';
    return nombre + ' anoto: ' + (totalDeGoles) + ' goles';
  };

  return scopeLocal();
}
console.log('goles en partido 2, previo a funcion', partido2);


// console.log(scopeGlobal());

console.log('goles en partido 2, post funcion', partido2);

// Como declaramos funciones 

// Funcion por delcaracion 
// function nombre(p1, p2...) { }

function saludar() {
  return "Hola";
}

console.log(saludar());

console.log(typeof saludar);

// Funciones como expresion 
// var nombre = function(p1, p2...) { }

var saludo = function () {
  return "Hola";
};

console.log('funcion como expresion',saludo);
console.log('funcion como expresion',saludo());

// Funciones como objeto
// new Function(p1, p2..., code);

var hello = new Function("return 'hello';")

console.log('funcion como objeto',hello);
console.log('funcion como objeto',hello());

*/


/*

Realizar las siguientes funciones
suma de dos numeros
resta de dos numers
muliplicacion de dos numero
division de dos numeros
Saber si soy mayor de edad o meor
Evaluar si un numero es positivo o negativo
Saber si es consonante o vocal
En un array colocar los numeros pares entre el 0 y 100
Cambiar el juego de piedra, papel y tijeras por funciones

*/


function suma (a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

var mayorDeEdad = function (edad){
    if (edad >= 18){
        return "Mayor de edad";
    }else{
        return "Menor de edad";
    }
};


function evaluarNumero (numero){
    if(numero===0){
        return "Cero";
    }else if (numero > 0){
          return "Positivo";
    }else{
          return "Negativo";
    }
}


function vocal(letra){
    if(letra == "a" || letra =="e" ||  letra == "i" || letra =="o" || letra =="u"){
        return "Vocal";
    }else{
        return "Consonante"
    }
}

function pares (){
    var pares = [];
    for (var index = 0; index <=100; index++) {
        if(index % 2 ==0){
            pares.push(index);
        }
    }
    return pares;
}


function juego(jugador1,jugador2){
    if(jugador1 === jugador2){
        return "Empate";
    }else{
        if(jugador1=="Piedra" && jugador2=="Tijeras" || jugador1=="Tijeras" && jugador2=="Papel" || jugador1=="Papel" && jugador2=="Piedra"  ){
            return "Gana el jugador 1";
        }else{
            if(jugador2=="Piedra" && jugador1=="Tijeras" || jugador2=="Tijeras" && jugador1=="Papel" || jugador2=="Papel" && jugador1=="Piedra" ){
                return "Gana el jugador 2";
            }
        }
    }
}


console.log("Funcion suma: ",suma(5,6));
console.log("Funcion resta: ",resta(5,6));
console.log("Funcion multiplicar: ",multiplicar(5,6));
console.log("Funcion dividir: ",division(5,6));
console.log("Funcion edad: ",mayorDeEdad(15));
console.log("Funcion evalua numeros: ",evaluarNumero(-5));
console.log("Funcion vocal o consonante: ",vocal("r"));
console.log("Funcion pares: ",pares());
console.log("Funcion juego: ",juego("Piedra","Papel"));