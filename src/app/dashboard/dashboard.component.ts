import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  cargo:string

  constructor(private pregutaservice:PreguntaServiceService,private router:Router,private route:ActivatedRoute) { 
    this.index=this.route.snapshot.queryParams['id_user']
    this.cargo=this.route.snapshot.queryParams['rol']
  }
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.pregutaservice.getAll()
    .subscribe((data:any) => this.preguntas = data);
  }

  irNuevapregunta(){
    this.router.navigate(['nuevaPregunta'],{queryParams:{id_user: this.index}})
  } 

  irtusExamenes(){
    this.router.navigate(['tusexamenes'],{queryParams:{id_user: this.index,rol: this.cargo}})
  }
}
