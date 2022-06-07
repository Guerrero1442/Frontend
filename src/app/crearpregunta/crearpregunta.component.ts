import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Preguntamodel } from '../Models/Preguntamodel/preguntamodel';
import { PreguntaServiceService } from '../Services/Pregunta/pregunta-service.service';
import { UserServiceService } from '../Services/User/user-service.service';

@Component({
  selector: 'app-crearpregunta',
  templateUrl: './crearpregunta.component.html',
  styleUrls: ['./crearpregunta.component.css']
})
export class CrearpreguntaComponent implements OnInit {
  constructor(private servicioPreguntas:PreguntaServiceService,private router:Router,private route:ActivatedRoute,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.queryParams['id_user']
    this.cuadroUsername=this.userService.encontrarUsarioUsername(this.index)
  }
   elegirRptCorrecta(event:Event){
     if((<HTMLInputElement>event.target).value == 'opcion1'){
        this.respuestaCorrecta=this.cuadroOpcion1

     }else if((<HTMLInputElement>event.target).value == 'opcion2'){
        this.respuestaCorrecta=this.cuadroOpcion2      
     }else if((<HTMLInputElement>event.target).value == 'opcion3'){
        this.respuestaCorrecta=this.cuadroOpcion3
     }else{
        this.respuestaCorrecta=this.cuadroOpcion4
     }
   }
  index:number
  cuadroUsername:string
  cuadroMateria:string=""
  cuadroEnunciado:string=""
  cuadroOpcion1:string=""
  cuadroOpcion2:string=""
  cuadroOpcion3:string=""
  cuadroOpcion4:string=""
  respuestaCorrecta:string
  sustentacion:string=""

  agregaPregunta(){
    let nuevaPregunta=new Preguntamodel(this.cuadroMateria,this.cuadroUsername,this.cuadroEnunciado,this.cuadroOpcion1,this.cuadroOpcion2,this.cuadroOpcion3,this.cuadroOpcion4,this.respuestaCorrecta,this.sustentacion)
    this.servicioPreguntas.agregarPregunta(nuevaPregunta)
    this.router.navigate(['dashboard'],{queryParams:{id_user: this.index}})
  }
  
} 
