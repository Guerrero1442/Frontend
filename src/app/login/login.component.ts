import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }
  usuarios:User[]=[]
  ngOnInit(): void {
    this.usuarios=this.userService.usuarios
  }
  capturaUsername:string="lhuer2"
  capturaPassword:string="boca"
  // resultado:number=this.usuarios.findIndex(User => User === "lhuer2")
  index:number


  irDashboard(){
    this.index = this.usuarios.findIndex((user)=> user.username === this.capturaUsername)
    if(this.index != 1){
      if(this.usuarios[this.index].contraseña === this.capturaPassword){
        this.router.navigate(['dashboard'],{queryParams:{id_user: this.index}})
      }else{
        console.log("la contraseña o el usuario son incorrectos")
      }
    }else{
      console.log("la contraseña o el usuario son incorrectos")
    }
  }
    // this.router.navigate(['dashboard'])
}

