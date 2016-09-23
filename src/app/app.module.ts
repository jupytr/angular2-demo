import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CoursesComponent} from "./courses/courses.component";
import {CoursesService} from "./courses/courses.service";
import {AutoGrowDirective} from "./courses/courses.auto-grow-directive";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AutoGrowDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
