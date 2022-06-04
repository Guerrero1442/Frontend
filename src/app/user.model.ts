export class User {
	constructor(username:string,cargo:string,name:string,apellido:string,contraseña:string){
		this.username=username
		this.cargo=cargo
		this.name=name
		this.apellido=apellido
		this.contraseña=contraseña
	}
	username:string=""
	cargo:string=""
	name:string=""
	apellido:string=""
	contraseña:string=""
}