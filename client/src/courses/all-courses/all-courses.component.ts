import { Component } from '@angular/core';
import { CoursesService } from '../cours.service/course.service';
import { coursModule } from '../cours.module';
import { Course } from '../cours.models/cours.model';

@Component({
  selector: 'all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  courses:Course[];
  ngOnInit(){
   this._courses.getCourses().subscribe(data => {    
    this.courses = data;
  }, error => {
    console.error('Error fetching data:', error);
  });
  }
  constructor(private _courses:CoursesService){}
}
