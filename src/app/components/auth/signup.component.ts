import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {AppState} from "../../app.service.ts";
import {  MdButton} from '@angular2-material/button';
import { UserService } from '../../services/user.service.ts';
import {RouteUtilService} from "../../services/route-util.service";

let template = require('../../static/signup.html');

@Component({
  selector: 'signup',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, MdButton ],
  providers: [UserService, AppState, RouteUtilService],
  template: template,
})
export class SignUpComponent {
  localState = {
    username: '',
    password: '',
    confirmPass: '',
    firstName: '',
    lastName: '',
    email: '',
    isSigningUp: false,
    error: ''
  };

  constructor(private userService: UserService, private routeUtilService: RouteUtilService,  private appState: AppState) {
    this.userService = userService;
    this.routeUtilService = routeUtilService;
  }
  signup() {
    //TODO: Better error handling
    if((this.localState.firstName.length > 3) && (this.localState.lastName.length > 3) && (this.localState.username.length > 3) && (this.localState.password.length > 7) && (this.localState.confirmPass.length > 7) && (this.localState.email.length > 3))
    {
      if(this.localState.password == this.localState.confirmPass){
        this.localState.isSigningUp = true;
         var userInfo = JSON.stringify({
              "userName" : this.localState.username,
              "password" : this.localState.password,
              "firstName" : this.localState.firstName,
              "lastName" : this.localState.lastName,
              "email" : this.localState.email,
              "avatarId": 5
         });
        console.log(userInfo);
        this.userService.signup(userInfo)
          .subscribe(
          data => {
            // localStorage.setItem('jwt', data.json().id_token);
            // this.router.parent.navigateByUrl('/home');
            this.appState.set("username", this.localState.username);
            this.appState.set("validating", true);
          },
          error => {
            console.log(error.text());
            var e = JSON.parse(error.text());
            this.localState.error= e.message;
            this.localState.isSigningUp = false;
          }
        );
      } else {
       this.localState.error = 'Passwords do not match';
      }
    } else {
      this.localState.error = "Invalid fields";
    }
  }

}
