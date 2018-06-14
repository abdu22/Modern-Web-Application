import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-child',
  template: `
    <p>
      my-child works!
    </p>
    <ul>
    <p>List of names:<br></p>
    <li *ngFor="let name of names">{{name}}</li>
    </ul>
  `,
  styles: []
})
export class MyChildComponent implements OnInit {
 public names : string[];
  constructor() { 
    this.names = ['abdu','gizaw','eshetu'];
  }

  ngOnInit() {
  }

}
