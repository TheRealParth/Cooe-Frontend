import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
import {AppState} from "../app.service";

let styles   = require('../static/login.css');
let template = require('../static/login.html');

@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class LoginComponent {

  constructor(public router: Router, public http: Http, public appState: AppState) {
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

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}
