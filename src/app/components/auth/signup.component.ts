import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {AppState} from "../../app.service.ts";
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { UserService } from '../../services/user.service.ts';

let template = require('../../static/signup.html');

@Component({
  selector: 'signup',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  providers: [UserService],
  template: template,
})
export class SignUpComponent {
  localState = {username: '', password: ''};

  constructor(private userService: UserService, private router: Router,  private appState: AppState) {
    this.appState.set("username", "");
    this.userService = userService;
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
