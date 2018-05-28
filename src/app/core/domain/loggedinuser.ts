import { ActivatedRoute } from "@angular/router";

export class LoggedInUser {
    public id:string;
    public access_token: string;
    public username:string;
    public fullname:string;
    public email:string;
    public avata:string;
    
    constructor(access_token: string, username: string, fullname: string, email: string, avata: string) {
        this.access_token = access_token;
        this.username = username;
        this.fullname = fullname;
        this.email = email;
        this.avata = avata;
    }
}