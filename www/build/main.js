webpackJsonp([12],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplySurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apply_surveys_apply_surveys__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_polls_polls__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_surveys_surveys__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_result_surveys_result_surveys__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_report_poll_report_poll__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ApplySurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplySurveyPage = /** @class */ (function () {
    function ApplySurveyPage(navCtrl, navParams, view, provider, pollProvider, loadingCtrl, providerResult) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.provider = provider;
        this.pollProvider = pollProvider;
        this.loadingCtrl = loadingCtrl;
        this.providerResult = providerResult;
        this.Available = 0;
        this.surveyFilled = 0;
        this.survey = navParams.get("survey");
        this.answers = {};
        this.arrResult = [];
        this.loadPoll();
        this.notes = [
            {
                "title": "¿Sabias que?",
                "body": "Varios estudios han probado que el esperma puede vivir en la mucosa cervical antes de fertilizar el óvulo."
            },
            {
                "title": "¿Sabes cuáles son los métodos anticonceptivos y su eficacia?",
                "body": "Consúltalo en nuestra página de Métodos anticonceptivos. No te quedes con la duda."
            },
            {
                "title": "Fertilidad",
                "body": "Recuerda que puedes crear tu calendario de fertilidad."
            },
            {
                "title": "Recuerda",
                "body": "No olvides consultar con tu médico, y realizar exámenes de rutina."
            },
        ];
        this.noteRandom();
    }
    /****************************CARGAR ENCUESTA***************************/
    ApplySurveyPage.prototype.noteRandom = function () {
        var num = this.notes.length;
        var random = Math.floor(Math.random() * num);
        this.note = this.notes[random];
    };
    ApplySurveyPage.prototype.loadPoll = function () {
        var _this = this;
        this.pollProvider.getPool(this.survey.id)
            .subscribe(function (data) {
            var loading = _this.loadingCtrl.create({
                content: '<ion-spinner name="bubbles"></ion-spinner>Espere un momento por favor'
            });
            loading.present();
            _this.survey = data;
            //this.survey.questions.splice(3, 0);
            delete _this.survey.questions[3];
            _this.currQuestion = _this.survey.questions[0];
            _this.step = 0;
            _this.totalQuestions = _this.survey.questions.length;
            _this.Available = 1;
            loading.dismiss();
        });
    };
    /*************************FIN CARGAR ENCUESTA***************************/
    /**************NAVEGAR ENTRE PREGUNTAS*************/
    ApplySurveyPage.prototype.navigateQuestion = function (step) {
        this.noteRandom();
        if (this.step + step < 0) {
            return;
        }
        if (this.step + step >= this.totalQuestions) {
            return;
        }
        this.step += step;
        if (this.step == 3) {
            if (step == 1) {
                this.step += 1;
            }
            else if (step == -1) {
                this.step -= 1;
            }
        }
        this.currQuestion = this.survey.questions[this.step];
    };
    ApplySurveyPage.prototype.checksFullfilled = function () {
        if (Object.keys(this.answers).length == this.totalQuestions - 1) {
            this.surveyFilled = 1;
        }
    };
    ApplySurveyPage.prototype.dismiss = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_surveys_surveys__["a" /* SurveysPage */]);
    };
    /**********************GUARDAR ENCUESTA********************/
    ApplySurveyPage.prototype.sendApply = function () {
        var _this = this;
        console.log(this.answers);
        var id = localStorage.getItem("idU");
        var json = {
            "number_attemps": 0,
            "user_id": id,
            "poll_id": this.survey.id
        };
        this.providerResult.saveApplyPoll(json)
            .subscribe(function (data) {
            if (data) {
                _this.arrResult.push(data);
                _this.loadAnswers(data);
            }
        }, function (error) { console.log(error); });
    };
    ApplySurveyPage.prototype.loadAnswers = function (data) {
        var _this = this;
        var arr = [];
        this.survey.questions.forEach(function (item) {
            arr.push({
                "answer": _this.answers[item.id],
                "poll_id": _this.survey.id,
                "question_id": item.id,
                "apply_survey_id": data.id
            });
        });
        this.sendAnswers(arr);
    };
    ApplySurveyPage.prototype.sendAnswers = function (arr) {
        var _this = this;
        arr.forEach(function (item) {
            _this.providerResult.saveAnswersPoll(item)
                .subscribe(function (data) {
                _this.arrResult.push(data);
                if (_this.arrResult.length > 0) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_report_poll_report_poll__["a" /* ReportPollPage */], {
                        type: _this.survey.type_poll,
                        result: _this.arrResult
                    });
                }
            }, function (error) { console.log(error); });
        });
    };
    /********************FIN GUARDAR ENCUESTA********************/
    ApplySurveyPage.prototype.prueba = function () {
        var ayy = [];
        ayy.push({
            "id": 2,
            "number_attemps": 0,
            "user_id": 29,
            "poll_id": 1,
            "created_at": "2018-11-14T01:02:03.949Z",
            "updated_at": "2018-11-14T01:02:03.949Z"
        });
        ayy.push({
            "id": 1,
            "question_id": 1,
            "created_at": "2018-11-14T01:02:04.396Z",
            "updated_at": "2018-11-14T01:02:04.396Z",
            "apply_survey_id": 2,
            "poll_id": 1,
            "answer": 1
        }, {
            "id": 2,
            "question_id": 3,
            "created_at": "2018-11-14T01:02:04.511Z",
            "updated_at": "2018-11-14T01:02:04.511Z",
            "apply_survey_id": 2,
            "poll_id": 1,
            "answer": 5
        }, {
            "id": 3,
            "question_id": 5,
            "created_at": "2018-11-14T01:02:04.555Z",
            "updated_at": "2018-11-14T01:02:04.555Z",
            "apply_survey_id": 2,
            "poll_id": 1,
            "answer": 11
        }, {
            "id": 4,
            "question_id": 6,
            "created_at": "2018-11-14T01:02:04.592Z",
            "updated_at": "2018-11-14T01:02:04.592Z",
            "apply_survey_id": 2,
            "poll_id": 1,
            "answer": 14
        }, {
            "id": 5,
            "question_id": 2,
            "created_at": "2018-11-14T01:02:04.709Z",
            "updated_at": "2018-11-14T01:02:04.709Z",
            "apply_survey_id": 2,
            "poll_id": 1,
            "answer": 4
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_report_poll_report_poll__["a" /* ReportPollPage */], {
            type: 1,
            result: ayy
        });
    };
    ApplySurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-apply-survey',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\apply-survey\apply-survey.html"*/'<!--\n\n  Generated template for the ModalTestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content *ngIf="Available" padding>\n\n    <button ion-button small class="btndismiss" (click)="dismiss()" >X</button>\n\n    <br><br><br>\n\n    <h1>{{survey.name_poll}}</h1>\n\n    <div>\n\n      <div>\n\n        <p class="opcQ">{{step + 1}}. {{currQuestion.concept_quiestion}}</p>\n\n        <hr id="linequestion">\n\n        <ion-list radio-group [(ngModel)]="answers[currQuestion.id]">\n\n          <div *ngFor="let opc of currQuestion.options_question">\n\n            <ion-item>\n\n              <ion-label>{{opc.description_opction}}</ion-label>\n\n              <ion-radio  value="{{opc.id}}" (ionSelect)="checksFullfilled()"></ion-radio> \n\n            </ion-item>\n\n          </div>\n\n        </ion-list>\n\n      </div>\n\n    </div>\n\n      <button ion-button round small class="btns btnSend" *ngIf="surveyFilled" (click)="sendApply()">Enviar</button>\n\n    <div>\n\n    </div>  \n\n      <div id="sectionArrows" >\n\n          <h1>\n\n              <ion-icon id="hola" name="ios-arrow-dropleft-outline" (click)="navigateQuestion(-1)"></ion-icon> &nbsp;\n\n              <ion-icon id="hola" name="ios-arrow-dropright-outline" (click)="navigateQuestion(1)"></ion-icon>\n\n          </h1> \n\n      </div>    \n\n       \n\n    <div id="counter" >\n\n        <ion-chip id="chipcountuner">\n\n            <ion-label>Pregunta {{step + 1}} de {{totalQuestions}}</ion-label>\n\n        </ion-chip>\n\n    </div>  \n\n    <!--button ion-button round small class="btns btnSend"  (click)="prueba()">Prueba</button--> \n\n \n\n    <div id="messageQuestion">\n\n      <p id="ptext">{{note.title}} <br> {{note.body}}</p>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\apply-survey\apply-survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_apply_surveys_apply_surveys__["a" /* ApplySurveysProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_polls_polls__["a" /* PollsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_result_surveys_result_surveys__["a" /* ResultSurveysProvider */]])
    ], ApplySurveyPage);
    return ApplySurveyPage;
}());

