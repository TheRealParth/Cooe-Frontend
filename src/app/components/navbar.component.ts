import {Component, OnInit, HostListener, Input} from '@angular/core';
import {RouterLink, Router} from '@angular/router-deprecated';
import { UserService } from '../services/user.service';
import {AppState} from "../app.service";

let template = require('../static/ui/navbar.html');
@Component({
  selector: 'navbar',
  template: template,
  directives: [RouterLink],
})
//TODO: Make profile image and profile name change to user's info on the right side
export class NavbarComponent implements OnInit {
@Input() public logInCheck: boolean;
  //name default values
  constructor(private userService: UserService, private router: Router){
    // this.isLoggedIn = userService.isLoggedIn();
    this.userService = userService;
    this.router = router;
  }
  logout(){
    this.userService.logout();
    this.router.navigateByInstruction(this.router.generate(['./Login']));
  }
  ngOnInit(){
    //noinspection TypeScriptUnresolvedFunction
    $(document).ready(function() {
      //noinspection TypeScriptUnresolvedFunction
      $(".dropdown-button").dropdown();
      //noinspection TypeScriptUnresolvedFunction
      $(".button-collapse").sideNav();
    }
  }

}
