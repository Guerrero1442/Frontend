import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preguntamodel } from '../Models/Preguntamodel/preguntamodel';
import { PreguntaServiceService } from '../Services/Pregunta/pregunta-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crearpregunta',
  templateUrl: './crearpregunta.component.html',
  styleUrls: ['./crearpregunta.component.css']
})
export class CrearpreguntaComponent implements OnInit {
  constructor(private servicioPreguntas:PreguntaServiceService,private router:Router,private route:ActivatedRoute,private userService:UserService) { }

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
  cuadroUsername:string="www"
  cuadroMateria:string="www"
  cuadroEnunciado:string="www"
  cuadroOpcion1:string="www"
  cuadroOpcion2:string="www"
  cuadroOpcion3:string="www"
  cuadroOpcion4:string="www"
  respuestaCorrecta:string="www"
  sustentacion:string="www"

  agregaPregunta(){
    let nuevaPregunta=new Preguntamodel(this.cuadroMateria,this.cuadroUsername,this.cuadroOpcion1,this.cuadroOpcion2,this.cuadroOpcion3,this.cuadroOpcion4,this.respuestaCorrecta,this.sustentacion)
    console.log(nuevaPregunta)
    this.servicioPreguntas.create(nuevaPregunta).subscribe(data=>{console.log(nuevaPregunta)},error=>{alert("error")});
    this.router.navigate(['dashboard'])
  }
  
} 
