import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderUsersProvider, Group } from '../../providers/provider-users/provider-users';
import { PrincipalPage } from '../../pages/principal/principal';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  id:number;
  name:string;
  lastName:string;
  phone:number;
  address:any;
  email:any;
  userName:any;
  neighborhoodId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public provider:ProviderUsersProvider, public alertCtrl: AlertController) {
    this.id;
    this.name="";
    this.lastName="";
    this.phone;
    this.address="";
    this.email="";
    this.userName="";
    this.neighborhoodId="";
    this.loadData();
  }

  ionViewDidLoad() {
  }
  updateData(){
    let json = {
      "id":this.id,
      "name":this.name,
      "last_name":this.lastName,
      "phone":this.phone,
      "address":this.address,
      "user_name":this.userName,
      "email":this.email,
      "neighborhood_id":this.neighborhoodId
    }
    this.provider.putUser(json)
    .subscribe(
      (data)=>{
        this.exit(data["name"]);
        this.navCtrl.setRoot(PrincipalPage);
      },
      (error)=>{console.log(error);}
    );
  }
  exit(name){
    this.alertCtrl.create({
      title: "Actualizado ",
      subTitle: "Hemos actualizados tus datos "+ name,
      buttons: ['Ok']
    }).present();
  }
  loadData(){
    let id=localStorage.getItem("idU");
    this.provider.getUsers(id)
    .subscribe(
      (data)=>{
        this.id = data["id"];
        this.name = data["name"];
        this.lastName = data["last_name"];
        this.phone = data["phone"];
        this.address = data["address"];
        this.email = data["email"];
        this.userName = data["user_name"];
        this.neighborhoodId = data["neighborhood_id"];
      },
      (error)=>{console.log(error);}
    );
  }
}
