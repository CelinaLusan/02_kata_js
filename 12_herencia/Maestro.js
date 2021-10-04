class Maestro{
	
	constructor(materia,calificaciones){
		this.materia=materia;
		this.calificaciones=calificaciones;
	}

	promedio(){

		let promedio=0;

		
		for(let x=0;x<this.calificaciones.length;x++){
			promedio=promedio+this.calificaciones[x];
		}
		  
		  return promedio/this.calificaciones.length;
		
	}

}

module.exports = { Maestro };