//# sourceMappingURL=apply-survey.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPollPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provider_users_provider_users__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_polls_polls__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ReportPollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPollPage = /** @class */ (function () {
    function ReportPollPage(navCtrl, navParams, providerUser, pollProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.providerUser = providerUser;
        this.pollProvider = pollProvider;
        this.type = navParams.get("type");
        this.results = navParams.get("result");
        this.loadUser(this.results[0]['user_id']);
        this.loadPoll(this.results[0]['poll_id'], "questions");
    }
    ReportPollPage.prototype.loadReport = function () {
        for (var r = 0; r < this.results.length; ++r) {
            for (var x = 0; x < this.questions.length; ++x) {
                if (this.results[r].question_id == this.questions[x].id) {
                    var variable = "";
                    switch (this.results[r].question_id) {
                        case 1:
                            variable = "informated";
                            break;
                        case 2:
                            variable = "helpState";
                            break;
                        case 3:
                            variable = "age";
                            break;
                        case 5:
                            variable = "regular";
                            break;
                        case 6:
                            variable = "used";
                            break;
                    }
                    this.defineText(this.questions[x].options_question, this.results[r].answer, variable);
                }
            }
        }
    };
    ReportPollPage.prototype.defineText = function (arrOpc, answer, variable) {
        for (var opc = 0; opc < arrOpc.length; ++opc) {
            if (arrOpc[opc].id == answer) {
                this[variable] = arrOpc[opc].description_opction;
            }
        }
    };
    ReportPollPage.prototype.loadPoll = function (id, pos) {
        var _this = this;
        this.pollProvider.getPool(id)
            .subscribe(function (data) {
            _this.questions = data[pos];
            var totalQuestions = _this.questions.length;
            _this.totalUnity = 100 / totalQuestions;
            _this.loadReport();
        });
    };
    ReportPollPage.prototype.loadUser = function (id) {
        var _this = this;
        this.providerUser.getUser(id)
            .subscribe(function (data) {
            _this.user = data["name"] + " " + data["last_name"];
        }, function (error) { console.log(error); });
    };
    ReportPollPage.prototype.loadNumbersParam = function () {
        if (this.age < 3) {
            this.ageNum = 80;
        }
        else {
            this.ageNum = 20;
        }
        if (this.helpState == "No") {
            this.helpStateNum = 30;
        }
        else {
            this.helpStateNum = 70;
        }
        if (this.informated == "No") {
            this.informatedNum = 10;
        }
        else {
            this.informatedNum = 90;
        }
        if (this.used == "No") {
            this.usedNum = 20;
        }
        else {
            this.usedNum = 100;
        }
        if (this.regular == "No") {
            this.regularNum = 50;
        }
        else {
            this.regularNum = 60;
        }
    };
    ReportPollPage.prototype.changeGaph = function (graph) {
        this.loadNumbersParam();
        switch (graph) {
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
    };
    ReportPollPage.prototype.bars = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
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
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        document.getElementById("cake").style.display = "none";
        document.getElementById("line").style.display = "none";
        document.getElementById("bar").style.display = "block";
    };
    ReportPollPage.prototype.cake = function () {
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
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
    };
    ReportPollPage.prototype.line = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
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
    };
    ReportPollPage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ReportPollPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ReportPollPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ReportPollPage.prototype, "lineCanvas", void 0);
    ReportPollPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-poll',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\report-poll\report-poll.html"*/'<!--\n  Generated template for the ReportPollPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Reporte</h1>\n  <p>Hola {{user}}, <br>\n  <p *ngIf="type==1">\n    De acuerdo a tus respuestas, su rango de edad esta entre {{age}}, debido a que considera que {{helpState}} recibió ayudas del estado; \n    y {{informated}} se encuentra informado del tema en consencuencia \n    <span *ngIf="informated==\'No\'">tiene un alto riesgo de un embarazo no deseado</span>\n    <span *ngIf="informated==\'Si\'">tiene menor probabilidad de embarazo.</span><br><br>\n\n    Otros puntos que pueden influir es la mestruación, al ser una mujer cuya mestruación {{regular}} es regular \n    <span *ngIf="regular==\'No\'">puedes tener un desorden en tus periodos de fertilidad</span>\n    <span *ngIf="regular==\'Si\'">no hay mucho de que preocuparse ya que podrías de una forma saber cuales son tus días mas fertilez y lo que no<br>con capacidad de reducir el embarazo</span><br><br>\n\n    Por último y más importante, la mejor forma de prevenir el embarazo es el uso de preservativo<br>\n    Debido a que {{used}} usas preservativos \n    <span *ngIf="used==\'No\'">posiblemente tendrás un embarazo no deseado</span>\n    <span *ngIf="used==\'Si\'">te felicitamos ya que tienes menos posibilidades de no tener un embarazo no deseado.</span><br><br>\n    Puedes ver tus resultados através de grafícas  si lo deseas.<br>\n  </p>\n  <ion-card id="bar" style="display:none;">\n    <ion-card-header>\n      Prevención\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card id="cake" style="display:none;">\n    <ion-card-header>\n      Prevención\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card id="line" style="display:none;">\n    <ion-card-header>\n      Prevención\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button round small class="btns" (click)="changeGaph(1)">Barras</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button round small class="btns" (click)="changeGaph(2)">Torta</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button round small class="btns" (click)="changeGaph(3)">Lineal</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\report-poll\report-poll.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_polls_polls__["a" /* PollsProvider */]])
    ], ReportPollPage);
    return ReportPollPage;
}());

