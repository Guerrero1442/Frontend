import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Preguntamodel } from '../Models/Preguntamodel/preguntamodel';
import { PreguntaServiceService } from '../Services/Pregunta/pregunta-service.service';

import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  preguntas: any[] = [];
  pregunta = {
      Subject:"",
      Statement:"",
      Autor: "",
      OptionA: "",
      OptionB:"",
      OptionC:"",
      OptionD:"",
      Answer:"",
      Sustentation:""  ,
  }
 constructor(
   private pregutaservice: PreguntaServiceService
 ){}
  
  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.pregutaservice.getAll()
    .subscribe((data:any) => this.preguntas = data);
  }
  delete(pregunta: any){
    this.pregutaservice.delete(pregunta.id)
    .subscribe(() => this.getAll);

  }
}
