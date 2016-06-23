import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {TeeupService} from '../services/teeup.service.ts';
import { Teeup } from '../services/teeup';
import { ProgressCircle } from './UI/progress-circle';

let template = require('../static/teeups.html');
let style = require('../static/css/override.css');
@Component({
	selector: 'teeups',
  styles: [style],
	providers: [TeeupService],
	template: template,
  directives: [ ProgressCircle],
})

export class TeeupsComponent {
	teeups: Teeup[] = [];
  router: Router;
	constructor(private rtr: Router, private teeupService: TeeupService){
    this.router = rtr;
  }
	getTeeups(){
		this.teeupService.getTeeups().then(teeups => this.teeups = teeups);
	}
  routeTo(route: string){
    var newRoute = ['./' + route];
    this.router.parent.navigateByInstruction(this.router.parent.generate(newRoute));
  }
	ngOnInit() {
    this.getTeeups();
	}

}
