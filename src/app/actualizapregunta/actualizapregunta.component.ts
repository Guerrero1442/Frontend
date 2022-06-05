import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntasComponent } from '../preguntas/preguntas.component';
import { PreguntaServiceService } from '../Services/Pregunta/pregunta-service.service';

import { UserService } from '../user.service';

@Component({
  selector: 'app-actualizapregunta',
  templateUrl: './actualizapregunta.component.html',
  styleUrls: ['./actualizapregunta.component.css']
})
export class ActualizapreguntaComponent implements OnInit {

   constructor(private servicioPreguntas:PreguntaServiceService,private router:Router,private route:ActivatedRoute,private userService:UserService) { }

   ngOnInit(): void {
  //   this.indice=this.route.snapshot.params['id']
  //   this.index=this.route.snapshot.queryParams['id_user']
  //   let pregunta:PreguntasComponent=this.servicioPreguntas.encontrarPregunta(this.userService.encontrarUsarioUsername(this.index),this.indice)
  //   this.cuadroUsername=pregunta.creador
  //   this.cuadroMateria=pregunta.materia
  //   this.cuadroEnunciado=pregunta.enunciado
   }
  // elegirRptCorrecta(event:Event){
  //   if((<HTMLInputElement>event.target).value == 'opcion1'){
  //     this.respuestaCorrecta=this.cuadroOpcion1

  //   }else if((<HTMLInputElement>event.target).value == 'opcion2'){
  //     this.respuestaCorrecta=this.cuadroOpcion2      
  //   }else if((<HTMLInputElement>event.target).value == 'opcion3'){
  //     this.respuestaCorrecta=this.cuadroOpcion3
  //   }else{
  //     this.respuestaCorrecta=this.cuadroOpcion4
  //   }
  // }
  // cuadroUsername:string=""
  // cuadroMateria:string=""
  // cuadroEnunciado:string=""
  // cuadroOpcion1:string=""
  // cuadroOpcion2:string=""
  // cuadroOpcion3:string=""
  // cuadroOpcion4:string=""
  // respuestaCorrecta:string=""
  // index:number
  // indice:number

  // actualizaPregunta(){
  //   let nuevaPregunta=new Pregunta(this.cuadroUsername,this.cuadroMateria,this.cuadroEnunciado,this.respuestaCorrecta,{"opcion1":this.cuadroOpcion1,"opcion2":this.cuadroOpcion2,"opcion3":this.cuadroOpcion3,"opcion4":this.cuadroOpcion4} )
  //   this.servicioPreguntas.actualizarPregunta(nuevaPregunta,this.indice)
  //   this.router.navigate(['dashboard'])
  // }
  // eliminaPregunta(){
  //   this.servicioPreguntas.eliminarPregunta(this.indice)
  //   this.router.navigate(['dashboard'])
  // }
}