import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {TeeupService} from '../services/teeup.service.ts';
import { Teeup } from '../services/teeup';
import { ProgressCircle } from './UI/progress-circle';
import {RouteUtilService} from "../services/route-util.service";

let template = require('../static/test.html');
let style = require('../static/css/override.css');
@Component({
  template: template,
  styles: [style],
})
//TODO: in the template include the user-image component.
//TODO: Implement api calls using teeups service to populate the teeups
export class Test {

}
