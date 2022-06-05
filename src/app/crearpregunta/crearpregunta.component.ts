import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preguntamodel } from '../Models/Preguntamodel/preguntamodel';
import { PreguntaServiceService } from '../Services/Pregunta/pregunta-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crearpregunta',
  templateUrl: './crearpregunta.component.html',
  styleUrls: ['./crearpregunta.component.css']
})
export class CrearpreguntaComponent implements OnInit {
 preguntas: any[] = [];
  pregunta = {
      Subject:"",
      Autor: "",
      OptionA: "",
      OptionB:"",
      OptionC:"",
      OptionD:"",
      Answer:"",
      Sustentation:"" ,
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
  create(){
    this.pregutaservice.create(this.pregunta)
    .subscribe(()=> this.getAll()
    );

    this.pregunta = {
      Subject:"",
      Autor: "",
      OptionA: "",
      OptionB:"",
      OptionC:"",
      OptionD:"",
      Answer:"",
      Sustentation:"" ,
    }
  }
  
} 
