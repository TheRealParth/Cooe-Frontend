import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
import {AppState} from "../app.service";
import { MD_INPUT_DIRECTIVES, MdInput } from '@angular2-material/input';
import {MdButton} from '@angular2-material/button'

let styles   = require('../static/login.css');
let template = require('../static/login.html');

@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class LoginComponent {
  localState = {username: '', password: ''};
  constructor(public router: Router, public http: Http, public appState: AppState) {
    this.appState.set("username", "");
  }
  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
  submitState(value) {
    console.log('username', value.username);
    this.appState.set('username', value.username);
    this.appState.set('password', value.password);
    this.localState.username = '';
    this.localState.password = '';
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}
