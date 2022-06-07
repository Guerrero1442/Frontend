import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exammodel } from '../Models/Exammodel/exammodel';
import { ExamServiceService } from '../Services/Exams/exam-service.service';

@Component({
  selector: 'app-tus-examenes',
  templateUrl: './tus-examenes.component.html',
  styleUrls: ['./tus-examenes.component.css']
})
export class TusExamenesComponent implements OnInit {
  constructor(private examenService:ExamServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.queryParams['id_user']
    this.rol=this.route.snapshot.queryParams['rol']
    this.examenes=this.examenService.examenes
    this.cambiosVariablesHTML()
    if(this.rol=='profesor'){
      this.esProfesor=true
    }else{
      this.esProfesor=false
    }
  
  }

  accionBtn:string=""
  crearExam:string=""
  rol:string
  tusPreguntas:string="tusPreguntas"
  esProfesor:boolean=false

  examenes:Exammodel[]=[]
  index:number


  cambiosVariablesHTML(){
    if(this.rol=='estudiante'){
      this.accionBtn='Realizar'
      this.crearExam=""
    }else{
      this.accionBtn='Editar'
      this.crearExam="Crear examen"
    }
  }



  realizarExam(indexExam:number){
    this.router.navigate(['responderExam'],{queryParams:{id_user: this.index,rol: 'profesor',id_Exam: indexExam}})
  }

}
