import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ApplySurveysProvider } from '../../providers/apply-surveys/apply-surveys';

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
  survey:any
  questions:any
  questionsSurvey:any
  optionsQuestion:any
  totalQuestions:number
  numberQuestion:number
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,  public provider:ApplySurveysProvider) {
    this.survey = navParams.get("survey");
    this.questionsSurvey=[]
    this.optionsQuestion=[]
    this.questions=[]
    this.numberQuestion=1;
    this.loadQuestions()
    this.loadSurvey()
  }
  /****************************CARGAR ENCUESTA***************************/
  loadSurvey(){
    this.provider.getSurvey(this.survey['id'])
    .subscribe(
      (data)=>{
        this.survey = data;
        this.loadQuestionsSurvey(this.survey)
      },
      (error)=>{console.log(error);}
    );
  }
  loadQuestions(){
    this.provider.getQuestions()
    .subscribe(
      (data)=>{
        this.questions = data;
      },
      (error)=>{console.log(error);}
    );
  }
  loadQuestionsSurvey(survey){
    this.provider.getQuestionsSurvey(survey['id'])
    .subscribe(
      (data)=>{
        this.questionsSurvey = data;
        this.totalQuestions = this.questionsSurvey.length; 
        this.loadOptionsQuestion(this.questionsSurvey)
      },
      (error)=>{console.log(error);}
    );
  }
  loadOptionsQuestion(question){
    question.forEach(q => {
      this.provider.getOptionsQuestion(q['question_id'])
      .subscribe(
        (data)=>{
          this.loadArrOptions(data)
        },
        (error)=>{console.log(error);}
      );
    });
  }
  loadArrOptions(data){
    data.forEach(opc => {
      this.optionsQuestion.push(opc);
    });
  }
  /*************************FIN CARGAR ENCUESTA***************************/
  /**************NAVEGAR ENTRE PREGUNTAS*************/
  navigateQuestion(idP, idQ, type){
    let idBox = "formQuestion_"+idP+"_"+idQ;
    if(type=="n"){
      this.numberQuestion = this.numberQuestion+1;
    }else{
      this.numberQuestion = this.numberQuestion-1;
    }
  }
  dismiss(){
    this.view.dismiss();
  }
}
