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
  
  constructor(private servicioPreguntas:PreguntaServiceService,private route:ActivatedRoute,private servicioUsuario:UserServiceService) { 
    // this.preguntas=this.servicioPreguntas.preguntas
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
