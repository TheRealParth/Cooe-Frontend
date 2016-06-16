import {Component} from '@angular/core';
import { RouteConfig, Router} from '@angular/router-deprecated';
import { NgIf } from '@angular/common';
import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {HomeComponent} from './components/home.component';
import {LoginComponent} from './components/login.component';
import {ProfileComponent} from './components/profile.component';
// import {Signup} from './components/signup.component';

@Component({
  // HTML selector for this component
  selector: 'app',
  template: `

      <router-awesome> 
</router-awesome>
  `,
  directives: [LoggedInRouterOutlet]
})

@RouteConfig([
  { path: '/', redirectTo: ['/Home'], useAsDefault: true},
  { path: '/home', component: HomeComponent, name: 'Home' },
  { path: '/login', component: LoginComponent, name: 'Login' },
  { path: '/profile', component: ProfileComponent, name: 'Profile' },
  // { path: '/signup', component: Signup, as: 'Signup' }
])

export class AppComponent {

  constructor() {}
}
