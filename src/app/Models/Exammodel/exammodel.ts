import { Preguntamodel } from "../Preguntamodel/preguntamodel"

export class Exammodel {
	constructor(subject:string,autor:string,pregunta1:Preguntamodel,pregunta2:Preguntamodel,pregunta3:Preguntamodel,pregunta4:Preguntamodel,pregunta5:Preguntamodel){
		this.Subject=subject
		this.Autor=autor
		this.Pregunta1=pregunta1
		this.Pregunta2=pregunta2
		this.Pregunta3=pregunta3
		this.Pregunta4=pregunta4
		this.Pregunta5=pregunta5
	}

      id: number;
	  Subject: string;
	  Autor: string;
	  Pregunta1:Preguntamodel;
	  Pregunta2:Preguntamodel;
	  Pregunta3:Preguntamodel;
	  Pregunta4:Preguntamodel;
	  Pregunta5:Preguntamodel;
}
