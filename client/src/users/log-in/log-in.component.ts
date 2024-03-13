import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { user } from '../user.service&model/user.model';
import { userService } from '../user.service&model/user.service';
import { LecturerService } from '../lecturer.service&model/Lecturer.service';
import { Lecturer } from '../lecturer.service&model/Lecturer.modele';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  isLecturer:boolean=false;//רוצה מרצה להיכנס
  passwordWrong:boolean=false;//סיסמא תקינה
  Lecturer:Lecturer[];//מערך מרצים הקיים במערכת
  lucturerToEnter:Lecturer;//האם המשתמש קיים במערכת
  users:user[];//מערך משתמשים שקיים במערכת
  userToEnter:user;//האם המשתמש קיים במערכת
  userToEnteB:boolean=false;
  loginForm:FormGroup =new FormGroup({}) ;//טופס קלט לשם משתמש וסיסמא
  routeSub:Subscription;
   ngOnInit(){//איתחולים

    this.routeSub = this.route.paramMap.subscribe();
    this._users.getUsers().subscribe(data => {    
      this.users = data;
    }, error => {
      console.error('Error fetching data:', error);
    });
    this.loginForm=new FormGroup({
      name:new FormControl(''),
      password:new FormControl('')
      //,cours:new FormControl('')
    })
}
   logInfunc(){//בדיקת תקינות קלט
   console.log("sabbmit");
   if(this.isLecturer==false){
    this.userToEnteB=this.users.find(use=>this.loginForm.value.name==use.name)?true:false;
    this.userToEnter = this.users.find(use=>this.loginForm.value.name==use.name)
    
    if ( this.userToEnteB&& this.userToEnter.password == this.loginForm.value.password) {
      this._users.userNow = this.userToEnter;
      sessionStorage.setItem("user", this.userToEnter.name);
      this._router.navigate(['/courses']);
      this._router.navigate(['/courses']);
      sessionStorage.setItem("user", this.userToEnter.name);
      this._router.navigate(['/courses']);
    
    }
    if(this.userToEnter!=undefined&&this.userToEnter.password!=this.loginForm.value.password){//אם הסיסמא שגוי איתחול האינפות
      this.loginForm=new FormGroup({
        name:new FormControl(this.userToEnter.name),
        password:new FormControl('')
      })
      this.passwordWrong=true;
    }
    
   console.log("aaa")
   sessionStorage.setItem("username",this.loginForm.value.name)
   this._router.navigate(['/register']);
  
  }
  else{
    this.lucturerToEnter=this.Lecturer.find(use=>this.loginForm.value.name==use.name);
   if(this.lucturerToEnter!=undefined){
    if(this.lucturerToEnter.password!=this.loginForm.value.password){//אם הסיסמא שגוי איתחול האינפות
      this.loginForm=new FormGroup({
        name:new FormControl(this.lucturerToEnter.name),
        password:new FormControl(''),
        cours:new FormControl('')
      })
      this.passwordWrong=true;
    }
    
    sessionStorage.setItem("Lecturer",(this.lucturerToEnter.id).toString())
    localStorage.setItem('Lecturer',this.lucturerToEnter.name) ;
    sessionStorage.setItem("username",this.loginForm.value.name)
    this._Lecturer.Lecturer=this.lucturerToEnter;
    this._router.navigate(['/courses']);
   }
   else{
   sessionStorage.setItem("username",this.loginForm.value.name)
   this._router.navigate(['/register']);
  }
  }
   console.log(this.userToEnter);
  }
  enterLecturer(){
    this.passwordWrong=false;
    this.loginForm=new FormGroup({
      name:new FormControl(''),
      password:new FormControl(''),
      cours:new FormControl('')
    })
   this.isLecturer=true;
   this._Lecturer.getLecturer().subscribe(data => {    
    this.Lecturer = data;
  }, error => {
    console.error('Error fetching data:', error);
  });

  }
  constructor(private _users:userService,private _Lecturer:LecturerService, private _router: Router, private route: ActivatedRoute){}
  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