//# sourceMappingURL=report-poll.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_comments_forums_comments_forums__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provider_users_provider_users__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CommentForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentForumPage = /** @class */ (function () {
    function CommentForumPage(navCtrl, navParams, provider, providerUser, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.providerUser = providerUser;
        this.loadingCtrl = loadingCtrl;
        this.forum = {};
        this.forum = navParams.get("forum");
        this.comments = [];
        this.commit = "";
        this.loadUsers();
        this.loadComments();
    }
    CommentForumPage.prototype.ionViewDidLoad = function () {
    };
    CommentForumPage.prototype.saveCommit = function () {
        var _this = this;
        var id = localStorage.getItem("idU");
        var json = {
            "comment_forum": this.commit,
            "user_id": id,
            "forum_id": this.forum["id"]
        };
        this.provider.postCommentsForum(json)
            .subscribe(function (data) {
            _this.comments.push(data);
            _this.commit = "";
        }, function (error) { console.log(error); });
    };
    CommentForumPage.prototype.loadUsers = function () {
        var _this = this;
        this.providerUser.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        }, function (error) { console.log(error); });
    };
    CommentForumPage.prototype.loadComments = function () {
        var _this = this;
        this.provider.getCommentsForum(this.forum["id"])
            .subscribe(function (data) {
            var loading = _this.loadingCtrl.create({
                content: '<ion-spinner name="bubbles"></ion-spinner>Espere un momento por favor'
            });
            loading.present();
            _this.comments = data;
            loading.dismiss();
        }, function (error) { console.log(error); });
    };
    CommentForumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment-forum',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\comment-forum\comment-forum.html"*/'<!--\n  Generated template for the CommentForumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Comentarios</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <h3 class="tittle">{{forum.title_forum}}</h3><hr>\n    <h5>Objetivo</h5>\n    <p>{{forum.objective_forum}}</p><hr>\n    <ion-item class="" >\n      <div *ngFor="let c of comments">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-1>\n              <ion-icon class="iconComment" name="md-person"></ion-icon>\n            </ion-col>\n            <ion-col col-11>  \n              <div *ngFor="let u of users">\n                <p *ngIf="u.id == c.user_id"class="commentU">{{u.user_name}}</p>\n              </div>\n              <p class="comment"><ion-icon name="paper-plane"></ion-icon> {{c.comment_forum}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid><hr>\n      </div>\n    </ion-item>\n    <ion-item class="">\n        <ion-icon class="commit" name="ios-create" item-start></ion-icon>\n        <ion-label floating>Comentario</ion-label>\n        <ion-textarea [(ngModel)]="commit" id="commit" name="commit"></ion-textarea>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-5></ion-col>\n        <ion-col col-7>\n          <button ion-button type="button" class="btns btnCommit" (click)="saveCommit()">Comentar</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\comment-forum\comment-forum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_comments_forums_comments_forums__["a" /* CommentsForumsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CommentForumPage);
    return CommentForumPage;
}());

//# sourceMappingURL=comment-forum.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forums_forums__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comment_forum_comment_forum__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForumPage = /** @class */ (function () {
    function ForumPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.forums = [];
        this.loadForums();
    }
    ForumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForumPage');
    };
    ForumPage.prototype.loadForums = function () {
        var _this = this;
        this.provider.getForums()
            .subscribe(function (data) {
            _this.forums = data;
        }, function (error) { console.log(error); });
    };
    ForumPage.prototype.openForum = function (f) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__comment_forum_comment_forum__["a" /* CommentForumPage */], {
            forum: f,
        });
    };
    ForumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forum',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\forum\forum.html"*/'<!--\n\n  Generated template for the ForumPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  	<ion-navbar>\n\n			<button ion-button menuToggle class="burguer">\n\n	      <ion-icon name="menu"></ion-icon>\n\n	    </button>\n\n    	<ion-title></ion-title>\n\n  	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div id="separator">\n\n		<h1>Foros</h1>\n\n		<div>\n\n				<ion-icon id="iconS" class="icon-search" name="md-search"></ion-icon>\n\n				<ion-input id="search" type="text" placeholder="Buscar"></ion-input>\n\n		</div>\n\n	</div><hr>\n\n	<ion-list>\n\n		<button ion-item round class="listForum" *ngFor="let f of forums" (click)="openForum(f)" title="{{f.title_forum}}">{{f.title_forum}}</button>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\forum\forum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_forums_forums__["a" /* ForumsProvider */]])
    ], ForumPage);
    return ForumPage;
}());

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_neighborhoods_neighborhoods__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_provider_users_provider_users__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/***********************PROVIDERS*****/


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl, providerUser, providerNeig) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.providerUser = providerUser;
        this.providerNeig = providerNeig;
        this.rlb = "";
        this.person = {};
        this.name = "";
        this.lastName = "";
        this.phone;
        this.address = "";
        this.email = "";
        this.userName = "";
        this.password = "";
        this.passwordConfirm = "";
        this.neighborhoodId = "";
        this.neighborhoods = [];
        this.loadNeighborhoods();
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.loadNeighborhoods = function () {
        var _this = this;
        this.providerNeig.getNeighborhoods()
            .subscribe(function (data) {
            _this.neighborhoods = data;
        }, function (error) { console.log(error); });
    };
    RegisterPage.prototype.saveData = function () {
        var _this = this;
        var json = {
            "name": this.name,
            "last_name": this.lastName,
            "phone": this.phone,
            "address": this.address,
            "user_name": this.userName,
            "email": this.email,
            "password": this.password,
            "password_confirmation": this.passwordConfirm,
            "neighborhood_id": this.neighborhoodId
        };
        this.providerUser.postUser(json)
            .subscribe(function (data) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }, function (error) { console.log(error); });
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-icon (click)="goBack()" name="ios-arrow-dropleft" id="goBack" item-start></ion-icon>\n\n    <ion-title>Registro</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="grid-basic-page">\n\n  <form id="formCreate">\n\n    <h5>Aqui comienza tu experiencia</h5>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-icon  class="iconR" name="ios-create" item-start></ion-icon>\n\n        <ion-label floating>Nombres</ion-label>\n\n        <ion-input type="text" [(ngModel)]="name" id="name" name="name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon class="iconR" name="ios-create" item-start></ion-icon>\n\n        <ion-label floating>Apellidos</ion-label>\n\n        <ion-input type="text" [(ngModel)]="lastName" id="lastName" name="lastName"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon class="iconR"  name="md-call" item-start></ion-icon>\n\n        <ion-label floating>Teléfono</ion-label>\n\n        <ion-input type="number" [(ngModel)]="phone" id="phone" name="phone"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon class="iconR" name="ios-mail" item-start></ion-icon>\n\n        <ion-label floating>Correo electrónico</ion-label>\n\n        <ion-input type="email" [(ngModel)]="email" id="email" name="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon class="iconR" name="ios-compass" item-start></ion-icon>\n\n        <ion-label floating>Dirección</ion-label>\n\n        <ion-input type="text" [(ngModel)]="address" id="address" name="address"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon class="iconR" name="ios-compass" item-start></ion-icon>\n\n        <ion-label floating>Barrio</ion-label>\n\n        <ion-select [(ngModel)]="neighborhoodId" name="neighborhoodId">\n\n          <ion-option *ngFor="let n of neighborhoods" value="{{n.id}}">{{n.name_neighborhood}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon class="iconR" name="md-person" item-start></ion-icon>\n\n        <ion-label floating>Usuario</ion-label>\n\n        <ion-input type="text" [(ngModel)]="userName" id="userName" name="userName"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon class="iconR" name="ios-lock" item-start></ion-icon>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input type="password" [(ngModel)]="password" id="password" name="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-icon class="iconR" name="ios-lock" item-start></ion-icon>\n\n          <ion-label floating>Confirmar contraseña</ion-label>\n\n          <ion-input type="password" [(ngModel)]="passwordConfirm" id="passwordConfirm" name="passwordConfirm"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button ion-button type="button" class="btns" (click)="saveData()">Guardar</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_neighborhoods_neighborhoods__["a" /* NeighborhoodsProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_principal_principal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_neighborhoods_neighborhoods__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_provider_users_provider_users__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/***********************PROVIDERS*****/


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, provider, alertCtrl, providerNeig) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.providerNeig = providerNeig;
        this.id;
        this.name = "";
        this.lastName = "";
        this.phone;
        this.address = "";
        this.userName = "";
        this.neighborhoodId = "";
        this.neighborhoods = [];
        this.loadData();
        this.loadNeighborhoods();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.loadNeighborhoods = function () {
        var _this = this;
        this.providerNeig.getNeighborhoods()
            .subscribe(function (data) {
            _this.neighborhoods = data;
        }, function (error) { console.log(error); });
    };
    ProfilePage.prototype.updateData = function () {
        var _this = this;
        var json = {
            "name": this.name,
            "last_name": this.lastName,
            "phone": this.phone,
            "address": this.address,
            "user_name": this.userName,
            "neighborhood_id": this.neighborhoodId
        };
        this.provider.putUser(json, this.id)
            .subscribe(function (data) {
            _this.exit(data["name"]);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_principal_principal__["a" /* PrincipalPage */]);
        }, function (error) { console.log(error); });
    };
    ProfilePage.prototype.exit = function (name) {
        this.alertCtrl.create({
            title: "Actualizado ",
            subTitle: "Hemos actualizados tus datos " + name,
            buttons: ['Ok']
        }).present();
    };
    ProfilePage.prototype.loadData = function () {
        var _this = this;
        var id = localStorage.getItem("idU");
        this.provider.getUser(id)
            .subscribe(function (data) {
            _this.id = data["id"];
            _this.name = data["name"];
            _this.lastName = data["last_name"];
            _this.phone = data["phone"];
            _this.address = data["address"];
            _this.userName = data["user_name"];
            _this.neighborhoodId = data["neighborhood_id"];
        }, function (error) { console.log(error); });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form id="formCreate" class="grid-basic-page">\n\n        <h5>Actualizar datos</h5>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-icon name="md-person" item-start></ion-icon>\n\n            <ion-label floating>Nombres</ion-label>\n\n            <ion-input type="text" [(ngModel)]="name" id="name" name="name"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="md-person" item-start></ion-icon>\n\n            <ion-label floating>Apellidos</ion-label>\n\n            <ion-input type="text" [(ngModel)]="lastName" id="lastName" name="lastName"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="md-call" item-start></ion-icon>\n\n            <ion-label floating>Teléfono</ion-label>\n\n            <ion-input type="number" [(ngModel)]="phone" id="phone" name="phone"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="ios-compass" item-start></ion-icon>\n\n            <ion-label floating>Dirección</ion-label>\n\n            <ion-input type="text" [(ngModel)]="address" id="address" name="address"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="paper-plane" item-start></ion-icon>\n\n            <ion-label floating>Barrio</ion-label>\n\n            <ion-select [(ngModel)]="neighborhoodId" name="neighborhoodId">\n\n              <ion-option *ngFor="let n of neighborhoods" value="{{n.id}}">{{n.name_neighborhood}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="md-person" item-start></ion-icon>\n\n            <ion-label floating>Usuario</ion-label>\n\n            <ion-input type="text" [(ngModel)]="userName" id="userName" name="userName"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <button ion-button type="button" class="btns" (click)="updateData()">Guardar</button>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_neighborhoods_neighborhoods__["a" /* NeighborhoodsProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_users_provider_users__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ratings_ratings__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RatingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatingsPage = /** @class */ (function () {
    function RatingsPage(navCtrl, navParams, providerUser, providerRatings, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.providerUser = providerUser;
        this.providerRatings = providerRatings;
        this.loadingCtrl = loadingCtrl;
        this.qualify = 0;
        this.loadUsers();
        this.loadRatings();
    }
    RatingsPage.prototype.loadRatings = function () {
        var _this = this;
        this.providerRatings.getRatings()
            .subscribe(function (data) {
            var loading = _this.loadingCtrl.create({
                content: '<ion-spinner name="bubbles"></ion-spinner>Espere un momento por favor'
            });
            loading.present();
            _this.ratings = data;
            loading.dismiss();
        }, function (error) { console.log(error); });
    };
    RatingsPage.prototype.loadUsers = function () {
        var _this = this;
        this.providerUser.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        }, function (error) { console.log(error); });
    };
    RatingsPage.prototype.saveRating = function () {
        var _this = this;
        var id = localStorage.getItem("idU");
        var json = {
            "qualify": this.qualify,
            "observation_rating": this.observation,
            "user_id": id
        };
        this.providerRatings.postRating(json)
            .subscribe(function (data) {
            _this.ratings.push(data);
            _this.observation = "";
        }, function (error) { console.log(error); });
    };
    RatingsPage.prototype.cal = function (cal) {
        this.qualify = cal;
        switch (cal) {
            case 1:
                document.getElementById("one").removeAttribute('name');
                document.getElementById("one").setAttribute('name', 'md-star');
                break;
        }
        console.log(this.qualify);
    };
    RatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratings',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\ratings\ratings.html"*/'<!--\n\n  Generated template for the RatingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle class="burguer">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h1>Califícanos</h1>\n\n  <div id="learning" class="qualifyDiv container">\n\n    <div class="boxes">\n\n      <h5>Tu calificación es importante</h5>\n\n      <figure>\n\n        <figcaption class="ratings">\n\n            <p style="font-size: 22px;" title="Calificación">\n\n                <span>\n\n                  <ion-icon class="iconR" name="md-star-outline" item-start title="1 Aplauso" (click)="cal(1)" id="one"> </ion-icon>\n\n                </span>\n\n                <span>\n\n                  <ion-icon class="iconR" name="md-star-outline" item-start title="2 Aplausos" (click)="cal(2)" id="two"></ion-icon>\n\n                </span>\n\n                <span>\n\n                  <ion-icon class="iconR" name="md-star-outline" item-start title="3 Aplausos" (click)="cal(3)" id="three"></ion-icon>\n\n                </span>\n\n                <span>\n\n                  <ion-icon class="iconR" name="md-star-outline" item-start title="4 Aplausos" (click)="cal(4)" id="four"></ion-icon>\n\n                </span>\n\n                <span>\n\n                  <ion-icon class="iconR" name="md-star-outline" item-start title="5 Aplausos" (click)="cal(5)" id="five"></ion-icon>\n\n                </span>\n\n            </p>\n\n        </figcaption>\n\n      </figure>\n\n      <ion-item class="qualify">\n\n          <ion-icon class="commit" name="ios-create" item-start></ion-icon>\n\n          <ion-label floating>Observaciones</ion-label>\n\n          <ion-textarea [(ngModel)]="observation" id="observation" name="observation"></ion-textarea>\n\n      </ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-5></ion-col>\n\n          <ion-col col-7>\n\n            <button ion-button type="button" class="btns btnObservation" (click)="saveRating()">Calificar</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n  <ion-item class="contentOb" >\n\n    <div *ngFor="let r of ratings">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <ion-icon class="iconObservation" name="md-person"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-11>  \n\n            <div *ngFor="let u of users">\n\n              <p *ngIf="u.id == r.user_id"class="observationU">{{u.user_name}}</p>\n\n            </div>\n\n            <figcaption class="ratings" style="margin-left: 29px;margin-top: -33px !important;">\n\n                <p style="font-size: 14px;" title="Calificación">\n\n                    <span>\n\n                      <ion-icon class="iconR" name="md-star-outline" item-start title="1 Aplauso" id="one"> </ion-icon>\n\n                    </span>\n\n                    <span>\n\n                      <ion-icon class="iconR" name="md-star-outline" item-start title="2 Aplausos" id="two"></ion-icon>\n\n                    </span>\n\n                    <span>\n\n                      <ion-icon class="iconR" name="md-star-outline" item-start title="3 Aplausos" id="three"></ion-icon>\n\n                    </span>\n\n                    <span>\n\n                      <ion-icon class="iconR" name="md-star-outline" item-start title="4 Aplausos" id="four"></ion-icon>\n\n                    </span>\n\n                    <span>\n\n                      <ion-icon class="iconR" name="md-star-outline" item-start title="5 Aplausos" id="five"></ion-icon>\n\n                    </span>\n\n                    <span>\n\n                      {{r.qualify}}\n\n                    </span>\n\n                </p>\n\n            </figcaption>\n\n            <p class="observation"><ion-icon name="paper-plane"></ion-icon> {{r.observation_rating}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\ratings\ratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ratings_ratings__["a" /* RatingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RatingsPage);
    return RatingsPage;
}());

//# sourceMappingURL=ratings.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apply-survey/apply-survey.module": [
		486,
		11
	],
	"../pages/comment-forum/comment-forum.module": [
		487,
		10
	],
	"../pages/forum/forum.module": [
		488,
		9
	],
	"../pages/login/login.module": [
		489,
		8
	],
	"../pages/methods-preventions/methods-preventions.module": [
		490,
		7
	],
	"../pages/principal/principal.module": [
		491,
		6
	],
	"../pages/profile/profile.module": [
		492,
		5
	],
	"../pages/ratings/ratings.module": [
		493,
		4
	],
	"../pages/register/register.module": [
		494,
		3
	],
	"../pages/report-poll/report-poll.module": [
		495,
		2
	],
	"../pages/risks/risks.module": [
		496,
		1
	],
	"../pages/surveys/surveys.module": [
		497,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 179;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultSurveysProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ResultSurveysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ResultSurveysProvider = /** @class */ (function () {
    function ResultSurveysProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
    }
    ResultSurveysProvider.prototype.saveApplyPoll = function (json) {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var optionsGet = { headers: headers };
        var options = { headers: headers };
        return this.http.post(this.baseUrl + '/apply_surveys', json, options);
    };
    ResultSurveysProvider.prototype.saveAnswersPoll = function (json) {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var optionsGet = { headers: headers };
        var options = { headers: headers };
        return this.http.post(this.baseUrl + '/result_surveys', json, options);
    };
    ResultSurveysProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ResultSurveysProvider);
    return ResultSurveysProvider;
}());

//# sourceMappingURL=result-surveys.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsForumsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CommentsForumsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommentsForumsProvider = /** @class */ (function () {
    function CommentsForumsProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
    }
    CommentsForumsProvider.prototype.getCommentsForum = function (id) {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/commetsForum/' + id, options);
    };
    CommentsForumsProvider.prototype.postCommentsForum = function (json) {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        return this.http.post(this.baseUrl + '/comments_forums', json, options);
    };
    CommentsForumsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CommentsForumsProvider);
    return CommentsForumsProvider;
}());

