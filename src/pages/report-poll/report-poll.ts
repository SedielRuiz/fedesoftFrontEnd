import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReportPollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-poll',
  templateUrl: 'report-poll.html',
})
export class ReportPollPage {
  type:number
  results:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.get("type");
    this.results = navParams.get("result");
  }

  ionViewDidLoad() {
    
  }

}
