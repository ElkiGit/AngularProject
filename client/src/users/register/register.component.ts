import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { user } from '../user.service&model/user.model';
import { userService } from '../user.service&model/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addUser: FormGroup = new FormGroup({});
  users: user[] = [];
  name: string = '';
  routeSub: Subscription;
  nameIsExite:boolean=false;

  constructor(private _userService: userService, private router: Router, private route: ActivatedRoute) {}
  

  ngOnInit(): void {
    this._userService.getUsers().subscribe(res => {
      this.users = res;
    });

    this.name = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : "";
    console.log(this.name)
    this.addUser = new FormGroup({
      "name": new FormControl(this.name, [Validators.required], this.validateName.bind(this)),
      "address": new FormControl(""),
      "email": new FormControl(""),
      "password": new FormControl("", [Validators.required])
    });
  }

  

  onSubmit(): void {
    const newUser: user = this.addUser.value;
    this._userService.addUser(newUser);
    this.router.navigate(['/courses']);
  }

  validateName(control: FormControl) {
    const enteredName = control.value;
    if (!enteredName) {
      return { required: true };
    }
    if (this.users.find(u => u.name === enteredName)) {
      this.nameIsExite = true;
      return { nameExists: true };
    }
    this.nameIsExite = false;
    return null;
}
}