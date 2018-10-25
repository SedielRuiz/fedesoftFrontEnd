import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the RatingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RatingsProvider {
  baseUrl:string="https://preve-ya.herokuapp.com";
  constructor(public http: HttpClient) {
    console.log('Hello RatingsProvider Provider');
  }

}
