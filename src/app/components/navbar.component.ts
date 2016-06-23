import {Component, OnInit, HostListener} from '@angular/core';
import {RouterLink, Router} from '@angular/router-deprecated';
import { UserService } from '../services/user.service';

let template = require('../static/ui/navbar.html');
@Component({
  selector: 'navbar',
  template: template,
  directives: [RouterLink],
  providers: [UserService]
})

export class NavbarComponent implements OnInit {
  isLoggedIn: Boolean = false;
  isDropDownOpen: Boolean = false;
  isContactFormOpen: Boolean = false;
  isLoginFormOpen: Boolean = false;
  navTitle: string = 'Home';

  //name default values
  constructor( private userService: UserService){
    // this.isLoggedIn = userService.isLoggedIn();

  }
  setNavTitle(text: string){
    this.navTitle = text;
  }
  toggleDropDown(){
    this.isDropDownOpen = !(this.isDropDownOpen);
    console.dir(this.isDropDownOpen);
  }
  toggleContactForm(){
    this.isContactFormOpen = !(this.isContactFormOpen);
    console.dir(this.isContactFormOpen);
  }
  toggleLoginForm(){
    this.isLoginFormOpen = !(this.isLoginFormOpen);
  }
  ngOnInit(){
    console.log(this.isLoggedIn);
  }

}
