import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { AppState } from "../../app.service.ts";
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { UserService } from '../../services/user.service.ts';
import { SignUpComponent } from "./signup.component";
import { RouteUtilService } from "../../services/route-util.service";

let template = require('../../static/login.html');

@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  providers: [RouteUtilService, SignUpComponent],
  template: template,
})
export class LoginComponent {
  localState = {username: '', password: '', error: '', isLoggingIn: false};

  constructor(private appState: AppState, private routeUtilService: RouteUtilService, public userService: UserService, private router: Router) {
    this.userService = userService;
    this.router = router;
    this.routeUtilService = routeUtilService;
    this.localState.isLoggingIn = false;
    this.appState = appState;

  }
  //TODO: Test the pre request input checks
  login() {
    this.localState.isLoggingIn = true;
    this.appState.set('username', this.localState.username);
    var username = this.localState.username;
    var password = this.localState.password;
    if(username != "" && password != "")
      this.userService.login(username, password)
        .subscribe(
        data => {
          //TODO: if logged in successfully, SAVE JWT and REROUTE TO /TEEUPS
          localStorage.setItem('userName', username);
          localStorage.setItem('password', password);
          // this.router.parent.navigateByUrl('/home');
          // return data;
          console.log(this.userService.loggedIn);
          this.userService.setUser(username, password)
          this.router.navigateByUrl('/teeups');
          console.log("DATA", data);
        },
        error => {
          var e = JSON.parse(error.text());
          if(e.code == "COOE_010"){
            this.appState.set('validating', true);
          }
          this.localState.error= e.message;
          this.localState.isLoggingIn = false;
        });
    else {
      this.localState.error = "Missing fields";
      this.localState.isLoggingIn = false;
    }

  }
  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
  ngOnInit(){
    if(this.userService.loggedIn) this.routeUtilService.routeTo('Teeups')
  }
}
