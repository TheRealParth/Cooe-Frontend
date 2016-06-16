import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, AsyncRoute, Router}	 from '@angular/router-deprecated';

import {HomeComponent} from '../components/home.component.ts'
import {TeeupsComponent} from '../components/teeups.component.ts'
import {TeeupDetailComponent} from '../components/teeup-detail.component.ts'
import {ProfileComponent} from "../components/profile.component.ts";

@Component({
	selector: 'App',
	template: `
	<div class="appOuter">
		<div class="appInner">
			<ul id="topMenu">
				<a [routerLink]="['Home']" class="menuItem fa fa-bullseye"></a>
				<li class="menuItem fa fa-info-circle"><span>2</span></li>
				<li class="menuItem fa fa-book"></li>
				<li class="menuItem fa fa-calendar"></li>
				<li class="menuItem">5</li>				
			</ul>
			<div class="body">
				<router-outlet></router-outlet>
			</div>
		</div>	
	</div>`,
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
	{
	path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
	},
	{
	path: '/teeups',
    name: 'Teeups',
    component: TeeupsComponent,
	},
	{
	path: '/profile',
	name: 'Profile',
	component: ProfileComponent,
	},
	{
	path: '/teeup/:id',
    name: 'Teeup',
    component: TeeupDetailComponent,
	}
])

export class AppComponent { }
