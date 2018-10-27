import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderUsersProvider, Group } from '../../providers/provider-users/provider-users';
import { PrincipalPage } from '../../pages/principal/principal';
import { RegisterPage } from '../../pages/register/register';
import { AlertController, LoadingController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider:ProviderUsersProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
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
  singUp(){
    this.navCtrl.setRoot(RegisterPage);
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
        localStorage.setItem('jwt', data["jwt"]);
        this.setUser();
      },
      (error)=>{console.log(error);this.showError(error)}
    );
  }
  setUser(){
    this.provider.signIn(this.userName)
    .subscribe(
      (data)=>{
        let dataUser=data[0];
        console.log(data[0]);
        let loading = this.loadingCtrl.create({
          content: '<ion-spinner name="bubbles"></ion-spinner>Espere un momento por favor'
        });
        loading.present();
        setTimeout(() => {
          loading.dismiss();
          localStorage.setItem('user', JSON.stringify(dataUser["name"]));
          localStorage.setItem('idU', JSON.stringify(dataUser["id"]));
          this.showInside(dataUser["name"]);
          this.navCtrl.setRoot(PrincipalPage);
        }, 2000);

      },
      (error)=>{console.log(error);this.showError(error)}
    );
  }
  showInside(name): any {
    this.alertCtrl.create({
        title: "Bienvenido "+ name,
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
        buttons: ['No tenemos registro de tus datos, registrate ya!']
    }).present();
  }

}
