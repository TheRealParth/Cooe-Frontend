import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {TeeupService} from '../services/teeup.service.ts';
import { Teeup } from '../services/teeup';
import { ProgressCircle } from './UI/progress-circle';
import {RouteUtilService} from "../services/route-util.service";

let template = require('../static/teeups.html');
let style = require('../static/css/override.css');
@Component({
	selector: 'teeups',
  styles: [style],
	providers: [TeeupService, RouteUtilService],
	template: template,
  directives: [ ProgressCircle],
})
//TODO: in the template include the user-image component.
//TODO: Implement api calls using teeups service to populate the teeups
export class TeeupsComponent {
	teeups: Teeup[] = [];
	constructor(private routeUtilService: RouteUtilService, private teeupService: TeeupService){
    this.routeUtilService = routeUtilService;
  }
	getTeeups(){
		this.teeupService.getTeeups().then(teeups => this.teeups = teeups);
	}
	ngOnInit() {
    this.getTeeups();
	}

}
