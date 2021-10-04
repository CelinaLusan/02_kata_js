class Perro{
    constructor(nombre,raza,color){
        this.nombre = nombre;
        this.color = color;
        this.raza=raza;
    }

    //definiendo metodos
    ladrar(){
        return 'guau';
    }
    comer(comida="croqueas"){
        return `${this.nombre} esta comiendo ${comida}`;
    }
}

const ayudanteDeSanta = new Perro("ayudante de santa","galgo","cafe");
const scooby = new Perro("scooy doo","gran danes","cafe");


console.log(ayudanteDeSanta);
console.log(ayudanteDeSanta.nombre);
console.log(ayudanteDeSanta.color);
console.log(ayudanteDeSanta.raza);
console.log(ayudanteDeSanta.ladrar());
console.log(ayudanteDeSanta.comer("carne"));

console.log(scooby);
console.log(scooby.nombre);
console.log(scooby.color);
console.log(scooby.raza);
console.log(scooby.ladrar());
console.log(scooby.comer("galletas"));