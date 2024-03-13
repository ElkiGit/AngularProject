import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../cours.models/cours.model';
import { Category } from '../cours.models/category.model';
import { CoursesService } from '../cours.service/course.service';
import {  Router } from '@angular/router';
import { CategoryService } from '../cours.service/category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'add-course',
  templateUrl: './add-cours.component.html',
  styleUrl: './add-cours.component.css'
})
export class AddCourseComponent implements OnInit{
  courseToAdd:Course
  reguerd:boolean;
  validatur:boolean=false;
  @Input()
  course?:Course;
  categories: Category[] ; 
   courseForm: FormGroup;
  constructor(private _courseService: CoursesService,private _router: Router, private _categor:CategoryService) {
   
  }
  ngOnInit(): void {

  this._categor.getCategory().subscribe(data=>{
   this.categories=data;
  });


  this.courseForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    startDate: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    countOfLessons: new FormControl('', [Validators.required]),
    learningWay:new FormControl('',[Validators.required]),
    categoryId:new FormControl('',[Validators.required])
  });
    
  }
  inputs: string[] = ['']; // מערך שמכיל את תיבות הקלט, מתחיל עם תיבה ריקה בהתחלה
   l:number=this.inputs.length;
  onInput(event: Event, index: number): void {
   
    const target = event.target as HTMLInputElement;
    console.log("ddd",target.value);
    const value = target.value.trim();

    if (value && index === this.inputs.length - 1) {
      this.inputs.push(value);
    } else if (!value && index < this.inputs.length - 1) {
      this.inputs.splice(index + 1, 1);
     }
     this.l=this.inputs.length;
    // else if(value){ this.inputs[index]=value}
    console.log(this.inputs)
  }
  saveNewCourse(){
    this.validatur=(!this.courseForm.valid||this.inputs.length<2)?true:false;
    if(this.validatur==false){
     this.courseToAdd = {
      id:0,
      name: this.courseForm.value.name,
      start: this.courseForm.value.startDate,
      image: this.courseForm.value.image,
      category: this.courseForm.value.categoryId,
      countOfLessons: this.courseForm.value.countOfLessons,
      syllabus:this.inputs,
      lecturer:+JSON.parse(sessionStorage.getItem('Lecturer')!),
      study: +this.courseForm.value.learningWay};
      console.log("corse to add",this.courseToAdd)
      this._courseService.addCourse(this.courseToAdd).subscribe(s => {
      console.log("s", s);
      if (s != undefined){
        Swal.fire("Success","The course was saved successfully!!!","success");
       
      }
      this._router.navigate(['/courses']);






    
      //Swal.fire('Error', 'Wrong Password', 'error');
  })
  }
}
}
