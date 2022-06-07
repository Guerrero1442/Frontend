import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usermodel } from '../Models/Usuariomodel/usermodel';
import { UserServiceService } from '../Services/User/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router,private userService:UserServiceService) { }
  usuarios:Usermodel[]=[]
  ngOnInit(): void {
    this.usuarios=this.userService.usuarios
  }
  capturaUsername:string="caariasg2"
  capturaPassword:string="1234"
  // resultado:number=this.usuarios.findIndex(User => User === "lhuer2")
  index:number
  mensajeWarning:string=""

  irDashboard(){
    this.index = this.usuarios.findIndex((user)=> user.Username === this.capturaUsername)
    if(this.index != 1){
      if(this.usuarios[this.index].Password === this.capturaPassword){
        if(this.userService.encontrarUsuarioRol(this.index) == 'estudiante'){
          this.router.navigate(['tusexamenes'],{queryParams:{id_user: this.index,rol:this.userService.encontrarUsuarioRol(this.index)}})
        }else{
          this.router.navigate(['dashboard'],{queryParams:{id_user: this.index,rol: 'profesor'}})
        }
      }else{
        this.mensajeWarning="Contraseña o usuarios incorrectos!"
      }
    }else{
      this.mensajeWarning="Contraseña o usuarios incorrectos!"
    }
  }
    // this.router.navigate(['dashboard'])
}

