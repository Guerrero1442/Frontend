import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Preguntamodel } from '../Models/Preguntamodel/preguntamodel';
import { PreguntaServiceService } from '../Services/Pregunta/pregunta-service.service';
import { UserServiceService } from '../Services/User/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  preguntas:Preguntamodel[]=[]
  index:number

  constructor(private pregutaservice:PreguntaServiceService) { 
     
  }
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.pregutaservice.getAll()
    .subscribe((data:any) => this.preguntas = data);
  }

}
