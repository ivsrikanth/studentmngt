import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from './course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course = [];
  constructor(
  private courseService: CourseService,
  private router: Router
  ) { }
  saveCourse(form){
   console.log(this.courseService.getCourses());
   this.courseService.saveCourses(form);
   this.router.navigate(['/']);
   console.log(this.courseService.getCourses());
  }
  cancelEdit(){
   console.log("In fun cancelEdit");
  }
}
