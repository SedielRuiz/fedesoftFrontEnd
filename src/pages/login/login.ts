import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderUsersProvider, Group } from '../../providers/provider-users/provider-users';
import { PrincipalPage } from '../../pages/principal/principal';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName:any;
  password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider:ProviderUsersProvider, public alertCtrl: AlertController) {
    this.password="";
    this.userName="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewWillEnter(){
    let user=localStorage.getItem("user");
    let jwt=localStorage.getItem("jwt");
    if(user && jwt ){
        this.navCtrl.setRoot(PrincipalPage);
    }
  }

  singIn(){
    let json = {
      "auth":{
        "email":this.userName,
        "password":this.password
      }
    }
    this.provider.tokenUser(json)
    .subscribe(
      (data)=>{
        localStorage.setItem('user', JSON.stringify(data["user"]));
        localStorage.setItem('jwt', data["jwt"]);
        this.showInside(data);
        this.navCtrl.setRoot(PrincipalPage);
      },
      (error)=>{console.log(error);this.showError(error)}
    );;
  }
  showInside(data): any {
    console.log(data)
    this.alertCtrl.create({
        title: "Bienvenido "+ data.name,
        subTitle: "Estás en prevé ya!\n",
        buttons: ['Ok']
    }).present();
  }

  showError(err){
      let errors={
        404:"No encontramos coincidencias"
    }
    this.alertCtrl.create({
        title: "Oppps",
        subTitle: errors[err.status],
        buttons: ['Dismiss']
    }).present();
  }

}
