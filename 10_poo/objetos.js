/* Haz una clase llamada Persona que siga las siguientes condiciones:
 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
 calcularIMC()
 esMayorDeEdad()
 El constructor pide nombre, edad,sexo,peso y altura
 Generar el RFC a partir de el nombre, edad y sexo
----------------------------------------------------------------------
​

-----------------------------------------------------------------------
12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
 -Titular y cantidad
 -ingresar(cantidad)
 -retirar(cantidad)
 Hacer las validaciones previas
 Como regla de negocio no debe de tener más de $900 y menos de $10

 */

 class Persona{

    constructor(nombre,edad,sexo,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.altura = altura;
    
    }

    calcularIMC(){

    }

    esMayorDeEdad(){
        if(this.edad>=18){
            return "Es mayor de edad";
        }else{
            return "Es menor de edad";
        }
    }

 }


 const maria = new Persona("MARIA",19,"M",1.85);
 console.log(maria);
 console.log(maria.esMayorDeEdad());



 class Cuenta{
    constructor(titular,cantidad){
        this.titular = titular;
        this.cantidad= cantidad;
    }

    ingresar(cantidad){
        if(this.cantidad<=900){
            this.cantidad= this.cantidad + cantidad;
            console.log(this.cantidad);
        }else{
            return "No cumple las condiciones";
        }
       
    }

    retirar(cantidad){
        if(this.cantidad>=10){
            this.cantidad= this.cantidad - cantidad;
            console.log(this.cantidad);
        }else{
            return "No cumple las condiciones";
        }
    }

 }

 const cel = new Cuenta ("MARIA cel",19);
 console.log(cel);
 console.log(cel.cantidad);
 console.log(cel.ingresar(100));
 console.log(cel.retirar(90));
 console.log(cel.retirar(20));
 console.log(cel.retirar(20));