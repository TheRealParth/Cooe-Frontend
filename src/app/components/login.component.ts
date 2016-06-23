import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
import {AppState} from "../app.service";
import { RouterActive } from '../router-active';
import { MD_INPUT_DIRECTIVES, MdInput } from '@angular2-material/input';
import { UserService } from '../services/user.service';

let template = require('../static/login.html');
let TEMP_URL = '//echo.getpostman.com/basic-auth';
let STATUS_URL = 'https://echo.getpostman.com/status/200';
let style = require('../static/css/override.css');

@Component({
  selector: 'login',
  styles: [style],
  directives: [RouterActive, RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  providers: [UserService],
  template: template,
})
export class LoginComponent {
  localState = {username: '', password: ''};

  constructor(private userService: UserService, private router: Router, private http: Http, private appState: AppState) {
    this.appState.set("username", "");
    this.userService = userService;
  }
  login() {
    var username = this.localState.username;
    var password = this.localState.password;

    let body = JSON.stringify({ username, password });
    this.http.post(TEMP_URL, body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          this.localState.username = '';
          this.localState.password = '';
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );

  }
  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
  
}
