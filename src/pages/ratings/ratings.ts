import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderUsersProvider } from '../../providers/provider-users/provider-users';
import { RatingsProvider } from '../../providers/ratings/ratings';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the RatingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ratings',
  templateUrl: 'ratings.html',
})
export class RatingsPage {

  users: any
  ratings: any
  observation: any
  qualify:number
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public providerUser:ProviderUsersProvider,
    public providerRatings:RatingsProvider,
    public loadingCtrl: LoadingController
  ) {
    this.qualify=0;
    this.loadUsers()
    this.loadRatings()
  }
  loadRatings(){
    this.providerRatings.getRatings()
    .subscribe(
      (data)=>{
        let loading = this.loadingCtrl.create({
          content: '<ion-spinner name="bubbles"></ion-spinner>Espere un momento por favor'
        });
        loading.present();
        this.ratings = data;
        loading.dismiss();  
      },
      (error)=>{console.log(error);}
    );
  }
  loadUsers(){
    this.providerUser.getUsers()
    .subscribe(
      (data)=>{
        this.users = data;
      },
      (error)=>{console.log(error);}
    );
  }
  saveRating(){
    let id=localStorage.getItem("idU");
    let json = {
      "qualify":this.qualify,
      "observation_rating":this.observation,
      "user_id":id
    }
    this.providerRatings.postRating(json)
    .subscribe(
      (data)=>{
        this.ratings.push(data);
        this.observation="";
      },
      (error)=>{console.log(error);}
    );
  }
  cal(cal:number){
    this.qualify = cal;
    switch(cal){
      case 1:
        document.getElementById("one").removeAttribute('name');
        document.getElementById("one").setAttribute('name', 'md-star');
        break;
    }
    console.log(this.qualify);
  }

}
