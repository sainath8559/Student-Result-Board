import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { StudentResultBoardComponent } from './student-result-board/student-result-board.component';
import { StudentAdmissionFormComponent } from './student-admission-form/student-admission-form.component';
import {ResultsService} from './results.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentResultBoardComponent,
    StudentAdmissionFormComponent,
  
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
