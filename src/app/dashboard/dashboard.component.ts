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
  preguntas:Preguntamodel[]=[]
  index:number
  
  constructor(private servicioPreguntas:PreguntaServiceService,private route:ActivatedRoute,private servicioUsuario:UserService) { 
  }

  ngOnInit(): void {
     this.index=this.route.snapshot.queryParams['id_user']
     //this.preguntas=this.servicioPreguntas.userPreguntas(this.servicioUsuario.encontrarUsarioUsername(this.index))
  }
  
}
