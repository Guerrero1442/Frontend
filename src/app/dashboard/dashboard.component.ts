import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../pregunta.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  preguntas:Pregunta[]=[
    new Pregunta("caariasg2","calculo","Cuanto es 1+1",'2',{"opcion1":3,"opcion2":4,"opcion3":5,"opcion4":2}),
    new Pregunta("mirevalo","calculo","Cuanto es 1+1",'2',{"opcion1":3,"opcion2":4,"opcion3":5,"opcion4":2})
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
