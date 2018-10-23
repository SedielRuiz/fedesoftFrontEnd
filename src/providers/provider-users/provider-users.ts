import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { PrincipalPage } from '../../pages/principal/principal';

export class Group {
  id: number;
  name: string;
  fragment: string;
  image: string;
  constructor(values: Object = {}) {
       Object.assign(this, values);
  }
}
/*
  Generated class for the ProviderUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderUsersProvider {
  data
  baseUrl:string="http://127.0.0.1:3000";
  constructor(public http: HttpClient) {
    this.data;
  }
  getUsers(){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
      
    let apiUrl=localStorage.getItem("apiUrl");
    return this.http.get(this.baseUrl+'/users',options);
  }
  tokenUser(json){
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
      const options = { headers: headers };
      let jsonA = JSON.stringify(json);
      return this.http.post(this.baseUrl+'/user_token', jsonA, options)
  }
  postUser(json){
    let headers = new HttpHeaders(
    {
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    let jsonA = JSON.stringify(json);
    return this.http.post(this.baseUrl+'/users', jsonA, options)
  }
}
