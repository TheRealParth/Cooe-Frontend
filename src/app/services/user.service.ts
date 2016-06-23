// user.service.ts
import { Injectable } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import { Http, Headers } from '@angular/http';
import {contentHeaders} from "../common/headers";
let TEMP_URL = 'URL/basic-auth';
@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private router: Router, private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(username, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({ username, password });
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
    // return this.http
    //   .post(
    //     '/login',
    //     JSON.stringify({ username, password }),
    //     { headers }
    //   )
    //   .map(res => res.json())
    //   .map((res) => {
    //     if (res.success) {
    //       localStorage.setItem('auth_token', res.auth_token);
    //       this.loggedIn = true;
    //     }
    //
    //     return res.success;
    //   });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
