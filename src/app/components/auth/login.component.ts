import { Component} from '@angular/core';
import { Router, RouterLink} from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {AppState} from "../../app.service.ts";
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { UserService } from '../../services/user.service.ts';
import {SignUpComponent} from "./signup.component";

let template = require('../../static/login.html');

@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  providers: [UserService, SignUpComponent],
  template: template,
})
export class LoginComponent {
  localState = {username: '', password: ''};
  constructor(private userService: UserService, private router: Router, private appState: AppState) {
    this.appState.set("username", "");
    this.userService = userService;
    this.router = router;
  }
  routeTo(route: string){
    var newRoute = ['./' + route];
    console.log(this.router.parent.generate(newRoute));
    this.router.parent.navigateByInstruction(this.router.parent.generate(newRoute));
  }
  login() {
    var username = this.localState.username;
    var password = this.localState.password;
    this.userService.login(username, password);
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }

}
