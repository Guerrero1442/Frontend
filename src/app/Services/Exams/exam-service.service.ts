import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exammodel } from 'src/app/Models/Exammodel/exammodel';
import { Preguntamodel } from 'src/app/Models/Preguntamodel/preguntamodel';

const baseUrl = 'http://localhost:8080/api/v1/Exams';
const baseUrl2 = 'http://localhost:8080/api/v1/Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {
  preguntasExam:Preguntamodel[]=[]
  constructor(private http: HttpClient) { }

  examenesCalificados:Exammodel[]=[]

  examenes:Exammodel[]=[  
    new Exammodel("Matematicas","camilo",
    new Preguntamodel("programacion","caariasg2","void fun(unsigned char *cad1, unsigned char *cad2)  {while(*cad2++=*cad1++)}","Copia la cadena cad2 en la cadena cad1","Copia la cadena cad1 en la cadena cad2","Copia la cadena cad2 en la cadena cad1 excepto el caracter /0","Copia la cadena cad1 en la cadena cad2 excepto el caracter /0","Copia la cadena cad1 en la cadena cad2",""),
    new Preguntamodel("programacion","caariasg2","Con la siguiente declaración, ¿cómo podemos saber el número de elementos del array?  int array[15]={0};","sizeof(array)/sizeof(int)","sizeof(array)*sizeof(int)","sizeof(array);","strlen(array);","strlen(array);",""),
    new Preguntamodel("programacion","caariasg2","¿Qué diferencia hay entre comparar con == y ===?","Uno asigna valores y el otro los compara","No hay diferencia,funcionan igual","== compara valores mientras que === compara valores y tipo de dato","Ninguna de las anteriores","== compara valores mientras que === compara valores y tipo de dato",""),
    new Preguntamodel("programacion","caariasg2","¿Cuál es la naturaleza de los valores booleanos?","true y false","empty y null","NaN y undefined","null y none","true y false",""),
    new Preguntamodel("programacion","caariasg2","¿En qué consiste la coerción explícita?","En obligar cambiar el tipo de una variable a otra","En que una variable cambia su tipo a otra sin que forcemos el cambio","En declarar el tipo de dato de una variable","Ninguna de las anteriores","En obligar cambiar el tipo de una variable a otra",""))
  ]

  agregarExamen(examen:Exammodel){
    this.examenes.push(examen)
  }

  agregarExamenCalificado(examen:Exammodel){
    this.examenesCalificados.push(examen)
  }

  // getAll(): Observable<Exammodel[]> {
  //   return this.http.get<Exammodel[]>(baseUrl);
  // }
  // get(id: String): Observable<Exammodel> {
  //   return this.http.get<Exammodel>(`${baseUrl2}/${id}`);
  // }
  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }
  
}
