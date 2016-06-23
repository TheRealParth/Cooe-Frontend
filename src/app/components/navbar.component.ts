import {Component, OnInit, Input} from '@angular/core';
import {RouterLink, Router} from '@angular/router-deprecated';
import { UserService } from '../services/user.service';

let template = require('../static/navbar.html');
@Component({
  selector: 'navbar',
  template: template,
  providers: [UserService]
})

export class NavbarComponent implements OnInit {
  isLoggedIn: Boolean = false;
  //name default values
  constructor( private userService: UserService){
    this.isLoggedIn = userService.isLoggedIn();
  }
  ngOnInit(){
    console.log(this.isLoggedIn);
  }

}
