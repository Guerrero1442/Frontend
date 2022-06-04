import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  usuarios:User[]=[
    new User("caariasg2","estudiante","Camilo","Arias","1234"),
    new User("jnavaj3","profesor","Jhon","Navarrete","1442"),
    new User("miller2","estudiante","Miller","Arevalo","4321"),
    new User("lhuer2","profesor","Luis","Huertas","boca")
  ]


  encontrarUsarioUsername(index:number){
    return this.usuarios[index].username
  }
}

