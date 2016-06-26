import { MdProgressCircle } from '@angular2-material/progress-circle';
import {Component} from '@angular/core';
import { Router} from '@angular/router-deprecated';

let template = require('../static/createteeup.html');
let style = require('../static/css/createteeup.css');
@Component ({
  selector: 'create-teeup',
  template: template,
  styles: [style],
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
