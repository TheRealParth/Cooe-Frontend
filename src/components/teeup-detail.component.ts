import {Component, OnInit} from '@angular/core';
import {RouterLink, RouteParams, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Routes, RouteSegment} from '@angular/router';
import {TeeupService} from '../services/teeup.service';
import {TeeupDetails} from '../services/teeup-details.ts';
@Component({
    selector: 'teeups',
    providers: [TeeupService],
    template: `
	<div id="bar1">
		<h3>X</h3>
		<h3>TeeUp</h3>
		<i class="fa fa-list"></i>		
		<i class="fa fa-user-plus"></i>
	</div>
	<div class="container">
		<div class="teeupHeader">
			<h2>Brainstorming Session</h2>
			<div class="halfContainer">
				<div class="col-md-6">
					<i class="fa fa-power-off"></i>
					<span>Planning</span>
				</div>
				<div class="verticalLine"></div>
				<div class="col-md-6">
					<i class="fa fa-arrow-right"></i>
					<span>I'm Going</span>
				</div>
			</div>
		</div>
		<div class="peopleBox">
			<div class="headerStrip">
				<span>PEOPLE</span>
				<span class="indicator2">
					<i class="fa fa-envelope"></i>
					<span>12</span>
				</span>					
				<span class="indicator1">
					<i class="fa fa-arrow-right"></i>
					<span>11</span>
				</span>
			
			</div>
			<div class="boxContent">
				<div class="avatarStrip">
					<img><img><img><img><img><img>
				</div>
				<div class="bottomStrip">
					<span id="weirdLeftThing">
						<span>ON WITH</span>
						<span class="bigger">12</span>
					</span>
					<span class="progressBar">
						<span class="progress"></span>
						<span class="progressRemaining">1 MORE NEEDED</span>
					</span>
				</div> 
			</div>
		</div>
		<div class="conversationBox">
			<div class="headerStrip">
				<span>CONVERSATION</span>
				<span class="indicator1">
					<i class="fa fa-exclamation-circle"></i>
					<span>4</span>
				</span>
				<div class="conversation">

					<div class="message fromUser">
						<div class="timestamp">JAN 14, 2012 4:41 PM</div>
						<div class="messageRow">
							<img>
							<div class="messageBody">
								<span class="messageInfo">
									<a class="messageUser">Rich</a>
									<p class="messageText"> about </p>
									<a class="messageWhere">Werblin Gym</a>
								</span>
								<span class="messageBodyText">Much better. I'm in.</span>
							</div>
						</div>
					</div>

					<div class="message update">
						<div class="timestamp">JAN 14, 2012 4:43 PM</div>
						<div class="messageRow">
							<i class="fa fa-arrow-right"></i>
							<a class="messageUser">Rich</a>
							<p class="messageText"> is going </p>
						</div>
					</div>	

					<div class="message update">
						<div class="timestamp">JAN 14, 2012 4:43 PM</div>
						<div class="messageRow">
							<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
							<a class="messageUser">Nate</a>
							<p class="messageText"> likes </p>
							<a class="messageWhere">Werblin Gym</a>
							<p class="messageText"> as </p>
							<p class="messageItem">WHERE</p>

						</div>
					</div>						

				</div>
			</div>
		</div>
		<div class="gamePlanBox">
			<div class="headerStrip">
				<span>GAME PLAN</span>
				<span class="indicator1">
					<i class="fa fa-exclamation-circle"></i>
					<span>3</span>
				</span>
			</div>
			<div class="gamePlans">
				<div class="gamePlan">
					<span class="gamePlanRow time">
						<i class="fa fa-clock-o"></i>
					</span>
					<span class="gamePlanBody">
						<div class="gamePlanTop">
							<p>Wednesday, Jan 18</p>
						</div>
						<div class="gamePlanBottom">
							<p>4:00 PM</p>
						</div>																	
					</span>
					<span class="gamePlanLikes">
						<span class="likesColumn">
							<i class="fa fa-thumbs-o-up"></i>
							<div>3</div>
						</span>
						<span class="likesColumn">
							<i class="fa fa-thumbs-o-down"></i>
							<div>0</div>
						</span>						
					</span>
				</div>

				<div class="gamePlan">
					<span class="gamePlanRow location">
						<i class="fa fa-map-marker"></i>
					</span>
					<span class="gamePlanBody">
						<div class="gamePlanTop">
							<p>Werblin Gym</p>
						</div>
						<div class="gamePlanBottom">
							<p>Busch Campus</p>
						</div>																	
					</span>
					<span class="gamePlanLikes">
						<span class="likesColumn">
							<i class="fa fa-thumbs-o-up"></i>
							<div>2</div>
						</span>
						<span class="likesColumn">
							<i class="fa fa-thumbs-o-down"></i>
							<div>1</div>
						</span>						
					</span>
				</div>

			</div>
		</div>		
		<div class="modifyRows">Modify Rows</div>

	</div>
	`,
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
