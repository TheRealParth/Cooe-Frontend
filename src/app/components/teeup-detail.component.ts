import {Component, OnInit} from '@angular/core';
import {RouterLink, Router, RouteParams} from '@angular/router-deprecated';
import {TeeupService} from '../services/teeup.service.ts';
import {TeeupDetails} from '../services/teeup-details.ts';
import {MyStatus} from "./UI/my-status";
import {TeeupStatus} from "./UI/teeup-status";

let template = require('../static/teeupdetail.html');
@Component({
    selector: 'teeups',
    providers: [TeeupService],
    template: template,
    directives: [RouterLink, MyStatus, TeeupStatus],
})
//TODO: Make teeup load by ID of teeup provided.
//TODO: Add a child components for People, Conversation, and Game Plan

export class TeeupDetailComponent implements OnInit {
    id: number = -1;
    tud: TeeupDetails;
    teeupService: TeeupService;
    localState = {
      isMyStatusOpen: false,
    }
    constructor(teeupService: TeeupService, private router: Router, private routeParams: RouteParams){

      this.teeupService = teeupService;
      this.id = parseInt(routeParams.params['id']);
      if(this.id > -1){
        this.getTeeupDetails();
        console.dir(this.id);
      }
      else{
        console.dir("else: ", this.id);
        this.router.parent.navigate(['./Teeups'])
      }
    }

    toggleMyStatus(){
      this.localState.isMyStatusOpen = !(this.localState.isMyStatusOpen);
      console.log(this.localState.isMyStatusOpen);
    }
    getTeeupDetails(){
        this.teeupService.getTeeupById(this.id).then(teeupDetails => this.tud = teeupDetails);
    }
    ngOnInit(){


    }

}
