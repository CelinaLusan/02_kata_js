//IMPORTANTE IMPORTAR LA CLASE MADRE

const { Maestro } = require("./Maestro");

class MaestroMusica extends Maestro{

	constructor(materia,calificaciones,edad){
		super(materia,calificaciones);
		this.edad=edad;
	}

	getEdad(){
		return this.edad;
	}

}

module.exports = {MaestroMusica};