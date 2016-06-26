import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'teeup-status',
  template: `
                  <div class="teeup_status" [class.off]="localState.disabled" (mouseleave)="mouseOutHandler()">
                    <a class="status_button dropdown secondary small"  data-state="planning" (click)="toggleMyStatus()" ><div class="bats bats-planning"></div><div class="text"> Planning</div></a>

                    <ul id="teeup_status_dropdown" *ngIf="localState.isMyStatusOpen" (click)="toggleMyStatus()" class="fx-dropdown open" data-dropdown-content="" style="position: absolute; top: 80px; left: -99999px;">
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
  @Input() public default: any;
  @Input() disabled: boolean = false;
  localState = {
    isMyStatusOpen: false,
    disabled: false,
  };
  constructor(){

  }
  mouseOutHandler(){
    if(this.localState.isMyStatusOpen)
      this.localState.isMyStatusOpen = false;
    console.log("hiiiii")
  }
  toggleMyStatus(){
    console.log(this.localState.isMyStatusOpen)
    this.localState.isMyStatusOpen = !(this.localState.isMyStatusOpen);
  }
  ngOnInit(){
    this.localState.disabled = this.disabled;
  }
}
