import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MethodsPreventionsProvider } from '../../providers/methods-preventions/methods-preventions';

/**
 * Generated class for the MethodsPreventionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-methods-preventions',
  templateUrl: 'methods-preventions.html',
})
export class MethodsPreventionsPage {
  methods:any
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provider:MethodsPreventionsProvider
  ) {
    this.methods=[]
    this.loadMethods()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MethodsPreventionsPage');
  }
  loadMethods(){
    this.provider.getMethodsPreventions()
    .subscribe(
      (data)=>{
        this.methods = data;
      },
      (error)=>{console.log(error);}
    );
  }
}
