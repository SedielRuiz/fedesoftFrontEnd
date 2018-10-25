import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-test',
  templateUrl: 'modal-test.html',
})
export class ModalTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  dismiss(){
    this.view.dismiss();
  }

}
