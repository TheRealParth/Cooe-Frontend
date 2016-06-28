import {Component, Query, QueryList, ElementRef} from '@angular/core';
import { RouteConfig, Router,  ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {HomeComponent} from './components/home.component';
import {LoginComponent} from './components/auth/login.component.ts';
import {ProfileComponent} from './components/profile.component';
import {TeeupsComponent} from './components/teeups.component';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

import {TeeupDetailComponent} from "./components/teeup-detail.component";
import {NavbarComponent} from "./components/navbar.component";
import {ProgressCircle} from "./components/UI/progress-circle";
import {SignUpComponent} from "./components/auth/signup.component";
import {ForgotComponent} from "./components/auth/forgot.component";
import {CreateTeeupComponent} from "./components/create-teeup.component";

@Component({
  // HTML selector for this component
  selector: 'app',
  template: `
   <navbar></navbar>
   <div class="row">
  <div id="overlayError" class="small-10 columns small-centered alert-box alert" data-alert="" style="display: none;">
    <div class="textHere"><strong>Error</strong> goes here</div>
    <!-- <a href="#" class="close">&times;</a> -->
  </div>
</div>
      <router-awesome> 
      </router-awesome>
  `,
  directives: [LoggedInRouterOutlet, NavbarComponent, ProgressCircle, ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES],
})

@RouteConfig([
  { path: '/', redirectTo: ['/Home'], useAsDefault: true},
  { path: '/home', component: HomeComponent, name: 'Home' },
  { path: '/login', component: LoginComponent, name: 'Login' },
  { path: '/profile', component: ProfileComponent, name: 'Profile' },
  { path: '/signup', component: SignUpComponent, name: 'Signup' },
  { path: '/forgot', component: ForgotComponent, name: 'Forgot' },
  { path: '/teeups', component: TeeupsComponent, name: 'Teeups' },
  { path: '/teeup', component: TeeupDetailComponent, name: 'Teeup' },
  { path: '/create-teeup', component: CreateTeeupComponent, name: 'CreateTeeup' }
])

export class AppComponent {
  isLoading: boolean = true;
  els: QueryList<ElementRef>;
  router: Router;
  constructor(@Query('login', {descendants: false}) els:QueryList<ElementRef>, router: Router) {
    this.els = els;
    this.router = router;
  }
  ngAfterContentInit(){
    console.log("done");
  }

}
