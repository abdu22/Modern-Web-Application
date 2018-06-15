import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from "@angular/forms";
import { Observable } from "rxjs";
@Component({
  selector: 'data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
        'name': ['Asaad', [Validators.required]],
        'email': ['abdu@gmail.com',[Validators.required]],
        'post' : [this.exampleValidator]
      });
   }
   onSubmit() {
    console.log(this.myForm);
  }
  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {example: true};
    }
    return null;
  }
}
