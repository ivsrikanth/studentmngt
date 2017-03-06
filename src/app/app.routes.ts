import { Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CourseListComponent
  },
  {
    path: 'add-course',
    component: CourseComponent
  },
  {
    path: 'students',
    component: StudentListComponent
  },
  {
    path: 'add-student',
    component: StudentComponent
  },
  {
    path: 'edit-student/:id',
    component: StudentComponent
  }
];
