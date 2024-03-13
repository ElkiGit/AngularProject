import { Time } from "@angular/common";
import { Category } from "./category.model";

export class Course{
    id :number;
    lecturer: number;
    name: string;
    category: number;
    countOfLessons:number;
    start :Time;
    syllabus:string[];
    study:Study;
    image:string;
}
export enum Study{'fruntal','zome'};