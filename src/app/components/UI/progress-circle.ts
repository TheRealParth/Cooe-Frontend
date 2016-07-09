import { MdProgressCircle } from '@angular2-material/progress-circle';
import {Component} from '@angular/core'
@Component ({
  selector: 'progress-circle',
  template: `<div class="progress-circle-container" >
                  <md-progress-circle mode="indeterminate" ></md-progress-circle>
                </div>`,
  directives: [MdProgressCircle],
})
export class ProgressCircle {
  //This is just a loading progress circle
  //TODO: Replace with Coo-e Loading animation
}
