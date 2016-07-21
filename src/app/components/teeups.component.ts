import {Component, ElementRef} from '@angular/core';
import {TeeupService} from '../services/teeup.service.ts';
import { Teeup } from '../services/teeup';
import { ProgressCircle } from './UI/progress-circle';
import {RouteUtilService} from "../services/route-util.service";
declare var jQuery:any;

let template = require('../static/teeups.html');
@Component({
	selector: 'teeups',
	providers: [TeeupService, RouteUtilService],
	template: template,
  directives: [ ProgressCircle],
})
//TODO: in the template include the user-image component.
//TODO: Implement api calls using teeups service to populate the teeups
export class TeeupsComponent {
	teeups: Teeup[] = [];
	constructor(private elementRef: ElementRef, private routeUtilService: RouteUtilService, private teeupService: TeeupService){
    this.routeUtilService = routeUtilService;
    this.elementRef = elementRef;
  }
	getTeeups(){
		this.teeupService.getTeeups().then(teeups => this.teeups = teeups);
	}
	ngOnInit() {
    this.getTeeups();
    console.log(this.elementRef.nativeElement);
    jQuery(this.elementRef.nativeElement).tabs();

	}

}
