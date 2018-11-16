import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { ProviderUsersProvider, Group } from '../../providers/provider-users/provider-users';
import { PollsProvider } from '../../providers/polls/polls';


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

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  type:number
  results:any
  user: string
  graph: number
  questions: any
  totalUnity: number
  /*************variables reporte**/
  age:any
  ageNum:number
  helpState:any
  helpStateNum:number
  informated:any
  informatedNum:number
  regular:any
  regularNum:number
  used:any
  usedNum:number

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public providerUser:ProviderUsersProvider, 
    public pollProvider: PollsProvider
  ) {
    this.type = navParams.get("type");
    this.results = navParams.get("result");
    this.loadUser(this.results[0]['user_id']);
    this.loadPoll(this.results[0]['poll_id'], "questions");
  }
  loadReport(){
      for (let r = 0; r < this.results.length; ++r) {
        for (let x = 0; x < this.questions.length; ++x) {
          if(this.results[r].question_id == this.questions[x].id) {
            let variable="";
            switch(this.results[r].question_id){
              case 1: variable = "informated"; break;
              case 2: variable = "helpState"; break;
              case 3: variable = "age"; break;
              case 5: variable = "regular"; break;
              case 6: variable = "used"; break;
            }
            this.defineText(this.questions[x].options_question, this.results[r].answer, variable);
          }
        }
      }
  }
  defineText(arrOpc: any, answer:any, variable: string){
    for (let opc = 0; opc < arrOpc.length; ++opc) {
      if (arrOpc[opc].id==answer) {
        this[variable] = arrOpc[opc].description_opction;
      }
    }
  }
  loadPoll(id, pos){
    this.pollProvider.getPool(id)
    .subscribe(
      (data) => {   
        this.questions = data[pos];
        let totalQuestions = this.questions.length;
        this.totalUnity = 100/totalQuestions;
        this.loadReport();
      }
    )
  }
  loadUser(id){
    this.providerUser.getUser(id)
    .subscribe(
      (data)=>{
        this.user = data["name"] + " " +data["last_name"]
      },
      (error)=>{console.log(error);}
    );
  }
  loadNumbersParam(){
    if(this.age < 3) {this.ageNum=80;}else{this.ageNum=20;}
    if(this.helpState == "No"){this.helpStateNum=30;}else{this.helpStateNum=70;}
    if(this.informated == "No"){this.informatedNum=10;}else{this.informatedNum=90;}
    if(this.used == "No"){this.usedNum=20;}else{this.usedNum=100;}
    if(this.regular == "No"){this.regularNum=50;}else{this.regularNum=60;}
  }
  changeGaph(graph:number){
    this.loadNumbersParam();
    switch(graph){
      case 1:
        this.bars();
      break;
      case 2:
        this.cake();
      break;
      case 3:
        this.line();
      break;
    }
    this.graph = graph;
  }
  bars(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Edad", "Estado", "Información", "Preservativo", "Regular"],
        datasets: [{
          label: 'Prevención',
          data: [this.ageNum, this.helpStateNum, this.informatedNum, this.usedNum, this.regularNum],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
      },
      options: {
        scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
          
        });
      document.getElementById("cake").style.display = "none";
      document.getElementById("line").style.display = "none";
      document.getElementById("bar").style.display = "block";
  }
  cake(){
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      
      type: 'doughnut',
      data: {
          labels: ["Edad", "Estado", "Información", "Preservativo", "Regular"],
          datasets: [{
            label: 'Prevención',
              data: [this.ageNum, this.helpStateNum, this.informatedNum, this.usedNum, this.regularNum],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      }

    });
    document.getElementById("line").style.display = "none";
    document.getElementById("bar").style.display = "none";
    document.getElementById("cake").style.display = "block";
  }
  line(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["Edad", "Estado", "Información", "Preservativo", "Regular"],
          datasets: [
              {
                  label: "Prevención",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [this.ageNum, this.helpStateNum, this.informatedNum, this.usedNum, this.regularNum],
                  spanGaps: false,
              }
          ]
      }

    });
    document.getElementById("bar").style.display = "none";
    document.getElementById("cake").style.display = "none";
    document.getElementById("line").style.display = "block";
  }
  ionViewDidLoad() {

  }

}
