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
  signIn(email){
    let jwt=localStorage.getItem("jwt");
    let headersSign = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const optionsSignIn = { headers: headersSign };
    return this.http.get(this.baseUrl+'/signIn/'+email, optionsSignIn);
  }
  getUsers(id){
    let jwt=localStorage.getItem("jwt");
    let headersGet = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const optionsGet = { headers: headersGet };
      
    let apiUrl=localStorage.getItem("apiUrl");
    return this.http.get(this.baseUrl+'/users/'+id,optionsGet);
  }
  tokenUser(json){
    let headersToken = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
      const optionsToken = { headers: headersToken };
      let jsonA = JSON.stringify(json);
      return this.http.post(this.baseUrl+'/user_token', jsonA, optionsToken)
  }
  postUser(json){
    let headersPost = new HttpHeaders(
    {
      'Content-Type': 'application/json'
    });
    const optionsPost = { headers: headersPost };
    let jsonA = JSON.stringify(json);
    return this.http.post(this.baseUrl+'/users', jsonA, optionsPost)
  }
  putUser(json, id){
    let jwt=localStorage.getItem("jwt");
    let headersPut = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+jwt
    });
    const optionsPut = { headers: headersPut };
    let jsonPut = JSON.stringify(json);
    return this.http.put(this.baseUrl+'/users/'+id, jsonPut, optionsPut)
  }
}
