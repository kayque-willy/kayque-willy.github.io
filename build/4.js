webpackJsonp([4],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrioritizationPageModule", function() { return PrioritizationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prioritization__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrioritizationPageModule = /** @class */ (function () {
    function PrioritizationPageModule() {
    }
    PrioritizationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prioritization__["a" /* PrioritizationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prioritization__["a" /* PrioritizationPage */]),
            ],
        })
    ], PrioritizationPageModule);
    return PrioritizationPageModule;
}());

//# sourceMappingURL=prioritization.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrioritizationPage; });
/* unused harmony export Prioritization */
/* unused harmony export MetricItem */
/* unused harmony export MetricValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prioritization_prioritization__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrioritizationPage = /** @class */ (function () {
    function PrioritizationPage(navCtrl, navParams, storage, alertCtrl, loadingCtrl, priorizationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.priorizationProvider = priorizationProvider;
        this.btnContinueDisabled = true;
        this.metricValueColor = "";
        this.YES = 1;
        this.disableSteps = false;
        this.scaleView = false;
        this.itemView = false;
        this.prioritizations = navParams.get('prioritizations');
        this.answers = navParams.get('answers');
        this.answersNeighborhoods = navParams.get('answersNeighborhoods');
        this.plan = navParams.get('plan');
        this.questionary = navParams.get('questionary');
        this.respondent = navParams.get('respondent');
        this.currentMetricItem = navParams.get('currentMetricItem');
        this.currentMetricItemIndex = navParams.get('currentMetricItemIndex');
        this.currentQuestion = navParams.get('currentQuestion');
        this.currentQuestionIndex = navParams.get('currentQuestionIndex');
        this.neighborhoods = navParams.get('neighborhoods');
        this.questions = navParams.get('questions');
        this.metricItems = navParams.get('metricItems');
        this.points = navParams.get('points');
        this.selectedMetricValue = new MetricValue();
        this.step = this.currentMetricItemIndex + 1;
        this.totalSteps = this.metricItems.length;
        if (this.totalSteps == 1)
            this.disableSteps = true;
        this.progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.totalQuestions = this.questions.length;
        this.resolveMetricItem();
    }
    PrioritizationPage.prototype.resolveMetricItem = function () {
        switch (this.currentMetricItem.name) {
            case "Gravidade":
                this.scaleView = true;
                break;
            case "Urgência":
                this.scaleView = true;
                break;
            case "Tendência":
                this.scaleView = true;
                break;
            case "Escala Qualitativa":
                this.itemView = true;
                break;
            case "Escala de satisfação":
                this.scaleView = true;
                break;
            case "Necessidade de Requalificação":
                this.scaleView = true;
                break;
            case "Escala de qualidade":
                this.scaleView = true;
                break;
            case "Escala de necessidade":
                this.scaleView = true;
                break;
            case "Escala de concordancia":
                this.scaleView = true;
                break;
            case "Melhorias para o comerciante":
                this.scaleView = true;
                break;
            case "Escala de Satisfação":
                this.scaleView = true;
                break;
            case "Avaliação do comerciante":
                this.scaleView = true;
                break;
            case "Concordancia e discordancia":
                this.itemView = true;
                break;
            case "Frequência Semanal":
                this.itemView = true;
                break;
            case "Atrações do Centro":
                this.itemView = true;
                break;
            case "Motivos de não ir ao centro":
                this.itemView = true;
                break;
            case "Atrações do Centro 2":
                this.itemView = true;
                break;
            case "Equipamentos e comércios":
                this.itemView = true;
                break;
            case "Ramo de atividade comercial":
                this.itemView = true;
                break;
            case "Motivação de escolha para o comerciante":
                this.itemView = true;
                break;
            case "Atividades exercidas pelos pedestres":
                this.itemView = true;
                break;
            case "Pontos fortes para o comerciante":
                this.itemView = true;
                break;
            case "Pontos fracos para o comerciante":
                this.itemView = true;
                break;
            case "Ausências do Centro":
                this.itemView = true;
                break;
            case "Necessidades do Centro":
                this.itemView = true;
                break;
            case "Pontos fortes da rua":
                this.itemView = true;
                break;
            case "Pontos fracos da rua":
                this.itemView = true;
                break;
        }
    };
    PrioritizationPage.prototype.getDescriptionByPriorization = function () {
        //------------------------------DEFINIÇÃO DE MÉTRICA------------------------------
        switch (this.currentMetricItem.name) {
            case "Gravidade":
                return "Quão grave esse problema poderá se tornar caso nada seja feito?";
            case "Urgência":
                return "A resolução deste problema pode esperar ou deve ser realizada imediatamente?";
            case "Tendência":
                return "Se esse problema não for resolvido agora, ele vai piorar pouco a pouco ou vai piorar bruscamente?";
            case "Escala Qualitativa":
                return "O quanto você concorda com a afirmação?";
            default:
                return "";
        }
        //------------------------------DEFINIÇÃO DE MÉTRICA------------------------------
    };
    PrioritizationPage.prototype.selectMetricValue = function (metricValue) {
        this.selectedMetricValue = metricValue;
        this.setMetricValueColor();
        this.btnContinueDisabled = false;
        this.scrollToBottom();
    };
    PrioritizationPage.prototype.setMetricValueColor = function () {
        switch (this.selectedMetricValue.icon.toString().substr(0, 1)) {
            case '1': {
                this.metricValueColor = "metric_value_1";
                break;
            }
            case '2': {
                this.metricValueColor = "metric_value_2";
                break;
            }
            case '3': {
                this.metricValueColor = "metric_value_3";
                break;
            }
            case '4': {
                this.metricValueColor = "metric_value_4";
                break;
            }
            case '5': {
                this.metricValueColor = "metric_value_5";
                break;
            }
            default: {
                this.metricValueColor = "metric_value_default";
                break;
            }
        }
    };
    PrioritizationPage.prototype.isMetricValueSelected = function (metricValue) {
        if (!!this.selectedMetricValue) {
            return this.selectedMetricValue.value == metricValue.value;
        }
        else {
            return false;
        }
    };
    PrioritizationPage.prototype.nextStep = function () {
        this.deletePrioritization();
        this.createPrioritization();
        this.navigate();
    };
    PrioritizationPage.prototype.createPrioritization = function () {
        var prioritization = new Prioritization();
        prioritization.plan = this.plan;
        prioritization.questionary = this.questionary;
        prioritization.question = this.currentQuestion;
        prioritization.respondent = this.respondent;
        prioritization.metricItem = this.currentMetricItem;
        prioritization.metricValue = this.selectedMetricValue;
        prioritization.created_at = new Date().toISOString();
        this.prioritizations.push(prioritization);
    };
    PrioritizationPage.prototype.deletePrioritization = function () {
        var _this = this;
        this.prioritizations = this.prioritizations.filter(function (prioritization) { return !(prioritization.plan.id == _this.plan.id && prioritization.questionary.id == _this.questionary.id && prioritization.respondent.id == _this.respondent.id && prioritization.question.id == _this.currentQuestion.id && prioritization.metricItem.id == _this.currentMetricItem.id); });
    };
    PrioritizationPage.prototype.createAnswer = function (plan, questionary, currentQuestion, respondent, questionAnswer) {
        var answer = new __WEBPACK_IMPORTED_MODULE_2__providers_questionary_questionary__["a" /* Answer */]();
        answer.plan = plan;
        answer.questionary = questionary;
        answer.question = currentQuestion;
        answer.respondent = respondent;
        answer.answer = questionAnswer;
        answer.created_at = new Date().toISOString();
        answer.isCompleted = false;
        this.answers.push(answer);
    };
    PrioritizationPage.prototype.loadMetrics = function (metricId) {
        var _this = this;
        //------------------------CARREGA OS ITENS DE MÉTRICAS-----------------------------
        //1 - GUT, 2 - ESCALA QUALITATIVA, (3-17) - Métricas do questionário de teste
        this.priorizationProvider.getMetricItems(metricId)
            .then(function (metricItems) {
            if (metricItems != null) {
                _this.metricItems = metricItems;
                //------------------------CARREGA OS VALORES DE MÉTRICA-----------------------------
                _this.priorizationProvider.getMetricValues()
                    .then(function (result) {
                    if (result != null) {
                        //------------------------ASSOCIA OS VALORES AOS ITENS-----------------------------
                        for (var i = 0; i < _this.metricItems.length; i++) {
                            var metricItem = _this.metricItems[i];
                            for (var j = 0; j < result.length; j++) {
                                var metricValue = result[j];
                                if (metricItem.id == metricValue.metricItemId) {
                                    _this.metricItems[i].metricValues.push(metricValue);
                                }
                            }
                        }
                        //------------------------SALVA OS ITENS DE MÉTRICA-----------------------------
                        _this.storage.set('metricItems', _this.metricItems);
                        _this.insertAnswerAndNavigateToPrioritization();
                    }
                    else {
                        _this.showAlertLoadMetrics(metricId);
                    }
                })
                    .catch(function () {
                    _this.showAlertLoadMetrics(metricId);
                });
            }
            else {
                _this.showAlertLoadMetrics(metricId);
            }
        })
            .catch(function () {
            _this.showAlertLoadMetrics(metricId);
        });
    };
    PrioritizationPage.prototype.insertAnswerAndNavigateToPrioritization = function () {
        this.createAnswer(this.plan, this.questionary, this.questions[this.currentQuestionIndex + 1], this.respondent, this.YES);
        this.navigatePrioritizationPage(this.plan, this.respondent, this.questionary, this.neighborhoods, this.questions, this.metricItems, this.metricItems[0], 0, this.currentQuestionIndex + 1, this.questions[this.currentQuestionIndex + 1], this.answers, this.answersNeighborhoods, this.prioritizations);
    };
    PrioritizationPage.prototype.showAlertLoadMetrics = function (metricId) {
        var _this = this;
        this.metricItems = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadMetrics(metricId);
                    }
                }]
        });
        alert.present();
    };
    PrioritizationPage.prototype.navigate = function () {
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.points = this.points + 1;
        this.storage.set('points', this.points);
        //O plano esta habilitado pra usar a escala GUT
        if (this.plan.usePrioritization == true) {
            //Se a resposta for YES vai para a página de priorization com GUT
            if (this.currentMetricItemIndex + 1 < this.metricItems.length) {
                this.navigatePrioritizationPage(this.plan, this.respondent, this.questionary, this.neighborhoods, this.questions, this.metricItems, this.metricItems[this.currentMetricItemIndex + 1], this.currentMetricItemIndex + 1, this.currentQuestionIndex, this.currentQuestion, this.answers, this.answersNeighborhoods, this.prioritizations);
                //Se não, vai para a página do questionário
            }
            else {
                if (this.currentQuestionIndex + 1 < this.questions.length) {
                    this.navigateQuestionaryPage();
                    //acabaram as perguntas, mandar para thank-you page
                }
                else {
                    this.navigateThankYouPage();
                }
            }
            //O plano não esta habilitado para usar a escala GUT
            //Nesse caso pode usar outras métricas
        }
        else {
            if (this.currentQuestionIndex + 1 < this.questions.length) {
                //se metric_id for nulo, navega para página de questionário
                if (this.questions[this.currentQuestionIndex + 1].metricId == null) {
                    this.navigateQuestionaryPage();
                    //Se houver metric_id, carrega as métricas específicas  e navega para página de priorization
                }
                else {
                    this.loadMetrics(this.questions[this.currentQuestionIndex + 1].metricId);
                }
            }
            else {
                this.navigateThankYouPage();
            }
        }
    };
    PrioritizationPage.prototype.navigatePrioritizationPage = function (plan, respondent, questionary, neighborhoods, questions, metricItems, currentMetricItem, currentMetricItemIndex, currentQuestionIndex, currentQuestion, answers, answersNeighborhoods, prioritizations) {
        // Navegação para página do questinário
        this.navCtrl.push('PrioritizationPage', {
            points: this.points,
            plan: plan,
            respondent: respondent,
            questionary: questionary,
            neighborhoods: neighborhoods,
            questions: questions,
            metricItems: metricItems,
            currentMetricItem: currentMetricItem,
            currentMetricItemIndex: currentMetricItemIndex,
            currentQuestionIndex: currentQuestionIndex,
            currentQuestion: currentQuestion,
            answers: answers,
            answersNeighborhoods: answersNeighborhoods,
            prioritizations: prioritizations
        }).then(this.loader.dismiss());
    };
    PrioritizationPage.prototype.navigateThankYouPage = function () {
        //Navegação para pagina de agradecimento
        this.navCtrl.push('ThankyouPage', {
            questions: this.questions,
            questionary: this.questionary,
            points: this.points,
            answers: this.answers,
            answersNeighborhoods: this.answersNeighborhoods,
            prioritizations: this.prioritizations
        }).then(this.loader.dismiss());
    };
    PrioritizationPage.prototype.navigateQuestionaryPage = function () {
        //Navegação para página do questionário
        this.navCtrl.push('QuestionaryPage', {
            points: this.points,
            respondent: this.respondent,
            questionary: this.questionary,
            neighborhoods: this.neighborhoods,
            currentQuestionIndex: this.currentQuestionIndex + 1,
            currentQuestion: this.questions[this.currentQuestionIndex + 1],
            metricItems: this.metricItems,
            answers: this.answers,
            answersNeighborhoods: this.answersNeighborhoods,
            prioritizations: this.prioritizations
        }).then(this.loader.dismiss());
    };
    PrioritizationPage.prototype.scrollToBottom = function () {
        if (!!this.content) {
            var content_1 = this.content;
            setTimeout(function () {
                content_1.scrollToBottom(100);
            }, 100);
        }
    };
    PrioritizationPage.prototype.help = function () {
        var alert = this.alertCtrl.create({
            title: '<div text-center>Então, vamos soltar a imaginação!</div>',
            message: '<div text-center>' + this.currentQuestion.narrative + '</div>'
                + '<div class="alert-align-center"><img class="img-alert" src="https://azpng.com/png/2019/08/01/thinking-clipart-student-collection-transparent.png" /></div>',
            buttons: [{
                    text: "Ok!",
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
    ], PrioritizationPage.prototype, "content", void 0);
    PrioritizationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-prioritization',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\prioritization\prioritization.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col offset-2 col-6>\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col offset-1 col-2>\n        <button *ngIf="currentQuestion.useNarrative" ion-button clear (click)="help()">\n          <ion-icon class="icon-help" name="alert"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row class="context-area">\n      <ion-col col-12 class="context-area-container">\n        <img class="context-area-icon" src="assets/imgs/{{currentQuestion.contextAreaIcon}}" />\n        <ion-label class="context-area-title">\n          {{currentQuestion.contextArea}}\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <!-- Enunciado da questão -->\n    <div class="hr"></div>\n    <ion-row class="margin-top-30">\n      <ion-col col-12 text-center class="question">\n        <h1>{{currentQuestion.question}}</h1>\n        <h3>{{getDescriptionByPriorization()}}</h3>\n        <h2 *ngIf="scaleView" class="{{metricValueColor}}">{{selectedMetricValue.name}}</h2>\n      </ion-col>\n    </ion-row>\n    <!-- Enunciado da questão -->\n    <!-- Seleção pela escala do emotion -->\n    <ion-row *ngIf="scaleView" padding-top margin-top>\n      <div offset-1></div>\n      <ion-col col-2 text-center *ngFor="let metricValue of currentMetricItem.metricValues">\n        <img *ngIf="!isMetricValueSelected(metricValue)" class="img-responsive" src="assets/imgs/{{metricValue.icon}}"\n          (click)="selectMetricValue(metricValue)" />\n        <img *ngIf="isMetricValueSelected(metricValue)" class="img-responsive"\n          src="assets/imgs/{{metricValue.iconSelected}}" (click)="selectMetricValue(metricValue)" />\n      </ion-col>\n    </ion-row>\n    <!-- Seleção pela escala do emotion -->\n    <!-- Seleção por itens -->\n    <ion-row *ngIf="itemView" padding-top>\n      <!-- <div offset-1></div> -->\n      <ion-col col-12>\n        <ion-list radio-group>\n          <ion-item *ngFor="let metricValue of currentMetricItem.metricValues">\n            <ion-radio (ionSelect)="selectMetricValue(metricValue)"></ion-radio>\n            <ion-label>{{metricValue.name}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <!-- Seleção por itens -->\n    <ion-row>\n      <ion-col col-12 text-center class="margin-top-30">\n        <button ion-button full class="button-background" (click)="nextStep()"\n          [disabled]="btnContinueDisabled">Continuar\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-navbar class="toolbar-progress">\n    <div *ngIf="!disableSteps" text-center class="progres-text-uper">{{step}} de {{totalSteps}}</div>\n    <ion-range *ngIf="!disableSteps" class="step-bar" [min]="0" [max]="metricItems.length" [step]="1" [(ngModel)]="step"\n      disabled>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <ion-title text-center>\n      <ion-icon range-right name="md-ribbon"></ion-icon>\n      {{points}} pontos\n    </ion-title>\n    <ion-range class="progress-bar" [min]="0" [max]="100" [step]="1" [(ngModel)]="progress" disabled>\n      <ion-icon range-left name="md-clipboard"></ion-icon>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <div text-center class="progres-text-down">{{currentQuestionIndex + 1}} de {{totalQuestions}} questões</div>\n  </ion-navbar>\n</ion-footer>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\prioritization\prioritization.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_prioritization_prioritization__["a" /* PrioritizationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_prioritization_prioritization__["a" /* PrioritizationProvider */]) === "function" && _g || Object])
    ], PrioritizationPage);
    return PrioritizationPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

var Prioritization = /** @class */ (function () {
    function Prioritization() {
    }
    return Prioritization;
}());

var MetricItem = /** @class */ (function () {
    function MetricItem() {
    }
    return MetricItem;
}());

var MetricValue = /** @class */ (function () {
    function MetricValue() {
    }
    return MetricValue;
}());

//# sourceMappingURL=prioritization.js.map

/***/ })

});
//# sourceMappingURL=4.js.map