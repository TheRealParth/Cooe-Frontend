import { Injectable } from '@angular/core';
import {Router} from '@angular/router-deprecated';
//This server basically shortens the whole route navation line.
//Add all routing related function here though.
@Injectable()
export class RouteUtilService {
  constructor(private router: Router) {
    this.router = router;
  }
  routeTo(route: string){
    var newRoute = ['./' + route];
    console.log("routing to " + newRoute)
    console.log("AKA " + this.router.parent.generate(newRoute))
    this.router.parent.navigateByInstruction(this.router.parent.generate(newRoute));
  }
}
