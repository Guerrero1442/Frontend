import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preguntamodel } from '../Models/Preguntamodel/preguntamodel';
import { PreguntaServiceService } from '../Services/Pregunta/pregunta-service.service';
import { UserServiceService } from '../Services/User/user-service.service';


@Component({
  selector: 'app-actualizapregunta',
  templateUrl: './actualizapregunta.component.html',
  styleUrls: ['./actualizapregunta.component.css']
})
export class ActualizapreguntaComponent implements OnInit {

  constructor(private servicioPreguntas:PreguntaServiceService,private router:Router,private route:ActivatedRoute,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id']
    this.index=this.route.snapshot.queryParams['id_user']
    //let pregunta:Preguntamodel=this.servicioPreguntas.encontrarPregunta(this.userService.encontrarUsarioUsername(this.index),this.indice)
    // this.cuadroUsername=pregunta.Autor
    // this.cuadroMateria=pregunta.Subject
    // this.cuadroEnunciado=pregunta.Enunciado
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
  cuadroUsername:string=""
  cuadroMateria:string=""
  cuadroEnunciado:string=""
  cuadroOpcion1:string=""
  cuadroOpcion2:string=""
  cuadroOpcion3:string=""
  cuadroOpcion4:string=""
  respuestaCorrecta:string
  sustentacion:string=""
  index:number
  indice:number

  actualizaPregunta(){
    let nuevaPregunta=new Preguntamodel(this.cuadroMateria,this.cuadroUsername,this.cuadroEnunciado,this.cuadroOpcion1,this.cuadroOpcion2,this.cuadroOpcion3,this.cuadroOpcion4,this.respuestaCorrecta,this.sustentacion)
    this.servicioPreguntas.actualizarPregunta(this.indice,nuevaPregunta,this.userService.encontrarUsarioUsername(this.index))
    this.router.navigate(['dashboard'],{queryParams:{id_user: this.index}})
  }
  eliminaPregunta(){
    this.servicioPreguntas.eliminarPregunta(this.indice)
    this.router.navigate(['dashboard'],{queryParams:{id_user: this.index}})
  }
}