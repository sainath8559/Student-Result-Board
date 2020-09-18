import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {results} from './files';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _url: string = "/assets/data.json";

  constructor(private http:HttpClient) { }
  getdata():Observable<results[]>{
    return  this.http.get<results[]>(this._url);
    
    }

}