//# sourceMappingURL=comments-forums.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ForumsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ForumsProvider = /** @class */ (function () {
    function ForumsProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
    }
    ForumsProvider.prototype.getForums = function () {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/forums', options);
    };
    ForumsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ForumsProvider);
    return ForumsProvider;
}());

//# sourceMappingURL=forums.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RisksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RisksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RisksProvider = /** @class */ (function () {
    function RisksProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
        console.log('Hello RisksProvider Provider');
    }
    RisksProvider.prototype.getRisks = function () {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/risks', options);
    };
    RisksProvider.prototype.postRisk = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var jsonA = JSON.stringify(json);
        return this.http.post(this.baseUrl + '/risks', jsonA, options);
    };
    RisksProvider.prototype.putRisk = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var jsonA = JSON.stringify(json);
        return this.http.put(this.baseUrl + '/risks', jsonA, options);
    };
    RisksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RisksProvider);
    return RisksProvider;
}());

//# sourceMappingURL=risks.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodsPreventionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MethodsPreventionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MethodsPreventionsProvider = /** @class */ (function () {
    function MethodsPreventionsProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
        console.log('Hello MethodsPreventionsProvider Provider');
    }
    MethodsPreventionsProvider.prototype.getMethodsPreventions = function () {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/methods_preventions', options);
    };
    MethodsPreventionsProvider.prototype.postMethodPrevention = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var jsonA = JSON.stringify(json);
        return this.http.post(this.baseUrl + '/methods_preventions', jsonA, options);
    };
    MethodsPreventionsProvider.prototype.putMethodPrevention = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var jsonA = JSON.stringify(json);
        return this.http.put(this.baseUrl + '/methods_preventions', jsonA, options);
    };
    MethodsPreventionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MethodsPreventionsProvider);
    return MethodsPreventionsProvider;
}());

