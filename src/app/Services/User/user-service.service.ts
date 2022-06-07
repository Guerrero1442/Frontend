import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Usermodel } from 'src/app/Models/Usuariomodel/usermodel';

const baseUrl = 'http://localhost:8080/api/v1/Users';
const baseUrl2 = 'http://localhost:8080/api/v1/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient) { }

  usuarios:Usermodel[]=[
    new Usermodel("camilo","estudiante","1234",0),
    new Usermodel("jnavaj3","profesor","1442",1),
    new Usermodel("miller2","estudiante","4321",2),
    new Usermodel("lhuer2","profesor","boca",3)
  ]
  
  
  encontrarUsarioUsername(index:number){
    return this.usuarios[index].Username
  }

  encontrarUsuarioRol(index:number){
    return this.usuarios[index].Rol
  }
}
