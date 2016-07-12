import { Component } from '@angular/core';

@Component({
  template: `<div id="tabbed-search" style="background-color: white">
              <div style="display: inline-block; width: 100%;">
                <ul *ngFor="let item of localState.selected">
                  <li><a (click)="removeItem(item)">X</a><div>{{item}}</div></li>
                </ul>
                <input type="text" (keyup)="handleKeypress($event)" placeholder="Search stuff" width="50px">
              </div>
              
              <div *ngIf="localState.noResults">No Results</div>
              <div *ngIf="localState.showResults">
              <ul *ngFor="let result of localState.results">
                <li (click)="handleClick(result)">{{result}}</li>
              </ul>
              </div>
            </div>`,
})
export class TabbedSearch {
  localState = {
    showResults: false,
    noResults: false,
    pool: ['one', 'two', 'three'],
    results: [],
    selected: [],
  };
  constructor(){
  }
  removeItem(item: string){
    this.localState.selected.splice(this.localState.selected.indexOf(item), 1)
    this.localState.results.push(item);
  }
  handleClick(item: string){
    this.localState.results.splice(this.localState.results.indexOf(item), 1)
    this.localState.selected.push(item);
  }
  handleKeypress(event) {
    if (event.target.value.length > 2) {
      this.getResults(event.target.value);
      if (this.localState.results.length) {

        this.localState.showResults = true;
      } else {
        this.localState.noResults = true;
      }
    } else {
      this.localState.showResults = false;
      this.localState.noResults = false;

    }
  }
  getResults(input: string){
    this.localState.results = [];
    for(var i = 0; i<this.localState.pool.length; i++){
      if(this.localState.pool[i].indexOf(input) > -1){
        if(!(this.localState.selected.indexOf(input) > -1))
        this.localState.results.push(this.localState.pool[i]);
      }
    }
  }

}