//# sourceMappingURL=methods-preventions.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RatingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RatingsProvider = /** @class */ (function () {
    function RatingsProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
    }
    RatingsProvider.prototype.getRatings = function () {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/ratings', options);
    };
    RatingsProvider.prototype.postRating = function (json) {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        return this.http.post(this.baseUrl + '/ratings', json, options);
    };
    RatingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RatingsProvider);
    return RatingsProvider;
}());

//# sourceMappingURL=ratings.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Group */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderUsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Group = /** @class */ (function () {
    function Group(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Group;
}());

/*
  Generated class for the ProviderUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProviderUsersProvider = /** @class */ (function () {
    function ProviderUsersProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
    }
    ProviderUsersProvider.prototype.signIn = function (email) {
        var jwt = localStorage.getItem("jwt");
        var headersSign = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var optionsSignIn = { headers: headersSign };
        return this.http.get(this.baseUrl + '/signIn/' + email, optionsSignIn);
    };
    ProviderUsersProvider.prototype.getUsers = function () {
        var jwt = localStorage.getItem("jwt");
        var headersGet = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var optionsGet = { headers: headersGet };
        var apiUrl = localStorage.getItem("apiUrl");
        return this.http.get(this.baseUrl + '/users', optionsGet);
    };
    ProviderUsersProvider.prototype.getUser = function (id) {
        var jwt = localStorage.getItem("jwt");
        var headersGet = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var optionsGet = { headers: headersGet };
        var apiUrl = localStorage.getItem("apiUrl");
        return this.http.get(this.baseUrl + '/users/' + id, optionsGet);
    };
    ProviderUsersProvider.prototype.tokenUser = function (json) {
        var headersToken = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var optionsToken = { headers: headersToken };
        var jsonA = JSON.stringify(json);
        return this.http.post(this.baseUrl + '/user_token', jsonA, optionsToken);
    };
    ProviderUsersProvider.prototype.postUser = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var jsonA = JSON.stringify(json);
        return this.http.post(this.baseUrl + '/users', jsonA, options);
    };
    ProviderUsersProvider.prototype.putUser = function (json, id) {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        var jsonPut = JSON.stringify(json);
        return this.http.put(this.baseUrl + '/users/' + id, jsonPut, options);
    };
    ProviderUsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProviderUsersProvider);
    return ProviderUsersProvider;
}());

//# sourceMappingURL=provider-users.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\item-details\item-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(383);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_principal_principal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_risks_risks__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_methods_preventions_methods_preventions__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forum_forum__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_comment_forum_comment_forum__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_apply_survey_apply_survey__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_report_poll_report_poll__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_provider_users_provider_users__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_locations_locations__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_neighborhoods_neighborhoods__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_risks_risks__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_methods_preventions_methods_preventions__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_polls_polls__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_questions_questions__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_options_questions_options_questions__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_ratings_ratings__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_result_surveys_result_surveys__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_apply_surveys_apply_surveys__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_forums_forums__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_comments_forums_comments_forums__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_ratings_ratings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_surveys_surveys__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/******************************************LIBRERIAS************/





/*************************************COMPONENTES**************************/













