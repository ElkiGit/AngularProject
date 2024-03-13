import { Component, Input } from '@angular/core';
import { Course } from '../cours.models/cours.model';
import { Category } from '../cours.models/category.model';
import { CategoryService } from '../cours.service/category.service';

@Component({
  selector: 'course-details',
  templateUrl: './cours-details.component.html',
  styleUrl: './cours-details.component.css'
})
export class CoursDetailsComponent {
  category:Category[];
  itemCategory:Category;
  islecturer:boolean;
  @Input()
  course:Course;

  UpdateCourseDetails(){
    //עובר לעידכון פרטי הקורס
  }


  ngOnInit(){
    this._category.getCategory().subscribe(data => {    
      this.category = data;
    }, error => {
      console.error('Error fetching data:', error);
    });
    this.itemCategory=this.category?.find(cat=>cat.id==this.course.category) ;
    // this.islecturer=sessionStorage.getItem("Lecturer");
    }
  constructor(private _category:CategoryService){}
}
