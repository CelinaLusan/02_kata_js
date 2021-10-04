//IMPORTANTE IMPORTAR LA CLASE MADRE

const { Electrodomestico } = require("./Electrodomestico");

class Lavadora extends Electrodomestico{

	constructor(precio,color,capacidad,carga){
		super(precio,color,capacidad);
		this.carga=carga;
	}

	precioFinal(){
		var consumo = this.getConsumoEnergetico();
		return consumo*this.carga;
	}
	
}

module.exports={Lavadora};
