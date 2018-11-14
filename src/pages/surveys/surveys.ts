import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplySurveyPage } from '../../pages/apply-survey/apply-survey';
import { ApplySurveysProvider } from '../../providers/apply-surveys/apply-surveys';

/**
 * Generated class for the SurveysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surveys',
  templateUrl: 'surveys.html',
})
export class SurveysPage {
  surveys:any
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provider:ApplySurveysProvider
  ) {
    this.loadSurveys()
  }
  loadSurveys(){
    this.provider.getSurveys()
    .subscribe(
      (data)=>{
        this.surveys = data;
      },
      (error)=>{console.log(error);}
    );
  }
  openSurvey(s){
    this.navCtrl.setRoot(ApplySurveyPage, {
      survey: s,
    });
  }
}
