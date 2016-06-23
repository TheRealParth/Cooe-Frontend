import {Component} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';
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
  directives: [RouterLink, ProgressCircle],
})

export class TeeupsComponent {
	teeups: Teeup[] = [];
	constructor(private teeupService: TeeupService){
  }
	getTeeups(){
		this.teeupService.getTeeups().then(teeups => this.teeups = teeups);
	}
	ngOnInit() {
    this.getTeeups();
	}

}
