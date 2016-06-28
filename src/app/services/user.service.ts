// user.service.ts
import { Injectable } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import { Http, Headers, Response } from '@angular/http';
import {contentHeaders} from "../common/headers";
let TEMP_URL = '//people.such.works:8080/cooe/profile/validateCredential/';
@Injectable()
export class UserService {
  private loggedIn = false;
  headers = new Headers();
  constructor(private router: Router, private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    this.headers.append('Content-Type', 'application/json');
  }

  login(username, password) {

    return this.http.post(TEMP_URL, JSON.stringify({ "userName": username, "password": password }), { headers: this.headers })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          var e = JSON.parse(error.text());
          switch(e.code){
            //add code for invalid credentials
            case("COOE_011"):
              alert(e.code + '\n' + e.message);
              break;
            //add code for Email not validated
            case("COOE_010"):
              alert(e.code + '\n' + e.message);
              break;
            default:
              alert(e.code);
          }

          console.log(error);
        }
      );
  }
  validate(token){

  }
  signup(username, password, firstName, lastName, email) {
    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    let body = JSON.stringify({
      username,
      password,
      firstName,
      lastName,
      email
    });
    console.log(body.toString());
    return this.http.post(TEMP_URL, body, { headers: contentHeaders })
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
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
