import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Course } from "../cours.models/cours.model";
import { Injectable } from "@angular/core";
@Injectable()
export class CoursesService{
    getCourses():Observable<Course[]>{
        return this._http.get<Course[]>("https://localhost:7175/api/Course");
    }
    addCourse(Course:Course):Observable<boolean>{
        console.log("put",Course)
        return this._http.post<boolean>("https://localhost:7175/api/Course",Course);
    }
    constructor(private _http:HttpClient){

    }
}