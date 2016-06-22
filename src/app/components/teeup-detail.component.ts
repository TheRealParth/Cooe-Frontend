import {Component, OnInit} from '@angular/core';
import {RouterLink, Route, RouteParams} from '@angular/router-deprecated';
import {Routes, RouteSegment} from '@angular/router';
import {TeeupService} from '../services/teeup.service.ts';
import {TeeupDetails} from '../services/teeup-details.ts';

let template = require('../static/teeupdetail.html');
let styles = require('../static/postlogin.css');
@Component({
    selector: 'teeups',
    providers: [TeeupService],
    template: template,
    directives: [RouterLink],
    styles: [styles]
})

export class TeeupDetailComponent {
    id: number;
    //name default values
    tud: TeeupDetails = {
      id: 0,
      name: "...",
      decision: 0,
      going: 0,
      msgCount: 0,
      msgLikeNumber: 0,
      wtfIsThis: 0,
      date: "...",
      location: "...",
      time: '...',
      conversation: [],
      gamePlan: {
        when: {
          time: "...",
          day: "...",
          thumbs: [0, 0],
        },
        where: {
          locationName: "...",
          locationPlace: "...",
          thumbs: [0, 0],
        }
      }
    };

    teeupService: TeeupService;
    constructor(teeupService: TeeupService,  private routeParams: RouteParams){
      this.teeupService = teeupService;
      this.id = routeParams.get['id'];
    }
    getTeeupDetails(){
        this.teeupService.getTeeupById(this.id).then(teeupDetails => this.tud = teeupDetails);
    }
    ngOnInit(){
      this.getTeeupDetails();
    }
}
