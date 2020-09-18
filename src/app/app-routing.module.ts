import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentResultBoardComponent } from './student-result-board/student-result-board.component';
import { StudentAdmissionFormComponent } from './student-admission-form/student-admission-form.component';


const routes: Routes = [

  { path:"StudentResultBoard", component: StudentResultBoardComponent },
  {path :"StudentAdmissionForm", component: StudentAdmissionFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
