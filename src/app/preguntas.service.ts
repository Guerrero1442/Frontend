import { Injectable } from '@angular/core';
import { Pregunta } from './pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor() { }

  preguntas:Pregunta[]=[
    new Pregunta("caariasg2","calculo","Cuanto es 1+1",'2',{"opcion1":3,"opcion2":4,"opcion3":5,"opcion4":2}),
    new Pregunta("mirevalo","calculo","Cuanto es 1+1",'2',{"opcion1":3,"opcion2":4,"opcion3":5,"opcion4":2})
  ]

  agregarPregunta(pregunta:Pregunta){
    this.preguntas.push(pregunta)
  }

  encontrarPregunta(indice:number){
    let pregunta:Pregunta=this.preguntas[indice]
    return pregunta
  }

  actualizarPregunta(pregunta:Pregunta,indice:number,){ 
    let preguntaModificada=this.preguntas[indice]
    preguntaModificada.creador=pregunta.creador
    preguntaModificada.materia=pregunta.materia
    preguntaModificada.enunciado=pregunta.enunciado
    preguntaModificada.opciones=pregunta.opciones
  }
  eliminarPregunta(indice:number){
    this.preguntas.splice(indice,1)
  }
}
