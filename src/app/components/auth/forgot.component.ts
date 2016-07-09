import { Component} from '@angular/core';
import { Router, RouterLink} from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { UserService } from '../../services/user.service.ts';
import {SignUpComponent} from "./signup.component";
import {RouteUtilService} from "../../services/route-util.service";

let template = require('../../static/forgot.html');

@Component({
  selector: 'forgot',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  providers: [UserService, RouteUtilService, SignUpComponent],
  template: template,

})
export class ForgotComponent {
  localState = {email: '', error: '', isRecovering: false};
  constructor(private userService: UserService, private routeUtilService: RouteUtilService, private router: Router) {
    this.userService = userService;
    this.routeUtilService = routeUtilService;
    this.router = router;
  }
  forgot(){
    // checks for blank
    //TODO: Add and test the pre request input checks
    if(this.localState.email != ''){
      this.localState.isRecovering = true;
      this.userService.forgot(this.localState.email)
        .subscribe(
          data => {
            //TODO: if logged in successfully, SAVE JWT and REROUTE TO /TEEUPS
            // localStorage.setItem('jwt', data.json().id_token);
            // this.router.parent.navigateByUrl('/home');
            // return data;
            this.routeUtilService.routeTo('Login');
            console.log("DATA", data);
          },
          error => {
            if(error){
              console.log("ERROR", error);
            }
          });
    }
  }
}
