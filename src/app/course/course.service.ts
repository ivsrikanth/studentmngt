import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  courseId: number;
  getCourses() { return COURSES; }
  saveCourses(form) {
    this.courseId = COURSES.length+1;
    COURSES.push({'courseId':+this.courseId,'courseTitle':form.courseTitle,'courseDesc':form.courseDesc});
  }
}
const COURSES = [
{'courseId':1,'courseTitle':'Angular 1','courseDesc':'Description about the course Angular 1. Topics that will be covered in this course'},
{'courseId':2,'courseTitle':'Angular 2','courseDesc':'Description about the course Angular 2. Topics that will be covered in this course'}
]
