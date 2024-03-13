import { Injectable } from "@angular/core";
import { user } from "./user.model";
import { Observable } from "rxjs";
import axios from "axios";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class userService{
   userNow:user; 
    getUsers():Observable<user[]>{
        console.log("fghjkl");
        return new Observable<user[]>(observer => {
            axios.get('https://localhost:7175/api/User').then(response => {
            observer.next(response.data);
            observer.complete();
            }).catch(error => {
            observer.error(error);
            });
         } )           
    }
    addUser(user:user):Observable<user>{
        return this._http.post<user>("https://localhost:7175/api/User",user);
    }
    constructor(private _http:HttpClient){

    }
}