/***************************************PROVEEDORES***********************/

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_risks_risks__["a" /* RisksPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_methods_preventions_methods_preventions__["a" /* MethodsPreventionsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forum_forum__["a" /* ForumPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_surveys_surveys__["a" /* SurveysPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_comment_forum_comment_forum__["a" /* CommentForumPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_apply_survey_apply_survey__["a" /* ApplySurveyPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_poll_report_poll__["a" /* ReportPollPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/apply-survey/apply-survey.module#ApplySurveyPageModule', name: 'ApplySurveyPage', segment: 'apply-survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comment-forum/comment-forum.module#CommentForumPageModule', name: 'CommentForumPage', segment: 'comment-forum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forum/forum.module#ForumPageModule', name: 'ForumPage', segment: 'forum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/methods-preventions/methods-preventions.module#MethodsPreventionsPageModule', name: 'MethodsPreventionsPage', segment: 'methods-preventions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratings/ratings.module#RatingsPageModule', name: 'RatingsPage', segment: 'ratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-poll/report-poll.module#ReportPollPageModule', name: 'ReportPollPage', segment: 'report-poll', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/risks/risks.module#RisksPageModule', name: 'RisksPage', segment: 'risks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surveys/surveys.module#SurveysPageModule', name: 'SurveysPage', segment: 'surveys', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_risks_risks__["a" /* RisksPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_methods_preventions_methods_preventions__["a" /* MethodsPreventionsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forum_forum__["a" /* ForumPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_surveys_surveys__["a" /* SurveysPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_comment_forum_comment_forum__["a" /* CommentForumPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_apply_survey_apply_survey__["a" /* ApplySurveyPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_poll_report_poll__["a" /* ReportPollPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_locations_locations__["a" /* LocationsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_neighborhoods_neighborhoods__["a" /* NeighborhoodsProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_risks_risks__["a" /* RisksProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_methods_preventions_methods_preventions__["a" /* MethodsPreventionsProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_polls_polls__["a" /* PollsProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_questions_questions__["a" /* QuestionsProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_options_questions_options_questions__["a" /* OptionsQuestionsProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_ratings_ratings__["a" /* RatingsProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_result_surveys_result_surveys__["a" /* ResultSurveysProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_apply_surveys_apply_surveys__["a" /* ApplySurveysProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_forums_forums__["a" /* ForumsProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_comments_forums_comments_forums__["a" /* CommentsForumsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 190,
	"./af.js": 190,
	"./ar": 191,
	"./ar-dz": 192,
	"./ar-dz.js": 192,
	"./ar-kw": 193,
	"./ar-kw.js": 193,
	"./ar-ly": 194,
	"./ar-ly.js": 194,
	"./ar-ma": 195,
	"./ar-ma.js": 195,
	"./ar-sa": 196,
	"./ar-sa.js": 196,
	"./ar-tn": 197,
	"./ar-tn.js": 197,
	"./ar.js": 191,
	"./az": 198,
	"./az.js": 198,
	"./be": 199,
	"./be.js": 199,
	"./bg": 200,
	"./bg.js": 200,
	"./bm": 201,
	"./bm.js": 201,
	"./bn": 202,
	"./bn.js": 202,
	"./bo": 203,
	"./bo.js": 203,
	"./br": 204,
	"./br.js": 204,
	"./bs": 205,
	"./bs.js": 205,
	"./ca": 206,
	"./ca.js": 206,
	"./cs": 207,
	"./cs.js": 207,
	"./cv": 208,
	"./cv.js": 208,
	"./cy": 209,
	"./cy.js": 209,
	"./da": 210,
	"./da.js": 210,
	"./de": 211,
	"./de-at": 212,
	"./de-at.js": 212,
	"./de-ch": 213,
	"./de-ch.js": 213,
	"./de.js": 211,
	"./dv": 214,
	"./dv.js": 214,
	"./el": 215,
	"./el.js": 215,
	"./en-au": 216,
	"./en-au.js": 216,
	"./en-ca": 217,
	"./en-ca.js": 217,
	"./en-gb": 218,
	"./en-gb.js": 218,
	"./en-ie": 219,
	"./en-ie.js": 219,
	"./en-il": 220,
	"./en-il.js": 220,
	"./en-nz": 221,
	"./en-nz.js": 221,
	"./eo": 222,
	"./eo.js": 222,
	"./es": 223,
	"./es-do": 224,
	"./es-do.js": 224,
	"./es-us": 225,
	"./es-us.js": 225,
	"./es.js": 223,
	"./et": 226,
	"./et.js": 226,
	"./eu": 227,
	"./eu.js": 227,
	"./fa": 228,
	"./fa.js": 228,
	"./fi": 229,
	"./fi.js": 229,
	"./fo": 230,
	"./fo.js": 230,
	"./fr": 231,
	"./fr-ca": 232,
	"./fr-ca.js": 232,
	"./fr-ch": 233,
	"./fr-ch.js": 233,
	"./fr.js": 231,
	"./fy": 234,
	"./fy.js": 234,
	"./gd": 235,
	"./gd.js": 235,
	"./gl": 236,
	"./gl.js": 236,
	"./gom-latn": 237,
	"./gom-latn.js": 237,
	"./gu": 238,
	"./gu.js": 238,
	"./he": 239,
	"./he.js": 239,
	"./hi": 240,
	"./hi.js": 240,
	"./hr": 241,
	"./hr.js": 241,
	"./hu": 242,
	"./hu.js": 242,
	"./hy-am": 243,
	"./hy-am.js": 243,
	"./id": 244,
	"./id.js": 244,
	"./is": 245,
	"./is.js": 245,
	"./it": 246,
	"./it.js": 246,
	"./ja": 247,
	"./ja.js": 247,
	"./jv": 248,
	"./jv.js": 248,
	"./ka": 249,
	"./ka.js": 249,
	"./kk": 250,
	"./kk.js": 250,
	"./km": 251,
	"./km.js": 251,
	"./kn": 252,
	"./kn.js": 252,
	"./ko": 253,
	"./ko.js": 253,
	"./ky": 254,
	"./ky.js": 254,
	"./lb": 255,
	"./lb.js": 255,
	"./lo": 256,
	"./lo.js": 256,
	"./lt": 257,
	"./lt.js": 257,
	"./lv": 258,
	"./lv.js": 258,
	"./me": 259,
	"./me.js": 259,
	"./mi": 260,
	"./mi.js": 260,
	"./mk": 261,
	"./mk.js": 261,
	"./ml": 262,
	"./ml.js": 262,
	"./mn": 263,
	"./mn.js": 263,
	"./mr": 264,
	"./mr.js": 264,
	"./ms": 265,
	"./ms-my": 266,
	"./ms-my.js": 266,
	"./ms.js": 265,
	"./mt": 267,
	"./mt.js": 267,
	"./my": 268,
	"./my.js": 268,
	"./nb": 269,
	"./nb.js": 269,
	"./ne": 270,
	"./ne.js": 270,
	"./nl": 271,
	"./nl-be": 272,
	"./nl-be.js": 272,
	"./nl.js": 271,
	"./nn": 273,
	"./nn.js": 273,
	"./pa-in": 274,
	"./pa-in.js": 274,
	"./pl": 275,
	"./pl.js": 275,
	"./pt": 276,
	"./pt-br": 277,
	"./pt-br.js": 277,
	"./pt.js": 276,
	"./ro": 278,
	"./ro.js": 278,
	"./ru": 279,
	"./ru.js": 279,
	"./sd": 280,
	"./sd.js": 280,
	"./se": 281,
	"./se.js": 281,
	"./si": 282,
	"./si.js": 282,
	"./sk": 283,
	"./sk.js": 283,
	"./sl": 284,
	"./sl.js": 284,
	"./sq": 285,
	"./sq.js": 285,
	"./sr": 286,
	"./sr-cyrl": 287,
	"./sr-cyrl.js": 287,
	"./sr.js": 286,
	"./ss": 288,
	"./ss.js": 288,
	"./sv": 289,
	"./sv.js": 289,
	"./sw": 290,
	"./sw.js": 290,
	"./ta": 291,
	"./ta.js": 291,
	"./te": 292,
	"./te.js": 292,
	"./tet": 293,
	"./tet.js": 293,
	"./tg": 294,
	"./tg.js": 294,
	"./th": 295,
	"./th.js": 295,
	"./tl-ph": 296,
	"./tl-ph.js": 296,
	"./tlh": 297,
	"./tlh.js": 297,
	"./tr": 298,
	"./tr.js": 298,
	"./tzl": 299,
	"./tzl.js": 299,
	"./tzm": 300,
	"./tzm-latn": 301,
	"./tzm-latn.js": 301,
	"./tzm.js": 300,
	"./ug-cn": 302,
	"./ug-cn.js": 302,
	"./uk": 303,
	"./uk.js": 303,
	"./ur": 304,
	"./ur.js": 304,
	"./uz": 305,
	"./uz-latn": 306,
	"./uz-latn.js": 306,
	"./uz.js": 305,
	"./vi": 307,
	"./vi.js": 307,
	"./x-pseudo": 308,
	"./x-pseudo.js": 308,
	"./yo": 309,
	"./yo.js": 309,
	"./zh-cn": 310,
	"./zh-cn.js": 310,
	"./zh-hk": 311,
	"./zh-hk.js": 311,
	"./zh-tw": 312,
	"./zh-tw.js": 312
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 437;

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_principal_principal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_risks_risks__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_methods_preventions_methods_preventions__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_forum_forum__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ratings_ratings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_surveys_surveys__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        localStorage.setItem("apiUrl", "http://localhost:3000/");
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_3__pages_principal_principal__["a" /* PrincipalPage */] },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Riesgos', component: __WEBPACK_IMPORTED_MODULE_5__pages_risks_risks__["a" /* RisksPage */] },
            { title: 'Metodos de prevención', component: __WEBPACK_IMPORTED_MODULE_6__pages_methods_preventions_methods_preventions__["a" /* MethodsPreventionsPage */] },
            { title: 'Foros', component: __WEBPACK_IMPORTED_MODULE_7__pages_forum_forum__["a" /* ForumPage */] },
            { title: 'Calificar plataforma', component: __WEBPACK_IMPORTED_MODULE_8__pages_ratings_ratings__["a" /* RatingsPage */] },
            { title: 'Encuestas', component: __WEBPACK_IMPORTED_MODULE_9__pages_surveys_surveys__["a" /* SurveysPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        localStorage.removeItem("user");
        localStorage.removeItem("jwt");
        this.menu.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.isThereASession = function () {
        return localStorage.getItem("jwt") != undefined;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item class="menu" *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button ion-item class="menu" *ngIf="isThereASession()" (click)="logOut()">\n\n          Cerrar Sesion\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage() {
    }
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Bienvenidos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h3>Bienvenidos a </h3>\n\n  <p>\n\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My First List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocationsProvider = /** @class */ (function () {
    function LocationsProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
    }
    LocationsProvider.prototype.getLocations = function () {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        var apiUrl = localStorage.getItem("apiUrl");
        return this.http.get(this.baseUrl + '/locations/', options);
    };
    LocationsProvider.prototype.postLocation = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var jsonA = JSON.stringify(json);
        return this.http.post(this.baseUrl + '/locations', jsonA, options);
    };
    LocationsProvider.prototype.putLocation = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var jsonA = JSON.stringify(json);
        return this.http.put(this.baseUrl + '/locations', jsonA, options);
    };
    LocationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LocationsProvider);
    return LocationsProvider;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionsProvider = /** @class */ (function () {
    function QuestionsProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
        console.log('Hello QuestionsProvider Provider');
    }
    QuestionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], QuestionsProvider);
    return QuestionsProvider;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsQuestionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the OptionsQuestionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OptionsQuestionsProvider = /** @class */ (function () {
    function OptionsQuestionsProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
        console.log('Hello OptionsQuestionsProvider Provider');
    }
    OptionsQuestionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], OptionsQuestionsProvider);
    return OptionsQuestionsProvider;
}());

