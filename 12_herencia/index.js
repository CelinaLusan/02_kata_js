
//IMPORTANTE IMPORTAR LAS CLASES A USAR

const { MaestroFisica } = require("./MaestroFisica.js");
const { MaestroMusica } = require("./MaestroMusica.js");
const { Electrodomestico } = require("./Electrodomestico.js");
const { Lavadora } = require("./Lavadora");
const { Casa } = require("./Casa");
const { Edificio } = require("./Edificio");

const { Refresco } = require("./Refresco");
const { Cerveza } = require("./Cerveza");
/*
------------------------------------------------------------

1. Hacer superclase Maestro y subclases Maestro de Física y 

   Maestro de Música y a cada uno asignarle su materia y 

   calcular su promedio de grupo a partir de calificaciones 

   (puedes usar arreglos). El maestro de física tiene un 

   atributo "antiguedad" que guarda un valor numerico, 

   mientras que el maestro de música tiene un atributo "edad"

   también guardando un valor numérico.

------------------------------------------------------------

*/

//var maestro = new Maestro("Programacion",[8,9,7]);
var maestroF = new MaestroFisica("Fisica",[7,7,8],6);
console.log(maestroF);
console.log(maestroF.getAntiguedad());
console.log(maestroF.promedio());

var maestroM = new MaestroMusica("Música",[6,9,8],30);
console.log(maestroM);
console.log(maestroM.getEdad());
console.log(maestroM.promedio());

/*

------------------------------------------------------------

2.- Crea una superclase llamada Electrodoméstico con las 

    siguientes características:

    a. Sus atributos son precio, color, consumoEnergetico

       y capacidad (peso máximo)

    b. El constructor solo debe pedir precio, color 

       y capacidad. 

    c. consumoEnergetico debe iniciar con valor de 100

------------------------------------------------------------

*/

var electro = new Electrodomestico(1000,"negro",22);

console.log(electro);

/*

------------------------------------------------------------

3.- Crea una subclase de Electrodomestico llamada Lavadora 

    con las siguientes características:

    a. Su atributo es carga(kg de ropa), además de los 

       atributos heredados.

    b. Crea el método precioFinal(). Este se calcula

       multiplicando el consumoEnergetico por la carga.

------------------------------------------------------------

*/

var lavadora=new Lavadora(2000,"gris",15,12);

console.log(lavadora.precioFinal());

/*

------------------------------------------------------------

4.- Crear la clase construcción que hereda a otras dos 

    clases "casa" y "edificio". 

    a. Sus atributos son: numPuertas, numVentanas, numPisos,

       direccion, altura, largo y ancho del terreno.

    b. Cada uno tiene un metodo que regresa los metros 

       cuadrados

    c. Un metodo debe regresar la direccion

    d. Un metodo debe permitir modificar la direccion

    e. Buscar la mejor manera de aprovechar la herencia

------------------------------------------------------------

*/

var edificio = new Edificio(4,8,2,"direccion 1",8,4,4);
var casa = new Casa(2,4,1,"direccion 2",4,4,4);

console.log(edificio);
console.log(casa);

console.log(casa.getDireccion());
casa.setDireccion("direccion modificada");
console.log(casa.getDireccion());
console.log(casa);

/*

------------------------------------------------------------

5.- Crear una clase Bebida que herede a dos clases Cerveza 

    y Refresco. Ambas clases deben tener la propiedad 

    cantidad (ml). La clase Refresco debe tener el atributo

    azucar(g) y la clase Cerveza debe el atributo 

    porcentajeAlcohol. Crear los getters y setters

    correspondientes.

------------------------------------------------------------

*/


var coca=new Refresco(500,500);
var vicky=new Cerveza(500,4);

console.log(coca);
console.log(vicky);
vicky.setAlcohol(5);
console.log(vicky.getAlcohol());


