import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RisksProvider } from '../../providers/risks/risks';

/**
 * Generated class for the RisksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risks',
  templateUrl: 'risks.html',
})
export class RisksPage {
  risks:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public provider:RisksProvider) {
    this.risks=[]
    this.loadRisks()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RisksPage');
  }
  loadRisks(){
    this.provider.getRisks()
    .subscribe(
      (data)=>{
        this.risks = data;
      },
      (error)=>{console.log(error);}
    );
  }
}
