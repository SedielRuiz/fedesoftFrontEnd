import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ApplySurveysProvider } from '../../providers/apply-surveys/apply-surveys';
import { PollsProvider } from '../../providers/polls/polls';
import { LoadingController } from 'ionic-angular';
import { SurveysPage } from '../../pages/surveys/surveys';
import { ResultSurveysProvider } from '../../providers/result-surveys/result-surveys';
import { ReportPollPage } from '../../pages/report-poll/report-poll';
/**
 * Generated class for the ApplySurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-survey',
  templateUrl: 'apply-survey.html',
})
export class ApplySurveyPage {
  surveyFilled: number
  currQuestion: any
  answers: any
  step: number  
  Available: number;
  survey:any
  totalQuestions:number
  numQ:number
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private view: ViewController,  
    public provider:ApplySurveysProvider,
    public pollProvider: PollsProvider, 
    public loadingCtrl: LoadingController,
    public providerResult: ResultSurveysProvider
    ) {
    this.Available=0;
    this.surveyFilled = 0;
    this.survey = navParams.get("survey");    
    this.answers={};    
    this.loadPoll();
  }
  /****************************CARGAR ENCUESTA***************************/
  loadPoll() {
    this.pollProvider.getPool(this.survey.id)
    .subscribe(
      (data) => {    
        let loading = this.loadingCtrl.create({
          content: '<ion-spinner name="bubbles"></ion-spinner>Espere un momento por favor'
        });
        loading.present();
        this.survey = data;
        this.currQuestion = this.survey.questions[0];
        this.step = 0;
        this.totalQuestions = this.survey.questions.length;
        this.Available = 1;
        loading.dismiss();  
      }
    )
  }
  /*************************FIN CARGAR ENCUESTA***************************/
  /**************NAVEGAR ENTRE PREGUNTAS*************/
  navigateQuestion(step) {

    if(this.step + step < 0) {    
      return;
    }

    if(this.step + step >= this.totalQuestions) {      
      return;
    }

    this.step += step;    
    this.currQuestion = this.survey.questions[this.step];                
  }

  checksFullfilled() {    
    if(Object.keys(this.answers).length == this.totalQuestions) {
      this.surveyFilled = 1;
    }    
  }

  dismiss(){
    this.navCtrl.setRoot(SurveysPage);
  }
  /**********************GUARDAR ENCUESTA********************/
  sendApply(){
    console.log(this.answers)
    let id=localStorage.getItem("idU");
    let json = {
      "user_id":id,
      "poll_id":this.survey.id
    }
    this.providerResult.saveApplyPoll(json)
    .subscribe(
      (data)=>{
        if(data){
          this.loadAnswers(data.id)
        }
      },
      (error)=>{console.log(error);}
    );
  }
  loadAnswers(id){
    let arr =[];
    this.survey.questions.forEach(item => {
      arr.push({
        "answer": answers[item.id],
        "poll_id": this.survey.id,
        "question_id": item.id,
        "apply_survey_id": id
      })
    });
    this.sendAnswers(arr)
  }
  sendAnswers(arr){
    arr.forEach(element => {  
      this.providerResult.saveAnswersPoll(json)
      .subscribe(
        (data)=>{
          if(data){
            this.navCtrl.setRoot(ReportPollPage, {
              type: this.survey.type_poll,
            });
          }
        },
        (error)=>{console.log(error);}
      );
    });
  }
  /********************FIN GUARDAR ENCUESTA********************/
}
