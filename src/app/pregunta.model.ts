export class Pregunta {
	constructor(creador:string,materia:string,enunciado:string,respuesta:string,opciones:object){
		this.creador=creador
		this.materia=materia
		this.respuesta=respuesta
		this.opciones=opciones
		this.enunciado=enunciado
	}
	creador:string=""
	materia:string=""
	respuesta:string=""
	opciones:object={}
	enunciado:string=""
}