import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the ForumsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ForumsProvider {
  baseUrl:string="https://preve-ya.herokuapp.com";
  constructor(public http: HttpClient) {
  }
  getForums(){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
    return this.http.get(this.baseUrl+'/forums',options);
  }
}
