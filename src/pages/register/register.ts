import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ProviderUsersProvider, Group } from '../../providers/provider-users/provider-users';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

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
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public provider:ProviderUsersProvider) {
    this.person={};
    this.name="";
    this.lastName="";
    this.phone;
    this.address="";
    this.email="";
    this.userName="";
    this.password="";
    this.passwordConfirm="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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
      "password_confirmation":this.passwordConfirm
    }
    this.provider.postUser(json)
    .subscribe(
      (data)=>{
        this.navCtrl.setRoot(LoginPage);
      },
      (error)=>{console.log(error);}
    );;
  }
  alerts(){
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
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
