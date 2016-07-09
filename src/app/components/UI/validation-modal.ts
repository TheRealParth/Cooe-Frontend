import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {RouteUtilService} from "../../services/route-util.service";
import {AppState} from "../../app.service";

@Component({
  selector: 'validation-modal',
  template: `<div class="modal">
              <div class="vertical">
                <div class="dialogue">
                  <form (ngSubmit)="sendCode()" autocomplete="off" class="login-form">
                    <div class="message">
                      Your account is not yet validated.
                      Please check your email for the validation code
                      and enter it below.<br>
                      <div style="width: 100%; display: flex; flex-direction: row; justify-content: center;">
                      
                       <md-input 
                       [value]="localState.validationCode"
                        (input)="localState.validationCode = $event.target.value"
                         placeholder="Validation Code" style="width:50%; height: 50%;"></md-input>
                 
                      </div>
                        <div class="error">
                          {{localState.error}}
                       </div>
                    </div>
                    <div class="buttons">
                       <button md-raised-button [disabled]="localState.isValidating" >Send</button>
                    </div>
                          <div  class="button-container">
          <a (click)="validateLater()" >Validate Later</a>
        </div>
                 </form>
                </div>
              </div>
            </div>`,
  providers: [UserService, AppState, RouteUtilService],
  directives: [FORM_DIRECTIVES, MD_INPUT_DIRECTIVES]
})

export class ValidationModal {
  localState = {
    isValidating: false,
    validationCode: "",
    error: "",
  };
  constructor(private appState: AppState, private userService: UserService, private routeUtilService: RouteUtilService ){
    this.userService = userService;
    this.routeUtilService = routeUtilService;
  }
  //Basically used to close out of the validation dialogue
  validateLater(){
    this.appState.set('validating', false); //becomes true if network calls are being made (to disable button)
  }

  //Sends the user entered validation code to API.
  sendCode(){
    this.localState.isValidating = true;
    console.log(this.localState.validationCode);
    this.userService.validate(this.appState.get('username'), this.localState.validationCode).subscribe(
      data => {
        //TODO: if validated successfully, LOGIN, SAVE JWT and REROUTE TO /TEEUPS
        // localStorage.setItem('jwt', data.json().id_token);
        // this.router.parent.navigateByUrl('/home');
        // return data;
        this.appState.set('isLoggedIn', true); //TODO: Remove this and make the application use JWT for session checks
        this.appState.set('validating', false);
        this.routeUtilService.routeTo('teeups');
        console.log("DATA", data);
      },
      error => {
        var e = JSON.parse(error.text());
        this.localState.error= e.message;
        this.localState.isValidating = false;
      });

  }
}
