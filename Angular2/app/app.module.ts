import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyChildComponent } from './my-child.component';
import { UpperDirective } from './upper.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyChildComponent,
    UpperDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
