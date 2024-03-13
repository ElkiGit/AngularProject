import { NgModule } from "@angular/core";
import {LogInComponent} from "./log-in/log-in.component"
import {ReactiveFormsModule} from "@angular/forms"
import { userService } from "./user.service&model/user.service";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LecturerService } from "./lecturer.service&model/Lecturer.service";
import { RegisterComponent } from "./register/register.component";
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";

@NgModule({
    declarations:[LogInComponent,RegisterComponent],
    imports:[ReactiveFormsModule, CommonModule,MatInputModule,MatButtonModule,HttpClientModule ],
    providers:[userService,LecturerService],
    exports:[LogInComponent,RegisterComponent]
})
export class userModule{}
//import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// // Import other Angular Material modules as needed

// @NgModule({
//   imports: [
//     MatInputModule,
//     MatButtonModule,
//     // Add other Angular Material modules here
//   ]
// })

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//     // Other components
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule, // Import the BrowserAnimationsModule
//     MatInputModule, // Import the MatInputModule
//     MatButtonModule // Import the MatButtonModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
