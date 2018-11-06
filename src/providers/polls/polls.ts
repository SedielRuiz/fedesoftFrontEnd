import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the PollsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PollsProvider {
  baseUrl:string="https://preve-ya.herokuapp.com";
  jwt:string = localStorage.getItem("jwt");
  headers:HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + this.jwt
  });
  
  constructor(public http: HttpClient) {
  }
  getPool( id:number ) {
    const options = {headers: this.headers};
    console.warn('options >>', options);
    return this.http.get(
      this.baseUrl + '/polls/' + id, options
    );
  }
}
