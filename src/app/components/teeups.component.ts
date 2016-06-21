import {Component} from '@angular/core';
import {RouterLink, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {TeeupService} from '../services/teeup.service.ts';
import { Teeup } from '../services/teeup';

let styles = require('../static/postlogin.css');
let template = require('../static/teeups.html');
@Component({
	selector: 'teeups',
	providers: [TeeupService],
  styles: [styles],
	template: template,
  directives: [RouterLink],
})

export class TeeupsComponent {
	teeups: Teeup[];
	constructor(private teeupService: TeeupService){}

	getTeeups(){
		this.teeupService.getTeeups().then(teeups => this.teeups = teeups);
	}
	ngOnInit() {
		this.getTeeups();
	}

}
