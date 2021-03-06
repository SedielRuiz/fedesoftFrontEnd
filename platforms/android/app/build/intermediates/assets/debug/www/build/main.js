webpackJsonp([10],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
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


/**
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForumPage = /** @class */ (function () {
    function ForumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForumPage');
    };
    ForumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forum',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\forum\forum.html"*/'<!--\n\n  Generated template for the ForumPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  	<ion-navbar>\n\n		<button ion-button menuToggle class="burguer">\n\n	      <ion-icon name="menu"></ion-icon>\n\n	    </button>\n\n    	<ion-title>Foros</ion-title>\n\n  	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\forum\forum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ForumPage);
    return ForumPage;
}());

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_neighborhoods_neighborhoods__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_provider_users_provider_users__ = __webpack_require__(48);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_neighborhoods_neighborhoods__["a" /* NeighborhoodsProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsPage; });
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


/**
 * Generated class for the RatingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatingsPage = /** @class */ (function () {
    function RatingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RatingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatingsPage');
    };
    RatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratings',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\ratings\ratings.html"*/'<!--\n\n  Generated template for the RatingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle class="burguer">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Calificacion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\ratings\ratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RatingsPage);
    return RatingsPage;
}());

//# sourceMappingURL=ratings.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RisksPage; });
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


/**
 * Generated class for the RisksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RisksPage = /** @class */ (function () {
    function RisksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RisksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RisksPage');
    };
    RisksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-risks',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\risks\risks.html"*/'<!--\n\n  Generated template for the RisksPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  	<ion-navbar>\n\n		<button ion-button menuToggle class="burguer">\n\n	      <ion-icon name="menu"></ion-icon>\n\n	    </button>\n\n    	<ion-title>Riesgos</ion-title>\n\n  	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\risks\risks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RisksPage);
    return RisksPage;
}());

//# sourceMappingURL=risks.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodsPreventionsPage; });
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


/**
 * Generated class for the MethodsPreventionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MethodsPreventionsPage = /** @class */ (function () {
    function MethodsPreventionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MethodsPreventionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MethodsPreventionsPage');
    };
    MethodsPreventionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-methods-preventions',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\methods-preventions\methods-preventions.html"*/'<!--\n\n  Generated template for the MethodsPreventionsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  	<ion-navbar>\n\n		<button ion-button menuToggle class="burguer">\n\n	      <ion-icon name="menu"></ion-icon>\n\n	    </button>\n\n    	<ion-title>Metodos anticonceptivos</ion-title>\n\n  	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\methods-preventions\methods-preventions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MethodsPreventionsPage);
    return MethodsPreventionsPage;
}());

//# sourceMappingURL=methods-preventions.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_principal_principal__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_neighborhoods_neighborhoods__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_provider_users_provider_users__ = __webpack_require__(48);
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
        this.email = "";
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
            "email": this.email,
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
        this.provider.getUsers(id)
            .subscribe(function (data) {
            _this.id = data["id"];
            _this.name = data["name"];
            _this.lastName = data["last_name"];
            _this.phone = data["phone"];
            _this.address = data["address"];
            _this.email = data["email"];
            _this.userName = data["user_name"];
            _this.neighborhoodId = data["neighborhood_id"];
        }, function (error) { console.log(error); });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form id="formCreate" class="grid-basic-page">\n\n        <h5>Actualizar datos</h5>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-icon name="person" item-start></ion-icon>\n\n            <ion-label floating>Nombres</ion-label>\n\n            <ion-input type="text" [(ngModel)]="name" id="name" name="name"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="person" item-start></ion-icon>\n\n            <ion-label floating>Apellidos</ion-label>\n\n            <ion-input type="text" [(ngModel)]="lastName" id="lastName" name="lastName"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="paper-plane" item-start></ion-icon>\n\n            <ion-label floating>Teléfono</ion-label>\n\n            <ion-input type="number" [(ngModel)]="phone" id="phone" name="phone"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="mail" item-start></ion-icon>\n\n            <ion-label floating>Correo electrónico</ion-label>\n\n            <ion-input type="email" [(ngModel)]="email" id="email" name="email"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="paper-plane" item-start></ion-icon>\n\n            <ion-label floating>Dirección</ion-label>\n\n            <ion-input type="text" [(ngModel)]="address" id="address" name="address"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="paper-plane" item-start></ion-icon>\n\n            <ion-label floating>Barrio</ion-label>\n\n            <ion-select [(ngModel)]="neighborhoodId" name="neighborhoodId">\n\n              <ion-option *ngFor="let n of neighborhoods" value="{{n.id}}">{{n.name_neighborhood}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="paper-plane" item-start></ion-icon>\n\n            <ion-label floating>Usuario</ion-label>\n\n            <ion-input type="text" [(ngModel)]="userName" id="userName" name="userName"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <button ion-button type="button" class="btns" (click)="updateData()">Guardar</button>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_neighborhoods_neighborhoods__["a" /* NeighborhoodsProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveysPage; });
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


/**
 * Generated class for the SurveysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveysPage = /** @class */ (function () {
    function SurveysPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SurveysPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveysPage');
    };
    SurveysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-surveys',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\surveys\surveys.html"*/'<!--\n\n  Generated template for the SurveysPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle class="burguer">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Encuestas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\surveys\surveys.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SurveysPage);
    return SurveysPage;
}());

