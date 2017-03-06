import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any;
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
