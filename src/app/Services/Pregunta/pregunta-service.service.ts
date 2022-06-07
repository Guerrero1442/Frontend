import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preguntamodel } from 'src/app/Models/Preguntamodel/preguntamodel';

 const baseUrl = 'http://localhost:8080/api/v1/Questions';
 const baseUrl2 = 'http://localhost:8080/api/v1/Question';

@Injectable({
  providedIn: 'root'
})
export class PreguntaServiceService {

  constructor(private http: HttpClient) { }


  // preguntas:Preguntamodel[]=[
  //   new Preguntamodel("calculo","caariasg2","Cuanto es 1+1","2","5","6","1","2",""),
  //   new Preguntamodel("calculo","mirevalo","Cuanto es 99+1","24","86","nose","100","100",""),
  //   new Preguntamodel("programacion","lhuer2","Que hace el metodo filter()","crea un nuevo arreglo con los elementos requeridos","devuelve la ubicacion del elemento requerido","devuelve el valor del elemento requerido","devuelve un True o False","crea un nuevo arreglo con los elementos requeridos",""),
  //   new Preguntamodel("programacion","lhuer2","Que hace el metodo filter()","crea un nuevo arreglo con los elementos requeridos","devuelve la ubicacion del elemento requerido","devuelve el valor del elemento requerido","devuelve un True o False","crea un nuevo arreglo con los elementos requeridos",""),
  //   new Preguntamodel("programacion","lhuer2","Que hace el metodo filter()","crea un nuevo arreglo con los elementos requeridos","devuelve la ubicacion del elemento requerido","devuelve el valor del elemento requerido","devuelve un True o False","crea un nuevo arreglo con los elementos requeridos",""),
  //   new Preguntamodel("programacion","lhuer2","Que hace el metodo filter()","crea un nuevo arreglo con los elementos requeridos","devuelve la ubicacion del elemento requerido","devuelve el valor del elemento requerido","devuelve un True o False","crea un nuevo arreglo con los elementos requeridos",""),
  //   new Preguntamodel("programacion","lhuer2","Que hace el metodo filter()","crea un nuevo arreglo con los elementos requeridos","devuelve la ubicacion del elemento requerido","devuelve el valor del elemento requerido","devuelve un True o False","crea un nuevo arreglo con los elementos requeridos",""),
  //   new Preguntamodel("programacion","lhuer2","Que hace el metodo filter()","crea un nuevo arreglo con los elementos requeridos","devuelve la ubicacion del elemento requerido","devuelve el valor del elemento requerido","devuelve un True o False","crea un nuevo arreglo con los elementos requeridos",""),
  //   new Preguntamodel("programacion","lhuer2","Que hace el metodo filter()","crea un nuevo arreglo con los elementos requeridos","devuelve la ubicacion del elemento requerido","devuelve el valor del elemento requerido","devuelve un True o False","crea un nuevo arreglo con los elementos requeridos",""),
  //   new Preguntamodel("programacion","lhuer2","Que hace el metodo filter()","crea un nuevo arreglo con los elementos requeridos","devuelve la ubicacion del elemento requerido","devuelve el valor del elemento requerido","devuelve un True o False","crea un nuevo arreglo con los elementos requeridos",""),
  // ]

  agregarPregunta(pregunta:Preguntamodel){
    //this.preguntas.push(pregunta)
  }
  userPreguntas(username:string){
    //return this.preguntas.filter((pregunta)=> pregunta.Autor === username)
  }

  encontrarPreguntaIndice(indice:number){
    //let pregunta:Preguntamodel=this.preguntas[indice]
    //return pregunta
  }

  encontrarPregunta(username:string,indice:number){
    //let pregunta:Preguntamodel=this.userPreguntas(username)[indice]
    //return pregunta
  }

  actualizarPregunta(indice:number,pregunta:Preguntamodel,username:string){
   //let preguntaModificado=this.userPreguntas(username)[indice]
    // preguntaModificado.Autor=pregunta.Autor
    // preguntaModificado.Answer=pregunta.Answer
    // preguntaModificado.Enunciado=pregunta.Enunciado
    // preguntaModificado.OptionA=pregunta.OptionA
    // preguntaModificado.OptionB=pregunta.OptionB
    // preguntaModificado.OptionC=pregunta.OptionC
    // preguntaModificado.OptionD=pregunta.OptionD
    // preguntaModificado.Subject=pregunta.Subject
    // preguntaModificado.Sustentation=pregunta.Sustentation
    // preguntaModificado.id=pregunta.id
  }

  eliminarPregunta(indice:number){
    //this.preguntas.splice(indice,1)
  }

   getAll(){
    return this.http.get(`${baseUrl}`)
  }
  create(pregunta: any){
    return this.http.post(`${baseUrl}`, pregunta);
  }
  update(id: string,pregunta:any){
    return this.http.put(`${baseUrl}/${id}`, pregunta);
  }
  delete(id:string){
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
