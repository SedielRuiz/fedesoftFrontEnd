import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the ProviderUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderUsersProvider {
  data
  constructor(public http: HttpClient) {
    console.log('Hello ProviderUsersProvider Provider');
    this.data;
  }
  getUsers(){
    return this.http.get('localhost:3000/users');
  }
  postUser(json){
    let url ="localhost:3000/users";
    // let postData = new FormData();
    // postData.append("name", json.name);
    // postData.append("last_name", json.last_name);
    // postData.append("phone", json.phone);
    // postData.append("address", json.address);
    // postData.append("user_name", json.user_name);
    // postData.append("email", json.email);
    // postData.append("password", json.password);
    // postData.append("password_confirmation", json.password_confirmation);
    
    console.log(url);
    console.log(json);
    this.http.post(url, json)
    .subscribe(
      (data)=>{this.data = data;},
      (error)=>{console.log(error);}
    );
    return this.data;
  }
}
