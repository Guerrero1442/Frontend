import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exammodel } from '../Models/Exammodel/exammodel';
import { Preguntamodel } from '../Models/Preguntamodel/preguntamodel';
import { ExamServiceService } from '../Services/Exams/exam-service.service';
import { PreguntaServiceService } from '../Services/Pregunta/pregunta-service.service';
import { UserServiceService } from '../Services/User/user-service.service';

@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrls: ['./crear-examen.component.css']
})
export class CrearExamenComponent implements OnInit {
  preguntas:Preguntamodel[]=[]
  constructor(private serviciPreguntas:PreguntaServiceService,private route:ActivatedRoute,private userService:UserServiceService,private examService:ExamServiceService, private router:Router) { }

  ngOnInit(): void {
    //this.preguntas=this.serviciPreguntas.preguntas
  }
  cuadroUsername:string=""
  cuadroMateria:string=""
  pregunta1:Preguntamodel
  pregunta2:Preguntamodel
  pregunta3:Preguntamodel
  pregunta4:Preguntamodel
  pregunta5:Preguntamodel
  preguntasExam:Preguntamodel[]=[]
  contador:number=5

  agregarPreguntaExam(indice:number){
    //this.preguntasExam.push(this.serviciPreguntas.encontrarPreguntaIndice(indice))
    this.contador=this.contador - 1 
  }

  asignarPreguntas(){
    this.pregunta1=this.preguntasExam[0]
    this.pregunta2=this.preguntasExam[1]
    this.pregunta3=this.preguntasExam[2]
    this.pregunta4=this.preguntasExam[3]
    this.pregunta5=this.preguntasExam[4]
  }

  agregaExam(){
    let nuevoExamen=new Exammodel(this.cuadroUsername,this.cuadroMateria,this.pregunta1,this.pregunta2,this.pregunta3,this.pregunta4,this.pregunta5)
    this.examService.agregarExamen(nuevoExamen)
    this.router.navigate(['tusexamenes'])
  }
}
