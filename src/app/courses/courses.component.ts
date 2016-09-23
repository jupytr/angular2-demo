import {Component} from '@angular/core'
import {CoursesService} from "./courses.service";

@Component({
  selector: 'courses',
  template: `
    <h3>{{title}}</h3>
    <input type="text" autoGrow/>
    <ul>
      <li *ngFor='let course of courses'>{{course}}</li>
    </ul>
  `
})
export class CoursesComponent {
  courses: string[];
  title = 'Title for the courses component';

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }
}
