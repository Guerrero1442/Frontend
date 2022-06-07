export class Usermodel {

	constructor(username:string,rol:string,password:string,asignedExam:number){
		this.Username=username
		this.Rol=rol
		this.Password=password
		this.AsignedExam=asignedExam
	}
      id: number;
	  Username: string;
	  Rol: string;
	  Password: string;
	  AsignedExam: number;
}
