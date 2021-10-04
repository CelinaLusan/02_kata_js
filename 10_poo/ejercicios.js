class myPenguin {

    constructor(character,origin,author,notes){
        this.character = character;
        this.origin = origin;
        this.author = author;
        this.notes = notes;
    }

    //definiendo metodos

    characterName(){
        return `Hola, soy un pingüino y mi nombre es ${this.character}`;
    }
    
}

var whiteblack = new myPenguin("Whiteblack", "Whiteblack the Penguin Sees the World","H. A. Rey and Margret Rey","Childrens book about a travelling penguin");
console.log(whiteblack.characterName());

whiteblack.puedeVolar=false;
whiteblack.graznar = () => 'kaww kaww!!';
whiteblack.saludar = () => 'Hola, soy un pingüino y mi nombre es whiteblack';
whiteblack = new myPenguin("Señor Pingu", "Whiteblack the Penguin Sees the World","H. A. Rey and Margret Rey","Childrens book about a travelling penguin");
console.log(whiteblack.characterName());
console.log(whiteblack.graznar);
console.log(whiteblack);
