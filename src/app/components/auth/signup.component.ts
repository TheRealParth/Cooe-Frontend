import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {AppState} from "../../app.service.ts";
import {  MdButton} from '@angular2-material/button';
import { UserService } from '../../services/user.service.ts';

let template = require('../../static/signup.html');

@Component({
  selector: 'signup',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, MdButton ],
  providers: [UserService],
  template: template,
})
export class SignUpComponent {
  localState = {
    username: '',
    password: '',
    confirmPass: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private userService: UserService, private router: Router,  private appState: AppState) {
    this.appState.set("username", "");
    this.userService = userService;
  }
  login() {
    this.router.parent.navigateByUrl('/login');
  }
  signup() {
    //TODO: Better error handling
    if((this.localState.firstName.length > 3) && (this.localState.lastName.length > 3) && (this.localState.username.length > 3) && (this.localState.password.length > 7) && (this.localState.confirmPass.length > 7) && (this.localState.email.length > 3))
    {
      if(this.localState.password == this.localState.confirmPass){
        this.userService.signup( this.localState.username, this.localState.password, this.localState.firstName, this.localState.lastName, this.localState.email);
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert("Invalid fields");
    }
  }

}
