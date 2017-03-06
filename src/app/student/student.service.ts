import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  getStudents() { return STUDENTS; }
  saveStudent(form) {
    // if student id is zero means we are adding new student
    if(form.studentId === 0){
     STUDENTS.push({'studentId':STUDENTS.length+1,'studentName':form.studentName,'studentCourse':form.studentCourse});
    }else{
    // we need to update object
     STUDENTS.map(student => {
      if(student.studentId === form.studentId){
        student.studentName = form.studentName;
        student.studentCourse = form.studentCourse;
      }
     });
    }

  }
  findStudent(studentid) {
    return STUDENTS.filter(student => student.studentId === studentid );
  }
}
const STUDENTS = [
{'studentId':1,'studentName':'John Doe','studentCourse':'1'},
{'studentId':2,'studentName':'John Smith','studentCourse':'2'}
]
