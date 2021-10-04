//IMPORTANTE IMPORTAR LA CLASE MADRE

const { Maestro } = require("./Maestro");

class MaestroFisica extends Maestro{

	constructor(materia,calificaciones,antiguedad){
		super(materia,calificaciones);
		this.antiguedad=antiguedad;
	}

	getAntiguedad(){
		return this.antiguedad;
	}

}

module.exports = {MaestroFisica};