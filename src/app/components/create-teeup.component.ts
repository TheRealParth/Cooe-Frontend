import { MdProgressCircle } from '@angular2-material/progress-circle';
import { Component } from '@angular/core';
import { Router} from '@angular/router-deprecated';
import { RouteUtilService } from "../services/route-util.service";

let template = require('../static/createteeup.html');
let style = require('../static/css/createteeup.css');
@Component ({
  selector: 'create-teeup',
  template: template,
  styles: [style],
  directives: [MdProgressCircle],
  providers: [RouteUtilService]
})
export class CreateTeeupComponent {
  router: Router;

 constructor(private routeUtilService: RouteUtilService, private rtr: Router){
   this.router = rtr;
   this.routeUtilService = routeUtilService;
 }
  //TODO: Create an auto complete component and insert within here.
  //TODO: make an API call to retrieve contacts on init
}
