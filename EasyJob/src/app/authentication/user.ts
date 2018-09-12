export interface contact{
	username: string,
	email: string
}

export class USER implements contact{
    constructor(public username: string, public email: string){
    	this.username = username
    	this.email = email
    }
}