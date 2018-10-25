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
  baseUrl:string="https://preve-ya.herokuapp.com";
  constructor(public http: HttpClient) {
  }
  getUsers(id){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
      
    let apiUrl=localStorage.getItem("apiUrl");
    return this.http.get(this.baseUrl+'/users/'+id,options);
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
  putUser(json){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
    let jsonA = JSON.stringify(json);
    return this.http.put(this.baseUrl+'/users/'+json["id"], jsonA, options)
  }
}
