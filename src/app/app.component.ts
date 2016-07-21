import {Component} from '@angular/core';
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
import {ValidationModal} from "./components/UI/validation-modal";
import {RouteUtilService} from "./services/route-util.service";
import {AppState} from "./app.service";

import { TabbedSearch } from "./components/ui/tabbed-search";
import {Test} from "./components/test";

@Component({
  // HTML selector for this component
  selector: 'app',
  template: `
   
   <validation-modal *ngIf="appState.get().validating" ></validation-modal>
   <navbar></navbar>

      <router-awesome> 
      </router-awesome>
  `,
  directives: [LoggedInRouterOutlet, ValidationModal, NavbarComponent, ProgressCircle, ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES],
  providers: [RouteUtilService, AppState],
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
  { path: '/test', component: Test, name: 'Test' },
  { path: '/create-teeup', component: CreateTeeupComponent, name: 'CreateTeeup' }
])

export class AppComponent {
  router: Router;
  constructor( router: Router, private appState: AppState) {
    this.router = router;
    this.appState = appState;
    this.appState.set('validating', false);
  }

}