//# sourceMappingURL=surveys.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apply-survey/apply-survey.module": [
		299,
		0
	],
	"../pages/forum/forum.module": [
		298,
		9
	],
	"../pages/login/login.module": [
		300,
		8
	],
	"../pages/methods-preventions/methods-preventions.module": [
		304,
		7
	],
	"../pages/principal/principal.module": [
		301,
		6
	],
	"../pages/profile/profile.module": [
		306,
		5
	],
	"../pages/ratings/ratings.module": [
		302,
		4
	],
	"../pages/register/register.module": [
		305,
		3
	],
	"../pages/risks/risks.module": [
		303,
		2
	],
	"../pages/surveys/surveys.module": [
		307,
		1
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_principal_principal__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_risks_risks__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_methods_preventions_methods_preventions__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forum_forum__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_provider_users_provider_users__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_locations_locations__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_neighborhoods_neighborhoods__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_risks_risks__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_methods_preventions_methods_preventions__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_polls_polls__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_questions_questions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_options_questions_options_questions__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_ratings_ratings__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_result_surveys_result_surveys__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_apply_surveys_apply_surveys__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_forums_forums__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_comments_forums_comments_forums__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_ratings_ratings__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_surveys_surveys__ = __webpack_require__(110);
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
                __WEBPACK_IMPORTED_MODULE_30__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_surveys_surveys__["a" /* SurveysPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forum/forum.module#ForumPageModule', name: 'ForumPage', segment: 'forum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-survey/apply-survey.module#ApplySurveyPageModule', name: 'ApplySurveyPage', segment: 'apply-survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratings/ratings.module#RatingsPageModule', name: 'RatingsPage', segment: 'ratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/risks/risks.module#RisksPageModule', name: 'RisksPage', segment: 'risks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/methods-preventions/methods-preventions.module#MethodsPreventionsPageModule', name: 'MethodsPreventionsPage', segment: 'methods-preventions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surveys/surveys.module#SurveysPageModule', name: 'SurveysPage', segment: 'surveys', priority: 'low', defaultHistory: [] }
                    ]
                }),
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
                __WEBPACK_IMPORTED_MODULE_30__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_surveys_surveys__["a" /* SurveysPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_locations_locations__["a" /* LocationsProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_neighborhoods_neighborhoods__["a" /* NeighborhoodsProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_risks_risks__["a" /* RisksProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_methods_preventions_methods_preventions__["a" /* MethodsPreventionsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_polls_polls__["a" /* PollsProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_questions_questions__["a" /* QuestionsProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_options_questions_options_questions__["a" /* OptionsQuestionsProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_ratings_ratings__["a" /* RatingsProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_result_surveys_result_surveys__["a" /* ResultSurveysProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_apply_surveys_apply_surveys__["a" /* ApplySurveysProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_forums_forums__["a" /* ForumsProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_comments_forums_comments_forums__["a" /* CommentsForumsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_principal_principal__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_risks_risks__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_methods_preventions_methods_preventions__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_forum_forum__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ratings_ratings__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_surveys_surveys__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(207);
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

/***/ 285:
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(208);
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

/***/ 287:
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

/***/ 288:
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
        var apiUrl = localStorage.getItem("apiUrl");
        return this.http.get(this.baseUrl + '/risks/', options);
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

/***/ 289:
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
        var apiUrl = localStorage.getItem("apiUrl");
        return this.http.get(this.baseUrl + '/methods_preventions/', options);
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

/***/ 290:
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
        console.log('Hello PollsProvider Provider');
    }
    PollsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PollsProvider);
    return PollsProvider;
}());

//# sourceMappingURL=polls.js.map

/***/ }),

/***/ 291:
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

/***/ 292:
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

/***/ 293:
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
        console.log('Hello RatingsProvider Provider');
    }
    RatingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RatingsProvider);
    return RatingsProvider;
}());

//# sourceMappingURL=ratings.js.map

/***/ }),

/***/ 294:
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
        console.log('Hello ResultSurveysProvider Provider');
    }
    ResultSurveysProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ResultSurveysProvider);
    return ResultSurveysProvider;
}());

//# sourceMappingURL=result-surveys.js.map

/***/ }),

/***/ 295:
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
        console.log('Hello ApplySurveysProvider Provider');
    }
    ApplySurveysProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApplySurveysProvider);
    return ApplySurveysProvider;
}());

//# sourceMappingURL=apply-surveys.js.map

/***/ }),

/***/ 296:
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
        console.log('Hello ForumsProvider Provider');
    }
    ForumsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ForumsProvider);
    return ForumsProvider;
}());

//# sourceMappingURL=forums.js.map

/***/ }),

/***/ 297:
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
        console.log('Hello CommentsForumsProvider Provider');
    }
    CommentsForumsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CommentsForumsProvider);
    return CommentsForumsProvider;
}());

