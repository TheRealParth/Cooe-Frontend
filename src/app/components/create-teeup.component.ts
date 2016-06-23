import { MdProgressCircle } from '@angular2-material/progress-circle';
import {Component} from '@angular/core';
import { Router} from '@angular/router-deprecated';

let template = require('../static/createteeup.html');

@Component ({
  selector: 'create-teeup',
  template: template,
  directives: [MdProgressCircle],
})
export class CreateTeeupComponent {
  router: Router;

 constructor(private rtr: Router){
   this.router = rtr;
 }

  routeTo(route: string){
    var newRoute = ['./' + route];
    this.router.parent.navigateByInstruction(this.router.parent.generate(newRoute));
  }
}
