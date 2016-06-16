import {Component, OnInit} from '@angular/core';
import {RouterLink, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import 'rxjs/Rx';

@Component({
    selector: 'profile',
    template: `
	<span class="logo">Profile</span>
	`,
    directives: [RouterLink, ROUTER_DIRECTIVES]
})

export class ProfileComponent { }
