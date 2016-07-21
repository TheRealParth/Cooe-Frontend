// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {RouteUtilService} from "./route-util.service";
import {Router} from "@angular/router-deprecated";

let TEMP_URL = '//people.such.works:8080';
let LOGIN_URL = TEMP_URL + '/cooe/profile/validateCredential/';

@Injectable()
export class UserService {
  public loggedIn = false;
  headers = new Headers();

  constructor( private router: Router, private http: Http) {
    this.loggedIn = !!localStorage.getItem('userName');
    console.log(this.loggedIn)
    if(localStorage.getItem('userName')) console.log('username: ', localStorage.getItem('userName'))
    this.headers.append('Content-Type', 'application/json');
  }
  //TODO: Implement JWT authentication as soon as API has it.
  //most of these functions are self explanatory through the names

  login(username, password) {
   return this.http.post(LOGIN_URL, JSON.stringify({ "userName": username, "password": password }), { headers: this.headers })
      .map((data: any) => data.json());
  }

  validate(username, code){
    return this.http.put(TEMP_URL + '/cooe/profile/' + username + '/validate/', JSON.stringify({
      "validationCode": code,
      "validationType": "EMAIL"
    }), { headers: this.headers })
      .map((data: any) => data.json());
  }

  signup(userInfo) {
    return this.http.post(TEMP_URL + '/cooe/profile/', userInfo, { headers: this.headers })
      .map((data: any) => data.json())
  }

  forgot(email) {
    return this.http.get(TEMP_URL + '/cooe/profile/' + email + '/forgotPassword/EMAIL', { headers: this.headers })
      .map((data: any) => data.json())
  }

  logout() {
    //TODO: Implment JWT logout.
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    this.loggedIn = false;
  }

  //TODO getContacts
  getContacts(){

  }
  setUser(username: string, password: string){
    console.log('setting user ' + username)
    localStorage.setItem('userName', username);
    localStorage.setItem('password', password);
    this.loggedIn=true;
  }

}
