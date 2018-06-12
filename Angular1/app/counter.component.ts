import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter works!
    </p>
    <input (input) = "onInput($event)">
    <hr>
    <button (click) = "onMinus()">-</button>
    <p>{{ counterValue }}<p>
    <button (click) = "onPlus()">+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counterValue=0
  constructor() { }

  ngOnInit() {
  }
  onMinus(){
    this.counterValue--;
  }
  onPlus(){
    this.counterValue++;
  }
  onInput(event : Event){
   // this.counterValue = (event.target);
  }
}
