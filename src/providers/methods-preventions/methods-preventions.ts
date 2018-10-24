import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the MethodsPreventionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MethodsPreventionsProvider {
  baseUrl:string="http://127.0.0.1:3000";
  constructor(public http: HttpClient) {
    console.log('Hello MethodsPreventionsProvider Provider');
  }
  getMethodsPreventions(){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
      
    let apiUrl=localStorage.getItem("apiUrl");
    return this.http.get(this.baseUrl+'/methods_preventions/',options);
  }
  postMethodPrevention(json){
    let headers = new HttpHeaders(
    {
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    let jsonA = JSON.stringify(json);
    return this.http.post(this.baseUrl+'/methods_preventions', jsonA, options)
  }
  putMethodPrevention(json){
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
      const options = { headers: headers };
      let jsonA = JSON.stringify(json);
      return this.http.put(this.baseUrl+'/methods_preventions', jsonA, options)
  }
}
