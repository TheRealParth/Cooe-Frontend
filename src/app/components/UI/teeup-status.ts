import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'teeup-status',
  template: `
                  <div class="teeup_status" [class.off]="localState.disabled" (mouseleave)="mouseOutHandler()">
                    <a class="status_button dropdown secondary small"  data-state="planning" (click)="toggleTeeupStatus()" ><div class="bats bats-planning"></div><div class="text"> Planning</div></a>

                    <ul id="teeup_status_dropdown" *ngIf="localState.isTeeupStatusOpen" (click)="toggleTeeupStatus()" class="fx-dropdown open" data-dropdown-content="" style="position: absolute; top: 80px; left: -99999px;">
                      <li style="display: none;"><a href="#" data-state="planning"><div class="bats bats-planning"></div><div class="text"> Planning</div></a></li>
                      <li><a href="#" data-state="on"><div class="bats bats-on"></div><div class="text"> It's On</div></a></li>
                      <li><a href="#" data-state="cancelled"><div class="bats bats-cancelled"></div><div class="text"> Cancelled</div></a></li>
                      <li style="display: none;"><a href="#" data-state="happening">Happening</a></li>
                      <li style="display: none;"><a href="#" data-state="ended">It's Ended</a></li>
                    </ul>
                    </div>
                  `
})

export class TeeupStatus implements OnInit {
  @Input() public default: any; //Default initialized value of status
  @Input() disabled: boolean = false; //Value responsible for enabling/disabling the dropdown
  localState = {
    isTeeupStatusOpen: false,
    disabled: false,
  };
  constructor(){

  }
  //On mouseout, close the status dropdown
  mouseOutHandler(){
    if(this.localState.isTeeupStatusOpen)
      this.localState.isTeeupStatusOpen = false;
    console.log("hiiiii")
  }
  //toggles the status dropdown
  toggleTeeupStatus(){
    console.log(this.localState.isTeeupStatusOpen)
    this.localState.isTeeupStatusOpen = !(this.localState.isTeeupStatusOpen);
  }
  ngOnInit(){
    this.localState.disabled = this.disabled;
  }
}
