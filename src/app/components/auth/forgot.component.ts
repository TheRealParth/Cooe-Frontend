import { Component} from '@angular/core';
import { Router, RouterLink} from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {AppState} from "../../app.service.ts";
import { MD_INPUT_DIRECTIVES, MdInput } from '@angular2-material/input';
import { UserService } from '../../services/user.service.ts';
import {SignUpComponent} from "./signup.component";

let template = require('../../static/forgot.html');

@Component({
  selector: 'forgot',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  providers: [UserService, SignUpComponent],
  template: template,

})
export class ForgotComponent {
  localState = {username: '', password: ''};
  constructor(private userService: UserService, private router: Router, private appState: AppState) {
    this.appState.set("username", "");
    this.userService = userService;
    this.router = router;
  }

}
