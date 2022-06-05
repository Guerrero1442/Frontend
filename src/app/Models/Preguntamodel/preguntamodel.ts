export class Preguntamodel {
	constructor(subject:string,autor:string,optionA:string,optionB:string,optionC:string,optionD:string,answer:string,sustentacion:string){
        this.Subject=subject
        this.Autor=autor
        this.OptionA=optionA
        this.OptionB=optionB
        this.OptionC=optionC
        this.OptionD=optionD
        this.Answer=answer
        this.Sustentation=sustentacion
    }

      id: number;
      Subject:string;
      Autor: string;
      OptionA: string;
      OptionB:string;
      OptionC:string;
      OptionD:string;
      Answer:string;
      Sustentation: string;
}