//# sourceMappingURL=options-questions.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveysPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_apply_survey_apply_survey__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apply_surveys_apply_surveys__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SurveysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveysPage = /** @class */ (function () {
    function SurveysPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.loadSurveys();
    }
    SurveysPage.prototype.loadSurveys = function () {
        var _this = this;
        this.provider.getSurveys()
            .subscribe(function (data) {
            _this.surveys = data;
        }, function (error) { console.log(error); });
    };
    SurveysPage.prototype.openSurvey = function (s) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_apply_survey_apply_survey__["a" /* ApplySurveyPage */], {
            survey: s,
        });
    };
    SurveysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-surveys',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\surveys\surveys.html"*/'<!--\n\n  Generated template for the SurveysPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle class="burguer">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div id="separator">\n\n		<h1>Encuestas</h1>\n\n		<div>\n\n				<ion-icon id="iconS" class="icon-search" name="md-search"></ion-icon>\n\n				<ion-input id="search" type="text" placeholder="Buscar"></ion-input>\n\n		</div>\n\n	</div><hr>\n\n	<ion-list>\n\n		<button ion-item round class="listSurvey" *ngFor="let s of surveys" (click)="openSurvey(s)" title="{{s.name_poll}}">{{s.name_poll}}</button>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\surveys\surveys.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_apply_surveys_apply_surveys__["a" /* ApplySurveysProvider */]])
    ], SurveysPage);
    return SurveysPage;
}());

//# sourceMappingURL=surveys.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_risks_risks__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_methods_preventions_methods_preventions__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_surveys_surveys__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Riesgos",
                description: "El e​mbarazo y la maternidad en la adolescencia son fenómenos que afectan la salud sexual, la salud reproductiva y el <br> bienestar de las mujeres jovenes..",
                image: "assets/imgs/riesgos.png",
                component: __WEBPACK_IMPORTED_MODULE_2__pages_risks_risks__["a" /* RisksPage */]
            },
            {
                title: "Metodos",
                description: "los anticonceptivos son métodos o procedimientos que previenen un embarazo en mujeres sexualmente activas, ya sean ellas o sus parejas quienes los usen. Pueden ser hormonales o no hormonales, transitorios o definitivos.",
                image: "assets/imgs/metodosa.png",
                component: __WEBPACK_IMPORTED_MODULE_3__pages_methods_preventions_methods_preventions__["a" /* MethodsPreventionsPage */]
            },
            {
                title: "Causas",
                description: "La falta de acceso a métodos anticonceptivos: Adquirir métodos anticonceptivos como condones o píldoras aún se encuentra estigmatizado y muchos jóvenes no intentan obtenerlos por miedo o vergüenza.<br><a href='#'></a>",
                image: "assets/imgs/metodosa.png",
            }
        ];
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
    };
    PrincipalPage.prototype.readMore = function (section) {
        this.navCtrl.setRoot(section.component);
    };
    PrincipalPage.prototype.test = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_surveys_surveys__["a" /* SurveysPage */]);
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\principal\principal.html"*/'<ion-header>\n\n  <ion-navbar class="pf">\n\n    <button ion-button menuToggle class="burguer">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding class="containerPrin tutorial-page grid-basic-page">\n\n    <div id="separator">\n\n      <h1>Bienvenido a Prevé Ya</h1>\n\n      <div>\n\n          <ion-icon id="iconS" class="icon-search" name="md-search"></ion-icon>\n\n          <ion-input id="search" type="text" placeholder="Buscar"></ion-input>\n\n      </div>\n\n    </div>\n\n    <hr>\n\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let slide of slides">\n\n        <img [src]="slide.image" class="slide-image"/>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n        <p [innerHTML]="slide.description"></p><a href=\'#\' *ngIf="slide.component!=\'\'" (click)="readMore(slide)">Leer más</a>\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <hr>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-10>\n\n          <button ion-button class="btns" (click)="test()">Test de Probabilidad</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_users_provider_users__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_principal_principal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, provider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.password = "";
        this.userName = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        var user = localStorage.getItem("user");
        var jwt = localStorage.getItem("jwt");
        if (user && jwt) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_principal_principal__["a" /* PrincipalPage */]);
        }
    };
    LoginPage.prototype.singUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.singIn = function () {
        var _this = this;
        var json = {
            "auth": {
                "email": this.userName,
                "password": this.password
            }
        };
        this.provider.tokenUser(json)
            .subscribe(function (data) {
            localStorage.setItem('jwt', data["jwt"]);
            _this.setUser();
        }, function (error) { console.log(error); _this.showError(error); });
    };
    LoginPage.prototype.setUser = function () {
        var _this = this;
        this.provider.signIn(this.userName)
            .subscribe(function (data) {
            var dataUser = data[0];
            var loading = _this.loadingCtrl.create({
                content: '<ion-spinner name="bubbles"></ion-spinner>Espere un momento por favor'
            });
            loading.present();
            setTimeout(function () {
                loading.dismiss();
                var name = "";
                var id = "";
                if (dataUser == undefined) {
                    name = "...";
                    id = "0";
                }
                else {
                    name = dataUser["name"];
                    id = dataUser["id"];
                }
                console.log(dataUser);
                localStorage.setItem('user', JSON.stringify(name));
                localStorage.setItem('idU', JSON.stringify(id));
                _this.showInside(name);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_principal_principal__["a" /* PrincipalPage */]);
            }, 2000);
        }, function (error) { console.log(error); _this.showError(error); });
    };
    LoginPage.prototype.showInside = function (name) {
        this.alertCtrl.create({
            title: "Bienvenido " + name,
            subTitle: "Estás en prevé ya!\n",
            buttons: ['Ok']
        }).present();
    };
    LoginPage.prototype.showError = function (err) {
        var errors = {
            404: "No encontramos coincidencias"
        };
        this.alertCtrl.create({
            title: "Oppps",
            subTitle: errors[err.status],
            buttons: ['No tenemos registro de tus datos, registrate ya!']
        }).present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar style="background:#fff !important;">\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n  <ion-content padding class="grid-basic-page containerLog">\n\n  <img class="imgLogo" src="assets/imgs/LogoPreveYaBlanco.png">\n\n    <form id="formLogin">\n\n      <ion-item class="boxs">\n\n          <ion-icon class="iconL" name="md-person" item-start></ion-icon>\n\n          <ion-label class="lblL" floating>Correo electrónico</ion-label>\n\n          <ion-input class="inpL" type="text" [(ngModel)]="userName" id="userName" name="userName"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="boxs">\n\n        <ion-icon class="iconL" name="ios-lock" item-start></ion-icon>\n\n        <ion-label class="lblL" floating>Contraseña</ion-label>\n\n        <ion-input class="inpL" type="password" [(ngModel)]="password" id="password" name="password"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-10>\n\n          <button ion-button class="btnLogin" round (click)="singIn()">Entrar</button>\n\n          <button ion-button class="btnLogin" round (click)="singUp()">Registrarse</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RisksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_risks_risks__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RisksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RisksPage = /** @class */ (function () {
    function RisksPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.risks = [];
        this.loadRisks();
    }
    RisksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RisksPage');
    };
    RisksPage.prototype.loadRisks = function () {
        var _this = this;
        this.provider.getRisks()
            .subscribe(function (data) {
            _this.risks = data;
        }, function (error) { console.log(error); });
    };
    RisksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-risks',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\risks\risks.html"*/'<!--\n\n  Generated template for the RisksPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  	<ion-navbar>\n\n		<button ion-button menuToggle class="burguer">\n\n	      <ion-icon name="menu"></ion-icon>\n\n	    </button>\n\n    	<ion-title></ion-title>\n\n  	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div id="separator">\n\n      <h1>Riesgos</h1>\n\n      <div>\n\n          <ion-icon id="iconS" class="icon-search" name="md-search"></ion-icon>\n\n          <ion-input id="search" type="text" placeholder="Buscar"></ion-input>\n\n      </div>\n\n    </div>\n\n    <hr>\n\n	<div *ngFor="let r of risks" id="learning" class="risksDiv container">\n\n		<div class="boxes">\n\n			<img class="imgLearning" src="assets/imgs/riesgos.png">\n\n			<div>\n\n				<h4>{{r.name_risk}}</h4>\n\n				<p>{{r.description_risk}}</p>\n\n			</div>\n\n			<h4>Recomendaciones:</h4><br>\n\n			<p>{{r.recomendations_risks}}</p>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\risks\risks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_risks_risks__["a" /* RisksProvider */]])
    ], RisksPage);
    return RisksPage;
}());

