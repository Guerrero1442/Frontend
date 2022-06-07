export class Preguntamodel {
	
	constructor(subject:string,autor:string,enunciado:string,optionA:string,optionB:string,optionC:string,optionD:string,answer:string,sustentacion:string){
		this.subject=subject
		this.autor=autor
		this.statement=enunciado
		this.optionA=optionA
		this.optionB=optionB
		this.optionC=optionC
		this.optionD=optionD
		this.answer=answer
		this.sustentation=sustentacion
	}

      id: number;
	  subject:string;
	  autor: string;
	  statement:string;
	  optionA: string;
	  optionB:string;
	  optionC:string;
	  optionD:string;
	  answer:string;
	  sustentation: string;
}
