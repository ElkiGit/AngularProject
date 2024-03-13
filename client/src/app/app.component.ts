import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { userModule } from '../users/user.module';
import { userService } from '../users/user.service&model/user.service';
import { coursModule } from '../courses/cours.module';
import { Course } from '../courses/cours.models/cours.model';
import { AppRoutingModule, routes } from './app.routes';
import {  DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,userModule,coursModule,AppRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  //bootstrap: [AppComponent],
})
export class AppComponent implements DoCheck {
  lec:boolean;
  ngDoCheck() {
   
    this.lec = sessionStorage.getItem('Lecturer') ? true : false;

  }
  
}
