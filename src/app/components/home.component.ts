import { Component, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { AuthHttp, JwtHelper} from 'angular2-jwt';

let styles = require('../static/home.css');
let template = require('../static/home.html');


@Component({
  selector: 'home',
  directives: [CORE_DIRECTIVES],
  template: template,
  styles: [styles]
})
export class HomeComponent {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(public router: Router, public http: Http, public authHttp: AuthHttp, @Inject(Window) window: Window) {

    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && this.jwtHelper.decodeToken(this.jwt);
    console.log(this.decodedJwt);
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.parent.navigateByUrl('/login');
  }

  callAnonymousApi() {
    this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  }

  callSecuredApi() {
    this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  }

  _callApi(type, url) {
    this.response = null;
    if (type === 'Anonymous') {
      // For non-protected routes, just use Http
      this.http.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
    if (type === 'Secured') {
      // For protected routes, use AuthHttp
      this.authHttp.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
  }
}
