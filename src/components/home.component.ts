import {Component} from '@angular/core';
import {RouterLink, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
	selector: 'home',
	template: `
	<span class="logo">COO-e</span>
	<ul class="menu">
		<a [routerLink]="['/Teeups']" class="menuItem"><i class="fa fa-bullseye"></i><p>My TeeUps</p></a>
		<a [routerLink]="['/Profile']" class="menuItem"><i class="fa fa-user"></i><p>Profile</p></a>
		<a class="menuItem"><i class="fa fa-book"></i><p>Contacts</p></a>
		<a class="menuItem"><i class="fa fa-calendar"></i><p>Calendar</p></a>
		<a class="menuItem"><i class="fa fa-cog"></i><p>Settings</p></a>
		<a class="menuItem"><i class="fa fa-envelope-o"></i><p>Send Feedback</p></a>
		<a class="menuItem"><i class="fa fa-info-circle"></i><p>Tour</p></a>
	</ul>
	`,
        directives: [RouterLink, ROUTER_DIRECTIVES]
})

export class HomeComponent { }
