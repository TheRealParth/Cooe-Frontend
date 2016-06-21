import {Component, OnInit} from '@angular/core';
import {RouterLink, RouteParams, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Routes, RouteSegment} from '@angular/router';
import {TeeupService} from '../services/teeup.service.ts';
import {TeeupDetails} from '../services/teeup-details.ts';

let template = require('../static/teeupdetail.html');
// let styles = require('../static/teeupdetail.css');
@Component({
    selector: 'teeups',
    providers: [TeeupService],
    template: template,
    directives: [RouterLink, ROUTER_DIRECTIVES]
})

export class TeeupDetailComponent implements OnInit {
    id: number;
    tud: TeeupDetails;
    teeupService: TeeupService;
    routerOnActivate(curr: RouteSegment) {
      this.id = parseInt(curr.getParam('id'));
    }
    getTeeupDetails(){
        this.teeupService.getTeeupById(this.id).then(teeupDetails => this.tud = teeupDetails);
    }
    ngOnInit(){
      this.getTeeupDetails();
    }
}
