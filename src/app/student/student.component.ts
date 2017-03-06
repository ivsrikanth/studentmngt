import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../course/course.service';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentId:number = 0;
  studentName:string = '';
  studentCourse:string = '';
  courses: any;
  students: any;
  moveStudent: any;
  studentDetails: any;
  constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.moveStudent = this.route.snapshot.params;
    // check if we have id passed in the parameters
    if(typeof this.moveStudent.id !== 'undefined'){
      this.studentDetails = this.studentService.findStudent(+this.moveStudent.id);
      this.studentId = this.studentDetails[0].studentId;
      this.studentName = this.studentDetails[0].studentName;
      this.studentCourse = this.studentDetails[0].studentCourse;
      console.log(this.studentDetails,this.studentDetails[0].studentId);
    }
    this.courses = this.courseService.getCourses();
  }

  saveStudent(formvalues){
    // we are adding a new student, call a service and push to constant
    this.studentService.saveStudent(formvalues);
    this.router.navigate(['/students']);
  }

}
