import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../pregunta.model';
import { PreguntasService } from '../preguntas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  preguntas:Pregunta[]=[]

  constructor(private servicioPreguntas:PreguntasService) { 
    this.preguntas=this.servicioPreguntas.preguntas
  }

  ngOnInit(): void {
  }
  
}
