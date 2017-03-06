import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/course.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses : any;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
      this.courses = this.courseService.getCourses();
      console.log(this.courses);
  }

}
