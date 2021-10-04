
//IMPORTANTE IMPORTAR LA CLASE MADRE

const { Bebida } = require("./Bebida");

class Cerveza extends Bebida{

	constructor(cantidad,alcohol){
		super(cantidad);
		this.alcohol=alcohol;
	}
	
	getAlcohol(){
		return this.alcohol;
	}

	setAlcohol(alcohol){
		this.alcohol=alcohol;
		return;
	}

}

module.exports={Cerveza};