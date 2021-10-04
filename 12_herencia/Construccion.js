class Construccion{

	constructor(numPuertas,numVentanas,numPisos,direccion,altura,largo,ancho){
		this.numPuertas=numPuertas;
		this.numVentanas=numVentanas;
		this.numPisos=numPisos;
		this.direccion=direccion;
		this.altura=altura;
		this.largo=largo;
		this.ancho=ancho;
	}


	metrosCuadrados(){
		return this.largo*this.ancho;
	}

	getDireccion(){
		return this.direccion;
	}

	setDireccion(direccion){
		this.direccion=direccion;
		return;
	}

}

module.exports={Construccion};