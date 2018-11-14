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
  poll: any
  totalUnity: number
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public providerUser:ProviderUsersProvider, 
    public pollProvider: PollsProvider
  ) {
    this.type = navParams.get("type");
    this.results = navParams.get("result");
    this.loadUser(this.results[0]['user_id']);
    this.loadPoll(this.results[0]['poll_id']);
    console.log(this.results)
  }
  loadPoll(id){
    this.pollProvider.getPool(id)
    .subscribe(
      (data) => {    
        this.poll = data;
        let totalQuestions = this.poll.questions.length; 
        this.totalUnity = 100/totalQuestions;
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
  changeGaph(graph:number){
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
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: 'Prevención',
          data: [12, 19, 50, 5, 2, 3],
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
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: 'Prevención',
              data: [12, 19, 3, 5, 2, 3],
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
          labels: ["January", "February", "March", "April", "May", "June", "July"],
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
                  data: [65, 59, 80, 81, 56, 55, 40],
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
