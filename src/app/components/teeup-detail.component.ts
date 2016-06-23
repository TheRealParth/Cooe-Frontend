import {Component, OnInit} from '@angular/core';
import {RouterLink, Router, RouteParams} from '@angular/router-deprecated';
import {TeeupService} from '../services/teeup.service.ts';
import {TeeupDetails} from '../services/teeup-details.ts';
import {NavbarComponent} from './navbar.component';

let template = require('../static/teeupdetail.html');
let styles = require('../../assets/css/main.css');
@Component({
    selector: 'teeups',
    providers: [TeeupService],
    template: template,
    directives: [RouterLink],
    styles: [styles]
})

export class TeeupDetailComponent implements OnInit {
    id: number = -1;
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

    constructor(teeupService: TeeupService, private router: Router, private routeParams: RouteParams){
      this.teeupService = teeupService;
      this.id = parseInt(routeParams.params['id']);
    }
    getTeeupDetails(){
        this.teeupService.getTeeupById(this.id).then(teeupDetails => this.tud = teeupDetails);
    }
    ngOnInit(){
      if(this.id > -1){
        this.getTeeupDetails();
        console.dir(this.id);
      }
      else{
        console.dir("else: ", this.id);
        this.router.parent.navigate(['./Teeups'])
      }

    }

}
