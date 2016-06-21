import {Component} from '@angular/core';
import { RouteConfig, Router} from '@angular/router-deprecated';
import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {HomeComponent} from './components/home.component';
import {LoginComponent} from './components/login.component';
import {ProfileComponent} from './components/profile.component';
import {TeeupsComponent} from './components/teeups.component';

import { MD_INPUT_DIRECTIVES, MdInput } from '@angular2-material/input';

import { MdProgressCircle, MdSpinner } from '@angular2-material/progress-circle';
// import {Signup} from './components/signup.component';

@Component({
  // HTML selector for this component
  selector: 'app',
  template: `
<!--<md-progress-circle mode="indeterminate" color="primary" *ngIf="isLoading"></md-progress-circle>-->
   
      <router-awesome> 
</router-awesome>
  `,
  directives: [LoggedInRouterOutlet, MD_INPUT_DIRECTIVES]
})

@RouteConfig([
  { path: '/', redirectTo: ['/Home'], useAsDefault: true},
  { path: '/home', component: HomeComponent, name: 'Home' },
  { path: '/login', component: LoginComponent, name: 'Login' },
  { path: '/profile', component: ProfileComponent, name: 'Profile' },
  { path: '/teeups', component: TeeupsComponent, name: 'Teeups' }
  // { path: '/signup', component: Signup, as: 'Signup' }
])

export class AppComponent{
  ngOnInit() {
  }
  constructor() {

  }
}
