import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the ApplySurveysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApplySurveysProvider {
  baseUrl:string="https://preve-ya.herokuapp.com";
  constructor(public http: HttpClient) {
  }
  getSurveys(){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
    return this.http.get(this.baseUrl+'/polls',options);
  }
  /*******************CARGAR ENCUESTA***********************/
  getQuestions(){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
    return this.http.get(this.baseUrl+'/questions',options);
  }
  getSurvey(id){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
    return this.http.get(this.baseUrl+'/polls/'+id,options);
  }
  getQuestionsSurvey(id){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
    return this.http.get(this.baseUrl+'/questionsPoll/'+id,options);
  }
  getOptionsQuestion(id){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
    return this.http.get(this.baseUrl+'/optionsQuestion/'+id,options);
  }
  /****************FIN CARGAR ENCUESTA***********************/
}
