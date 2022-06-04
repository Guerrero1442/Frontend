import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pregunta } from '../pregunta.model';
import { PreguntasService } from '../preguntas.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  preguntas:Pregunta[]=[]
  index:number
  
  constructor(private servicioPreguntas:PreguntasService,private route:ActivatedRoute,private servicioUsuario:UserService) { 
    // this.preguntas=this.servicioPreguntas.preguntas
  }

  ngOnInit(): void {
    this.index=this.route.snapshot.queryParams['id_user']
    this.preguntas=this.servicioPreguntas.userPreguntas(this.servicioUsuario.encontrarUsarioUsername(this.index))
  }
  
}
