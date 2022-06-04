import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../pregunta.model';
import { PreguntasService } from '../preguntas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crearpregunta',
  templateUrl: './crearpregunta.component.html',
  styleUrls: ['./crearpregunta.component.css']
})
export class CrearpreguntaComponent implements OnInit {
  constructor(private servicioPreguntas:PreguntasService,private router:Router,private route:ActivatedRoute,private userService:UserService) { }

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
  respuestaCorrecta:string=""

  agregaPregunta(){
    let nuevaPregunta=new Pregunta(this.cuadroUsername,this.cuadroMateria,this.cuadroEnunciado,this.respuestaCorrecta,{"opcion1":this.cuadroOpcion1,"opcion2":this.cuadroOpcion2,"opcion3":this.cuadroOpcion3,"opcion4":this.cuadroOpcion4} )
    this.servicioPreguntas.agregarPregunta(nuevaPregunta)
    this.router.navigate(['dashboard'])
  }
}