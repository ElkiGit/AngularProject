import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import axios from "axios";
import { Lecturer } from "./Lecturer.modele";

@Injectable()
export class LecturerService{ 
    Lecturer:Lecturer;
    getLecturer():Observable<Lecturer[]>{
        console.log("fghjkl");
        return new Observable<Lecturer[]>(observer => {
            axios.get('https://localhost:7175/api/Lecturer').then(response => {
            observer.next(response.data);
            observer.complete();
            }).catch(error => {
            observer.error(error);
            });
         } )           
    }
}
