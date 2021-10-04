//IMPORTANTE IMPORTAR LA CLASE MADRE

const { Bebida } = require("./Bebida");

class Refresco extends Bebida{

	constructor(cantidad,azucar){
		super(cantidad);
		this.azucar=azucar;
	}
	
	getAzucar(){
		return this.azucar;
	}

	setAzucar(azucar){
		this.azucar=azucar;
		return;
	}

}

module.exports={Refresco};