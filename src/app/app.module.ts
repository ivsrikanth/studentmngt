import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';

import { CourseService } from './course/course.service';
import { StudentService } from './student/student.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    StudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CourseService, StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