//# sourceMappingURL=risks.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodsPreventionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_methods_preventions_methods_preventions__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MethodsPreventionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MethodsPreventionsPage = /** @class */ (function () {
    function MethodsPreventionsPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.methods = [];
        this.loadMethods();
    }
    MethodsPreventionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MethodsPreventionsPage');
    };
    MethodsPreventionsPage.prototype.loadMethods = function () {
        var _this = this;
        this.provider.getMethodsPreventions()
            .subscribe(function (data) {
            _this.methods = data;
        }, function (error) { console.log(error); });
    };
    MethodsPreventionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-methods-preventions',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\methods-preventions\methods-preventions.html"*/'<!--\n\n  Generated template for the MethodsPreventionsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  	<ion-navbar>\n\n		<button ion-button menuToggle class="burguer">\n\n	      <ion-icon name="menu"></ion-icon>\n\n	    </button>\n\n    	<ion-title>Metodos anticonceptivos</ion-title>\n\n  	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div id="separator">\n\n      <h1>Metodos de prevención</h1>\n\n      <div>\n\n          <ion-icon id="iconS" class="icon-search" name="md-search"></ion-icon>\n\n          <ion-input id="search" type="text" placeholder="Buscar"></ion-input>\n\n      </div>\n\n    </div>\n\n    <hr>\n\n	<div *ngFor="let m of methods" id="learning" class="methodsDiv container">\n\n		<div class="boxes">\n\n			<img class="imgLearning" src="assets/imgs/riesgos.png">\n\n			<div>\n\n				<h4>{{m.name_method}}</h4>\n\n				<p class="contentMethod">{{m.description_method}}</p>\n\n				<h6>Duración</h6>\n\n				<p *ngIf="m.type_duration == 1">{{m.duration_method}} Horas</p>\n\n				<p *ngIf="m.type_duration == 2">{{m.duration_method}} Días</p>\n\n				<p *ngIf="m.type_duration == 3">{{m.duration_method}} Meses</p>\n\n				<p *ngIf="m.type_duration == 4">{{m.duration_method}} Años</p>\n\n				<h4>Recomendaciones:</h4>\n\n				<p >{{m.recommendations_method}}</p>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\methods-preventions\methods-preventions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_methods_preventions_methods_preventions__["a" /* MethodsPreventionsProvider */]])
    ], MethodsPreventionsPage);
    return MethodsPreventionsPage;
}());

//# sourceMappingURL=methods-preventions.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplySurveysProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApplySurveysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApplySurveysProvider = /** @class */ (function () {
    function ApplySurveysProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
    }
    ApplySurveysProvider.prototype.getSurveys = function () {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/polls', options);
    };
    /*******************CARGAR ENCUESTA***********************/
    ApplySurveysProvider.prototype.getQuestions = function () {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/questions', options);
    };
    ApplySurveysProvider.prototype.getSurvey = function (id) {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/polls/' + id, options);
    };
    ApplySurveysProvider.prototype.getQuestionsSurvey = function (id) {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/questionsPoll/' + id, options);
    };
    ApplySurveysProvider.prototype.getOptionsQuestion = function (id) {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        return this.http.get(this.baseUrl + '/optionsQuestion/' + id, options);
    };
    ApplySurveysProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApplySurveysProvider);
    return ApplySurveysProvider;
}());

//# sourceMappingURL=apply-surveys.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PollsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PollsProvider = /** @class */ (function () {
    function PollsProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
        this.jwt = localStorage.getItem("jwt");
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + this.jwt
        });
    }
    PollsProvider.prototype.getPool = function (id) {
        var options = { headers: this.headers };
        console.warn('options >>', options);
        return this.http.get(this.baseUrl + '/polls/' + id, options);
    };
    PollsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PollsProvider);
    return PollsProvider;
}());

//# sourceMappingURL=polls.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeighborhoodsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the NeighborhoodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NeighborhoodsProvider = /** @class */ (function () {
    function NeighborhoodsProvider(http) {
        this.http = http;
        this.baseUrl = "https://preve-ya.herokuapp.com";
        console.log('Hello NeighborhoodProvider Provider');
    }
    NeighborhoodsProvider.prototype.getNeighborhoods = function () {
        var jwt = localStorage.getItem("jwt");
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var options = { headers: headers };
        var apiUrl = localStorage.getItem("apiUrl");
        return this.http.get(this.baseUrl + '/neighborhoods', options);
    };
    NeighborhoodsProvider.prototype.postNeighborhood = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var jsonA = JSON.stringify(json);
        return this.http.post(this.baseUrl + '/neighborhoods', jsonA, options);
    };
    NeighborhoodsProvider.prototype.putNeighborhood = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var jsonA = JSON.stringify(json);
        return this.http.put(this.baseUrl + '/neighborhoods', jsonA, options);
    };
    NeighborhoodsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NeighborhoodsProvider);
    return NeighborhoodsProvider;
}());

//# sourceMappingURL=neighborhoods.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map