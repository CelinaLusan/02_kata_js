const { Construccion }= require("./Construccion");

class Casa extends Construccion{
	constructor(numPuertas,numVentanas,numPisos,direccion,altura,largo,ancho){
		super(numPuertas,numVentanas,numPisos,direccion,altura,largo,ancho);
	}
	
	
}

module.exports={Casa};