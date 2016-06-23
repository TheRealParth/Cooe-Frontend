import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-status',
  template: `<div class="my_status" [class.off]="localState.disabled" (mouseleave)="mouseOutHandler()" >
                    <a class="status_button dropdown secondary small" (click)="toggleMyStatus()"  ><div class="bats bats-invited"></div><div class="text"> Invited</div></a>
                    <ul id="my_status_dropdown" (click)="toggleMyStatus()" 
                     *ngIf="localState.isMyStatusOpen" class="fx-dropdown" style="position: absolute; top: 80px; left: 182.5px;">
                      <li><a data-state="maybe"><div class="bats bats-mightgo"></div><div class="text"> Might Go</div></a></li>
                      <li><a data-state="going"><div class="bats bats-going"></div><div class="text"> I'm Going</div></a></li>
                      <li><a data-state="interested"><div class="bats bats-interested"></div><div class="text"> Interested</div></a></li>
                      <li><a data-state="notgoing"><div class="bats bats-notgoing"></div><div class="text"> Not Going</div></a></li>
                      <li style="display: none;"><a data-state="invited"><div class="bats bats-invited"></div><div class="text"> Invited</div></a></li>
                      <!--
                        <li style="display: none;"><a href="#" class="" data-state="backedout"> Back Out</a></li>
                        <li style="display: none;"><a href="#" class="" data-state="onmyway"> On my way</a></li>
                        <li style="display: none;"><a href="#" class="" data-state="arrived"> Arrived</a></li>
                        <li style="display: none;"><a href="#" class="" data-state="invited"> Invited</a></li>
                       -->
                    </ul>
                  </div>
                  `
})

export class MyStatus implements OnInit {
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
