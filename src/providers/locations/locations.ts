import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsProvider {
  baseUrl:string="http://127.0.0.1:3000";
  constructor(public http: HttpClient) {
  }
  getLocations(){
    let jwt=localStorage.getItem("jwt");
    let headers = new HttpHeaders(
    {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+jwt
    });
    const options = { headers: headers };
      
    let apiUrl=localStorage.getItem("apiUrl");
    return this.http.get(this.baseUrl+'/locations/',options);
  }
  postLocation(json){
    let headers = new HttpHeaders(
    {
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    let jsonA = JSON.stringify(json);
    return this.http.post(this.baseUrl+'/locations', jsonA, options)
  }
  putLocation(json){
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
      const options = { headers: headers };
      let jsonA = JSON.stringify(json);
      return this.http.put(this.baseUrl+'/locations', jsonA, options)
  }
}
