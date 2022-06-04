import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pregunta } from '../pregunta.model';
import { PreguntasService } from '../preguntas.service';

@Component({
  selector: 'app-actualizapregunta',
  templateUrl: './actualizapregunta.component.html',
  styleUrls: ['./actualizapregunta.component.css']
})
export class ActualizapreguntaComponent implements OnInit {

  constructor(private servicioPreguntas:PreguntasService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id']
    let pregunta:Pregunta=this.servicioPreguntas.encontrarPregunta(this.indice)
    this.cuadroUsername=pregunta.creador
    this.cuadroMateria=pregunta.materia
    this.cuadroEnunciado=pregunta.enunciado
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
  respuestaCorrecta:string=""

  indice:number

  actualizaPregunta(){
    let nuevaPregunta=new Pregunta(this.cuadroUsername,this.cuadroMateria,this.cuadroEnunciado,this.respuestaCorrecta,{"opcion1":this.cuadroOpcion1,"opcion2":this.cuadroOpcion2,"opcion3":this.cuadroOpcion3,"opcion4":this.cuadroOpcion4} )
    this.servicioPreguntas.actualizarPregunta(nuevaPregunta,this.indice)
    this.router.navigate(['dashboard'])
  }
  eliminaPregunta(){
    this.servicioPreguntas.eliminarPregunta(this.indice)
    this.router.navigate(['dashboard'])
  }
}