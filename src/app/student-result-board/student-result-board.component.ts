import { Component, OnInit } from '@angular/core';
import {ResultsService} from '../results.service';

@Component({
  selector: 'app-student-result-board',
  templateUrl: './student-result-board.component.html',
  styleUrls: ['./student-result-board.component.css']
})
export class StudentResultBoardComponent implements OnInit {


  ngOnInit() {
  }
  public results={};
  constructor(private myfirstservice:ResultsService) 
  {this.myfirstservice.getdata()
    .subscribe(data => this.results = data);
  } }

