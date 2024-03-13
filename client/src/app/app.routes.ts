import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LogInComponent } from '../users/log-in/log-in.component';
import { RegisterComponent } from '../users/register/register.component';
import { AllCoursesComponent } from '../courses/all-courses/all-courses.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AddCourseComponent } from '../courses/add-cours/add-cours.component';
import { LoguotComponent } from '../users/loguot/loguot.component';


export const routes: Routes = [
    {path:"login",component:LogInComponent},
   {path:"logout",component:LoguotComponent},
   {path:"courses",component:AllCoursesComponent},
   {path:"register",component:RegisterComponent},
   {path:"register/:name",component:RegisterComponent},
   
   {path:"addcurse",component:AddCourseComponent},
  {path:"",component:AllCoursesComponent}
 // {path:"**",component}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
};
// , canActivate:[ngDoCheck()]
// function ngDoCheck(): boolean {
//     this.lec = localStorage.getItem('Lecturer') ? true : false;
//     return this.lec;
// }
