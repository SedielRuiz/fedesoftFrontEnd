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
  note: any
  notes: any
  arrResult: any
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
    this.notes = [
      {
        "title":"¿Sabias que?",
        "body":"Varios estudios han probado que el esperma puede vivir en la mucosa cervical antes de fertilizar el óvulo."
      },
      {
        "title":"¿Sabes cuáles son los métodos anticonceptivos y su eficacia?" ,
        "body":"Consúltalo en nuestra página de Métodos anticonceptivos. No te quedes con la duda."
      },
      {
        "title":"Fertilidad" ,
        "body":"Recuerda que puedes crear tu calendario de fertilidad."
      },
      {
        "title":"Recuerda" ,
        "body":"No olvides consultar con tu médico, y realizar exámenes de rutina."
      },
    ];
    this.noteRandom()
  }
  /****************************CARGAR ENCUESTA***************************/
  noteRandom(){
    let num = this.notes.length;
    let random=Math.floor(Math.random()*num);
    this.note = this.notes[random];
  }
  loadPoll() {
    this.pollProvider.getPool(this.survey.id)
    .subscribe(
      (data) => {    
        let loading = this.loadingCtrl.create({
          content: '<ion-spinner name="bubbles"></ion-spinner>Espere un momento por favor'
        });
        loading.present();
        this.survey = data;
        //this.survey.questions.splice(3, 0);
        delete this.survey.questions[3];
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
    this.noteRandom()
    if(this.step + step < 0) {    
      return;
    }

    if(this.step + step >= this.totalQuestions) {      
      return;
    }

    this.step += step;   
    if(this.step==3 ){
      if(step == 1){
        this.step+=1;
      }else if(step == -1){
        this.step-=1;
      }
    }
    this.currQuestion = this.survey.questions[this.step];
  }

  checksFullfilled() {    
    if(Object.keys(this.answers).length == this.totalQuestions-1) {
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
      "number_attemps":0,
      "user_id":id,
      "poll_id":this.survey.id
    }
    this.providerResult.saveApplyPoll(json)
    .subscribe(
      (data)=>{
        if(data){
          this.arrResult.push(data)
          this.loadAnswers(data)
        }
      },
      (error)=>{console.log(error);}
    );
  }
  loadAnswers(data){
    let arr =[];
    this.survey.questions.forEach(item => {
      arr.push({
        "answer": this.answers[item.id],
        "poll_id": this.survey.id,
        "question_id": item.id,
        "apply_survey_id": data.id
      })
    });
    this.sendAnswers(arr)
  }
  sendAnswers(arr){
    arr.forEach(item => {  
      this.providerResult.saveAnswersPoll(item)
      .subscribe(
        (data)=>{
          this.arrResult.push(data);
          if(this.arrResult.length>0){
            this.navCtrl.setRoot(ReportPollPage, {
              type: this.survey.type_poll,
              result: this.arrResult 
            });
          }
        },
        (error)=>{console.log(error);}
      );
    });
  }
  /********************FIN GUARDAR ENCUESTA********************/
  prueba(){
    let ayy = []
    ayy.push({
        "id": 2,
        "number_attemps": 0,
        "user_id": 29,
        "poll_id": 1,
        "created_at": "2018-11-14T01:02:03.949Z",
        "updated_at": "2018-11-14T01:02:03.949Z"
    })
    ayy.push({
          "id": 1,
          "question_id": 1,
          "created_at": "2018-11-14T01:02:04.396Z",
          "updated_at": "2018-11-14T01:02:04.396Z",
          "apply_survey_id": 2,
          "poll_id": 1,
          "answer": 1
      },
      {
          "id": 2,
          "question_id": 3,
          "created_at": "2018-11-14T01:02:04.511Z",
          "updated_at": "2018-11-14T01:02:04.511Z",
          "apply_survey_id": 2,
          "poll_id": 1,
          "answer": 5
      },
      {
          "id": 3,
          "question_id": 5,
          "created_at": "2018-11-14T01:02:04.555Z",
          "updated_at": "2018-11-14T01:02:04.555Z",
          "apply_survey_id": 2,
          "poll_id": 1,
          "answer": 11
      },
      {
          "id": 4,
          "question_id": 6,
          "created_at": "2018-11-14T01:02:04.592Z",
          "updated_at": "2018-11-14T01:02:04.592Z",
          "apply_survey_id": 2,
          "poll_id": 1,
          "answer": 14
      },
      {
          "id": 5,
          "question_id": 2,
          "created_at": "2018-11-14T01:02:04.709Z",
          "updated_at": "2018-11-14T01:02:04.709Z",
          "apply_survey_id": 2,
          "poll_id": 1,
          "answer": 4
      })
    this.navCtrl.setRoot(ReportPollPage, {
      type: 1,
      result:ayy
    });
  }
}
