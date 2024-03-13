import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CoursesService } from "./cours.service/course.service";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CoursDetailsComponent } from "./cours-details/cours-details.component";

import { CategoryService } from "./cours.service/category.service";
import { AddCourseComponent } from "./add-cours/add-cours.component";



@NgModule({
    declarations:[AllCoursesComponent,CoursDetailsComponent,AddCourseComponent],
    imports:[ReactiveFormsModule, CommonModule,HttpClientModule ],
    providers:[CoursesService,CategoryService],
    exports:[AllCoursesComponent,AddCourseComponent]
})
export class coursModule{}