//# sourceMappingURL=comments-forums.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
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
                title: "Riesgos?",
                description: "<b>Detalle</b> aqui van los riesgos khzcgvejnf smcmb bdsbc,  aadgkdxxhbw.cf ,jdgs...<br><a href='#'>Leer más</a>",
                image: "assets/imgs/riesgos.png",
            },
            {
                title: "Metodos",
                description: "<b>Anticonceptivos</b> aqui van los metodos jasdiuscbukf jdghscisnd z,djgwsjnbc xjkesdnbv  j,wdgefd...<br><a href='#'>Leer más</a>",
                image: "assets/imgs/metodosa.png",
            },
            {
                title: "Causas",
                description: "The <b>Cuales</b> Causas por las cuales se dan los embarazos.<br><a href='#'>Leer más</a>",
                image: "assets/imgs/metodosa.png",
            }
        ];
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\principal\principal.html"*/'<ion-header>\n\n  <ion-navbar class="pf">\n\n    <button ion-button menuToggle class="burguer">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding class="containerPrin tutorial-page grid-basic-page">\n\n    <div id="separator">\n\n      <h1>Bienvenido a Prevé Ya</h1>\n\n      <div>\n\n          <ion-icon id="iconS" class="icon-search" name="md-search"></ion-icon>\n\n          <ion-input id="search" type="text" placeholder="Buscar"></ion-input>\n\n      </div>\n\n    </div>\n\n    <hr>\n\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let slide of slides">\n\n        <img [src]="slide.image" class="slide-image"/>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n        <p [innerHTML]="slide.description"></p>\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <!--div id="learning" class="container">\n\n    <div class="container">\n\n      <div id="div1">\n\n        <div class="boxes">\n\n          <img class="imgLearning" src="assets/imgs/riesgos.png">\n\n          <div>\n\n            <h4>riesgos</h4>\n\n            <p>aqui van los riesgos khzcgvejnf smcmb bdsbc, <br>  aadgkdxxhbw.cf ,jdgs...</p>\n\n            <a href="#">Leer más</a>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id="div2">\n\n        <div class="boxes">\n\n          <img class="imgLearning" src="assets/imgs/metodosa.png">\n\n          <div>\n\n            <h4>Metodos anticonveptivos</h4>\n\n            <p>aqui van los metodos jasdiuscbukf jdghscisnd <br> z,djgwsjnbc xjkesdnbv  j,wdgefd...</p>\n\n            <a href="#">Leer más</a>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id="div3">\n\n        <div class="boxes">\n\n            <img class="imgLearning" src="assets/imgs/metodosa.png">\n\n            <div>\n\n              <h4>Causas</h4>\n\n              <p>aqui van los metodos jasdiuscbukf jdghscisnd  <br>z,djgwsjnbc xjkesdnbv  j,wdgefd...</p>\n\n              <a href="#">Leer más</a>\n\n            </div>\n\n          </div>\n\n      </div>    \n\n    </div>\n\n    </div-->\n\n    <hr>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-10>\n\n          <button ion-button class="btns">Test de Probabilidad</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 48:
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
    ProviderUsersProvider.prototype.getUsers = function (id) {
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
        var headersPost = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var optionsPost = { headers: headersPost };
        var jsonA = JSON.stringify(json);
        return this.http.post(this.baseUrl + '/users', jsonA, optionsPost);
    };
    ProviderUsersProvider.prototype.putUser = function (json, id) {
        var jwt = localStorage.getItem("jwt");
        var headersPut = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        });
        var optionsPut = { headers: headersPut };
        var jsonPut = JSON.stringify(json);
        return this.http.put(this.baseUrl + '/users/' + id, jsonPut, optionsPut);
    };
    ProviderUsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProviderUsersProvider);
    return ProviderUsersProvider;
}());

//# sourceMappingURL=provider-users.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_users_provider_users__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_principal_principal__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(105);
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
                localStorage.setItem('user', JSON.stringify(dataUser["name"]));
                localStorage.setItem('idU', JSON.stringify(dataUser["id"]));
                _this.showInside(dataUser["name"]);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar style="background:#fff !important;">\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n  <ion-content padding class="grid-basic-page containerLog">\n\n  <img class="imgLogo" src="assets/imgs/LogoPreveYaBlanco.png">\n\n    <form id="formLogin">\n\n      <ion-item class="boxs">\n\n          <ion-icon class="iconL" name="md-person" item-start></ion-icon>\n\n          <ion-label class="lblL" floating>Usuario</ion-label>\n\n          <ion-input class="inpL" type="text" [(ngModel)]="userName" id="userName" name="userName"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="boxs">\n\n        <ion-icon class="iconL" name="ios-lock" item-start></ion-icon>\n\n        <ion-label class="lblL" floating>Contraseña</ion-label>\n\n        <ion-input class="inpL" type="password" [(ngModel)]="password" id="password" name="password"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-10>\n\n          <button ion-button class="btnLogin" round (click)="singIn()">Entrar</button>\n\n          <button ion-button class="btnLogin" round (click)="singUp()">Registrarse</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Proyecto fullstack\fedesoftFrontEnd\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_provider_users_provider_users__["a" /* ProviderUsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
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

},[209]);
//# sourceMappingURL=main.js.map