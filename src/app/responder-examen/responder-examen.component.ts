import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exammodel } from '../Models/Exammodel/exammodel';
import { Preguntamodel } from '../Models/Preguntamodel/preguntamodel';
import { ExamServiceService } from '../Services/Exams/exam-service.service';

@Component({
  selector: 'app-responder-examen',
  templateUrl: './responder-examen.component.html',
  styleUrls: ['./responder-examen.component.css']
})
export class ResponderExamenComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,private examServices:ExamServiceService) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.queryParams['id_user']
    this.indexExam=this.route.snapshot.queryParams['id_Exam']
    this.cargo=this.route.snapshot.queryParams['rol']
    this.exam=this.examServices.examenes[this.indexExam]
    this.preguntas[0]=this.exam.Pregunta1
    this.preguntas[1]=this.exam.Pregunta2
    this.preguntas[2]=this.exam.Pregunta3
    this.preguntas[3]=this.exam.Pregunta4
    this.preguntas[4]=this.exam.Pregunta5
  }
  elegirRptCorrecta(event:Event,indice:number){
    if((<HTMLInputElement>event.target).value == 'opcion1'){
      this.preguntas[indice].Answer=this.preguntas[indice].OptionA
    }else if((<HTMLInputElement>event.target).value == 'opcion2'){
      this.preguntas[indice].Answer=this.preguntas[indice].OptionB
    }else if((<HTMLInputElement>event.target).value == 'opcion3'){
      this.preguntas[indice].Answer=this.preguntas[indice].OptionC
    }else{
      this.preguntas[indice].Answer=this.preguntas[indice].OptionD
    }
  }

  //Answer
  //Sustentacion

  
  index:number
  cargo:string
  indexExam:number
  exam:Exammodel
  preguntas:Preguntamodel[]=[]
  cuadroSustentacion:string=""

  datosRespuesta(indice:number){
    this.preguntas[indice].Sustentation=this.cuadroSustentacion
  }

  agregaExamCalificado(){
    let nuevoExamen=new Exammodel(this.exam.Subject,this.exam.Autor,this.preguntas[0],this.preguntas[1],this.preguntas[2],this.preguntas[3],this.preguntas[4])
    this.examServices.agregarExamenCalificado(nuevoExamen)
    console.log(nuevoExamen)
    // this.router.navigate(['tusexamenes'])
  }
}
