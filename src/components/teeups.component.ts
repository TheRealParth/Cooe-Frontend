import {Component, OnInit} from '@angular/core';
import {RouterLink, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {TeeupService} from '../services/teeup.service';
import { Teeup } from '../services/teeup';

@Component({
	selector: 'teeups',
	providers: [TeeupService],
	template: `
	<div id="bar1">
		<h3>My TeeUps</h3>
		<i>+</i>
	</div>
	<div id="bar2">
		<div class="teeupCategory">
			<div class="teeupCategoryHeader">
				<p>Currently Coordinating (<span>3</span>):</p>
				<i class="fa fa-map"></i>
			</div>
			<div class="teeups">
				<div *ngFor="#teeup of teeups" class="teeup">
					<div class="teeupTop">
						<span class="avatar"></span>
						<div class="teeupContent">
							<div class="teeupRow" id="one">
								<i class="fa fa-power-off"></i>
								<a [routerLink]="['/Teeup', {id: teeup.id}]">{{teeup.name}}</a>
							</div>
							<div class="teeupRow" id="two">
								<i class="fa fa-question"></i>
								<p>{{teeup.decision}}</p>
							</div>
							<div class="teeupRow" id="three">
								<span>
									<i class="fa fa-arrow-right"></i>
									<p>{{teeup.going}}</p>
								</span>
								<span>
									<i class="fa fa-envelope"></i>
									<p>{{teeup.msgCount}}</p>
								</span>
								<span>
									<i class="fa fa-comments-o"></i>
									<p>{{teeup.msgLikeNumber}}</p>
								</span>
								<span>
									<i class="fa fa-map"></i>
									<p>{{teeup.wtfIsThis}}</p>
								</span>
								<span>
									<i class="fa fa-refresh"></i>
									<p>{{teeup.time}}</p>
								</span>																																
							</div>														
						</div>
					</div>
					<div class="bottomRow">
						<div class="half">
							<i class="fa fa-clock-o"></i>
							<p>{{teeup.date}}</p>
						</div>
						<div class="verticalLine"></div>
						<div class="half">
							<i class="fa fa-map-marker"></i>
							<p>{{teeup.location}}</p>
						</div>						
					</div>
				</div>
																			
			</div>
		</div>
	</div>
	`,
        directives: [RouterLink, ROUTER_DIRECTIVES],

})

export class TeeupsComponent implements OnInit {
	teeups: Teeup[];
	constructor(private teeupService: TeeupService){

	}
	getTeeups(){
		this.teeupService.getTeeups().then(teeups => this.teeups = teeups);
	}
	ngOnInit() {
		this.getTeeups();
	}

}
