// -> Preguntar al usuario su nombre direccion y telefono
//    mostrar cada resultado en la consola
// -> Pregutar al usuario su edad cumplira este año y mostrar en la consola:
//    que año nacio


var nombre, direccion, telefono, edad, nacimiento;

nombre = prompt("Hola, dime tu nombre :)");
direccion = prompt("Ahora tu direccion:");
telefono = prompt ("Genial, ahora tu telefono");

console.log("Sus datos son:",nombre,direccion,telefono);

edad = prompt("Dime cuantos años cumpliras :)");

nacimiento = 2021 - edad;

console.log("Su edad es:", edad, ", su año de nacimiento:", nacimiento);
