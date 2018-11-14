import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/***********************PROVIDERS*****/
import { NeighborhoodsProvider } from '../../providers/neighborhoods/neighborhoods';
import { ProviderUsersProvider, Group } from '../../providers/provider-users/provider-users';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  credentialsForm: FormGroup;
  person:{};
  name:string;
  lastName:string;
  phone:number;
  address:any;
  email:any;
  userName:any;
  password:any;
  passwordConfirm:any;
  neighborhoodId:any;
  rlb:any;
  neighborhoods:any;
  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public providerUser:ProviderUsersProvider, 
    public providerNeig:NeighborhoodsProvider
  ) {
    this.rlb="";
    this.person={};
    this.name="";
    this.lastName="";
    this.phone;
    this.address="";
    this.email="";
    this.userName="";
    this.password="";
    this.passwordConfirm="";
    this.neighborhoodId="";
    this.neighborhoods=[];
    this.loadNeighborhoods();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  loadNeighborhoods(){
    this.providerNeig.getNeighborhoods()
    .subscribe(
      (data)=>{
        this.neighborhoods = data;
      },
      (error)=>{console.log(error);}
    );
  }
  saveData() {
    let json = {
      "name":this.name,
      "last_name":this.lastName,
      "phone":this.phone,
      "address":this.address,
      "user_name":this.userName,
      "email":this.email,
      "password":this.password,
      "password_confirmation":this.passwordConfirm,
      "neighborhood_id":this.neighborhoodId
    }
    this.providerUser.postUser(json)
    .subscribe(
      (data)=>{
        this.navCtrl.setRoot(LoginPage);
      },
      (error)=>{console.log(error);}
    );
  }
  goBack() {
    this.navCtrl.setRoot(LoginPage);
  }
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
