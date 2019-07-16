(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loginService) {
        var _this = this;
        this.loginService = loginService;
        loginService.me().subscribe(function (me) { return _this.user = me; });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _hotels_hotels_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hotels/hotels.module */ "./src/app/hotels/hotels.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                _hotels_hotels_module__WEBPACK_IMPORTED_MODULE_7__["HotelsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginService, _router) {
        this.loginService = loginService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.loginService.me()) {
            return true;
        }
        // navigate to login page
        this._router.navigate(['/login']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" container\">\r\n  <div class=\"row align-middle ml-5 mr-5 mt-5 mb-5\">\r\n    <h1>Welcome to Sparrow!</h1>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row align-middle ml-5 mr-5 mt-5 mb-5\">\r\n    <h3>Reserve a flight, hotel or rent a car.</h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row align-middle ml-5 mr-5 mt-5 mb-5\">\r\n    <div class=\"card col-md-4 d-flex align-items-center pt-2 pb-2\">\r\n      <div class=\"row order-1\">\r\n        <i id=\"icon\" class=\"fa fa-plane mb-2 mt-2 icon-big\"></i>\r\n      </div>\r\n      <div class=\"row order-2\">\r\n        <button class=\"btn btn-danger\">Flights</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card col-md-4 d-flex align-items-center pt-2 pb-2\">\r\n      <div>\r\n        <i class=\"fa fa-hotel mb-2 mt-2 icon-big\" style=\"\"></i>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-warning\" routerLink=\"/hotels\">Hotels</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card col-md-4 d-flex align-items-center pt-2 pb-2\">\r\n      <div>\r\n        <i class=\"fa fa-car mb-2 mt-2 icon-big\"></i>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-success \">Rent A Car</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row align-middle ml-5 mr-5 mt-5 mb-5 p-2\">\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n    <div class=\"card border-1 border-white col-md-4 d-flex align-items-center pt-2 pb-2\">\r\n      <div class=\"row m-3\">\r\n        <a class=\"btn btn-primary ml-3 pr-5 pl-5\" href = \"/login\">Sign in</a>\r\n      </div>\r\n      <div class=\"row m-2\">\r\n        <p>or</p>\r\n      </div>\r\n      <div class=\"row mr-3 mb-3 ml-3 mt-1\">\r\n        <button class=\"btn btn-success pr-5 pl-5\">Register now!</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.routing.module */ "./src/app/home/home.routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            ],
            providers: [_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home.routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeService = /** @class */ (function () {
    function HomeService() {
    }
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/hotel_details/hotel.details.component.html":
/*!************************************************************!*\
  !*** ./src/app/hotel_details/hotel.details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n          <h4 class=\"card-header font-weight-bold\">{{hotel.name}}\r\n            <span><i class=\"fa fa-star mr-1 ml-3\" style=\"color: yellow\"></i>{{hotel.rate}} -\r\n               <span class=\"badge badge-primary\" *ngIf=\"hotel.rate > 9 && hotel.rate <= 10\">excellent</span>\r\n               <span class=\"badge badge-success\" *ngIf=\"hotel.rate > 7 && hotel.rate <= 9\">very good</span>\r\n               <span class=\"badge badge-warning\" *ngIf=\"hotel.rate > 5 && hotel.rate <= 7\">good</span>\r\n               <span class=\"badge badge-dark\" *ngIf=\"hotel.rate < 5\">bad</span>\r\n            </span>\r\n          </h4>\r\n          <div class=\"card-body\">\r\n            <div class=\"row m-1\">\r\n              <img src=\"{{hotel.imagePath}}\" class=\"img img-thumbnail w-100 h-100\">\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <style type=\"text/css\">\r\n                  #map{\r\n                    width:100%;\r\n                    height:600px;\r\n                  }\r\n                </style>\r\n                <div id=\"map\">\r\n\r\n                </div>\r\n                <script>\r\n                  import 'ol/ol.css';\r\n                  import {Map, View} from 'ol';\r\n                  import TileLayer from 'ol/layer/Tile';\r\n                  import OSM from 'ol/source/OSM';\r\n\r\n                  const map = new Map({\r\n                    target: 'map',\r\n                    layers: [\r\n                      new TileLayer({\r\n                        source: new OSM()\r\n                      })\r\n                    ],\r\n                    view: new View({\r\n                      center: [0, 0],\r\n                      zoom: 0\r\n                    })\r\n                  });\r\n                </script>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h3>Rooms: </h3>\r\n          </div>\r\n          <div class=\"card-body\">\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/hotel_details/hotel.details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hotel_details/hotel.details.component.ts ***!
  \**********************************************************/
/*! exports provided: HotelDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailsComponent", function() { return HotelDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_hotels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-hotels */ "./src/app/mock-hotels.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelDetailsComponent = /** @class */ (function () {
    function HotelDetailsComponent(activatedRoute) {
        this.hotels = _mock_hotels__WEBPACK_IMPORTED_MODULE_1__["HOTELS"];
        this.hotel = this.hotels[activatedRoute.snapshot.paramMap.get("id")];
    }
    HotelDetailsComponent.prototype.ngOnInit = function () {
    };
    HotelDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hotel-details',
            template: __webpack_require__(/*! ./hotel.details.component.html */ "./src/app/hotel_details/hotel.details.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());



/***/ }),

/***/ "./src/app/hotels/hotels.component.html":
/*!**********************************************!*\
  !*** ./src/app/hotels/hotels.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 \">\r\n      <ul class=\"list-group-flush p-0\">\r\n        <div class=\"header-panel\">\r\n          <h2 class=\"m-2\">Hotels </h2>\r\n        </div>\r\n        <li class=\"list-group-item border-right-0\" *ngFor=\"let hotel of hotels\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"card\">\r\n              <h4 class=\"card-header font-weight-bold\">{{hotel.name}}</h4>\r\n              <div class=\"card-body\">\r\n                <div class=\"row m-1\">\r\n                  <img src=\"{{hotel.imagePath}}\" class=\"img img-thumbnail w-100 h-100\">\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <p>{{hotel.description}}</p><br>\r\n                    <span><i class=\"fa fa-star mr-1\"></i>{{hotel.rate}} -\r\n                          <span class=\"badge badge-primary\" *ngIf=\"hotel.rate > 9 && hotel.rate <= 10\">excellent</span>\r\n                          <span class=\"badge badge-success\" *ngIf=\"hotel.rate > 7 && hotel.rate <= 9\">very good</span>\r\n                          <span class=\"badge badge-warning\" *ngIf=\"hotel.rate > 5 && hotel.rate <= 7\">good</span>\r\n                          <span class=\"badge badge-dark\" *ngIf=\"hotel.rate < 5\">bad</span>\r\n                        </span><br>\r\n                    <div *ngIf=\"hotel.freeRooms\">\r\n                      <span style=\"color: forestgreen\">There are free rooms</span><br>\r\n                    </div>\r\n                    <div *ngIf=\"!hotel.freeRooms\"><span style=\"color: red\">Full</span></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <button class=\"btn btn-success mr-2\" routerLink=\"details/{{hotel.id}}\">Details</button>\r\n                <button *ngIf=\"hotel.freeRooms\" class=\"btn btn-primary\">Book</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-4 mt-5\">\r\n      <div class=\"mt-4\"></div>\r\n      <div class=\"card \">\r\n        <div class=\"card-header\">\r\n          <h5>Sign In</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"container login-container\">\r\n            <div class=\"row align-middle\">\r\n              <div class=\"col-md-12 login-form\">\r\n                <form>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Your Email *\" value=\"\"/>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Your Password *\" value=\"\"/>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"submit\" class=\"btn btn-info\" value=\"Login\"/>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <a href=\"#\" class=\"ForgetPwd\">Forget Password?</a>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hotels/hotels.component.ts":
/*!********************************************!*\
  !*** ./src/app/hotels/hotels.component.ts ***!
  \********************************************/
/*! exports provided: HotelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsComponent", function() { return HotelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_hotels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-hotels */ "./src/app/mock-hotels.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelsComponent = /** @class */ (function () {
    function HotelsComponent() {
        this.hotels = _mock_hotels__WEBPACK_IMPORTED_MODULE_1__["HOTELS"];
    }
    HotelsComponent.prototype.ngOnInit = function () {
    };
    HotelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hotels',
            template: __webpack_require__(/*! ./hotels.component.html */ "./src/app/hotels/hotels.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HotelsComponent);
    return HotelsComponent;
}());



/***/ }),

/***/ "./src/app/hotels/hotels.module.ts":
/*!*****************************************!*\
  !*** ./src/app/hotels/hotels.module.ts ***!
  \*****************************************/
/*! exports provided: HotelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsModule", function() { return HotelsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hotels_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotels.routing.module */ "./src/app/hotels/hotels.routing.module.ts");
/* harmony import */ var _hotels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hotels.component */ "./src/app/hotels/hotels.component.ts");
/* harmony import */ var _hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hotel_details/hotel.details.component */ "./src/app/hotel_details/hotel.details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HotelsModule = /** @class */ (function () {
    function HotelsModule() {
    }
    HotelsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _hotels_routing_module__WEBPACK_IMPORTED_MODULE_1__["HotelsRoutingModule"]
            ],
            declarations: [
                _hotels_component__WEBPACK_IMPORTED_MODULE_2__["HotelsComponent"],
                _hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_3__["HotelDetailsComponent"]
            ]
        })
    ], HotelsModule);
    return HotelsModule;
}());



/***/ }),

/***/ "./src/app/hotels/hotels.routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/hotels/hotels.routing.module.ts ***!
  \*************************************************/
/*! exports provided: HotelsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsRoutingModule", function() { return HotelsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hotel_details/hotel.details.component */ "./src/app/hotel_details/hotel.details.component.ts");
/* harmony import */ var _hotels_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotels.component */ "./src/app/hotels/hotels.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'hotels', component: _hotels_component__WEBPACK_IMPORTED_MODULE_3__["HotelsComponent"] },
    { path: 'hotels/details/:id', component: _hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_2__["HotelDetailsComponent"] }
];
var HotelsRoutingModule = /** @class */ (function () {
    function HotelsRoutingModule() {
    }
    HotelsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HotelsRoutingModule);
    return HotelsRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\r\n  <div class=\"row align-middle\">\r\n    <div class=\"col-md-6 login-form-1 ml-auto mr-auto\">\r\n      <h3>Login</h3>\r\n      <form name=\"login\" action=\"/perform_login\" method=\"POST\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Your Email *\" value=\"\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Your Password *\" value=\"\"/>\r\n        </div>\r\n        <label *ngIf=\"error\" class=\"error\">{{error}}</label>\r\n        <div class=\"form-group\">\r\n          <input type=\"submit\" class=\"btnSubmit\" value=\"Login\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <a href=\"#\" class=\"ForgetPwd\">Forget Password?</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(route) {
        this.route = route;
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.error = this.route.snapshot.queryParamMap.get('error');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.routing.module */ "./src/app/login/login.routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login.routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.getMeLocation = "/api/user/me";
        this.userMe = null;
        this.userMe = this.fetchMe();
    }
    LoginService.prototype.fetchMe = function () {
        return this.http.get(this.getMeLocation);
    };
    LoginService.prototype.me = function () {
        return this.userMe;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/mock-hotels.ts":
/*!********************************!*\
  !*** ./src/app/mock-hotels.ts ***!
  \********************************/
/*! exports provided: HOTELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOTELS", function() { return HOTELS; });
var HOTELS = [
    {
        id: 0,
        name: 'The Plaza, New York',
        description: 'Opened in 1907 and designated an official landmark in 1969, The Plaza is arguably the most famous hotel in New York.\n' +
            'Located on Fifth Avenue and Central Park South, the 20-story building is the setting of the 1950s "Eloise" children\'s book series and the backdrop for ' +
            'classic films such as "Funny Girl," "The Great Gatsby" and "Home Alone 2: Lost in New York."\n' +
            'Notable guests have included Liza Minnelli, Eleanor Roosevelt, Miles Davis and The Beatles. The hotel offers weekly tours of its interior to the public,' +
            ' led by an architectural historian.',
        rate: 8.9,
        freeRooms: true,
        imagePath: "/assets/hotel_images/hotel_plaza.jpg"
    },
    {
        id: 1,
        name: 'Hotel Ritz Paris',
        description: 'Famously the headquarters of Coco Chanel, Ernest Hemingway and Ingrid Bergman, the legendary Hotel Ritz Paris has set the standard for luxury hotels since its 1898 opening.\n' +
            'Located by the Tuileries gardens and overlooking Place Vendome, it was declared "the most romantic hotel in the world" by Sophia Loren.\n' +
            'Besides its A-list clientele and silver screen cameos -- it\'s starred in classics like "Funny Face," "Love in the Afternoon" and "How to Steal a Million"' +
            ' -- the hotel is renowned for its lavish belle epoque decor, crystal chandeliers and impeccable white-glove service.',
        rate: 9.0,
        freeRooms: false,
        imagePath: "/assets/hotel_images/hotel_ritz.jpg"
    },
    {
        id: 2,
        name: 'Claridge\'s, London',
        description: 'Opened in 1898, this Mayfair institution has been the London residence of Cary Grant, Audrey Hepburn and Yul Brynner.' +
            'During World War II, it was the haven for countless dignitaries and heads of state.' +
            ' In fact, Suite 212 was declared Yugoslavian territory in June 1945 so that Crown Prince Alexander II could be born on his own country\'s soil.',
        rate: 5.4,
        freeRooms: true,
        imagePath: "/assets/hotel_images/claridges.jpg"
    },
    {
        id: 3,
        name: 'Raffles, Singapore',
        description: 'Named after Stamford Raffles, the founder of Singapore, this opulent, colonial-style hotel had surprisingly humble beginnings: It was originally built as a small 10-room bungalow.\n' +
            'It\'s now arguably the most famous hotel in Asia and, more than 125 years after opening, was declared a national monument.\n' +
            'In addition to hosting literati such as Hemingway, Alfred Hitchcock and Rudyard Kipling (who penned "The Jungle Book" while residing in one of its suites),' +
            ' the hotel is the birthplace of the famed Singapore Sling cocktail.',
        rate: 6.7, freeRooms: false,
        imagePath: "/assets/hotel_images/raffles.jpg"
    },
    {
        id: 4,
        name: 'Taj Mahal Palace, India',
        description: 'Built in 1903, the Taj Mahal Palace is Mumbai\'s first harbor landmark, the site of the first licensed bar in the city ' +
            '(the Harbour Bar, which still stands) and the first hotel in India to have steam elevators.',
        rate: 9.7,
        freeRooms: false,
        imagePath: "/assets/hotel_images/tajmahal.jpg"
    },
    {
        id: 5,
        name: 'Beverly Hills Hotel, Los Angeles',
        description: 'The Beverly Hills Hotel, built in 1912, is as glamorous as its A-list clientele. Guests have included Marilyn Monroe, John Wayne, Richard Burton and Elizabeth Taylor.\n' +
            'In 1948, the hotel\'s exterior was painted its distinctive pink to mirror the color of the sunset; it was later featured on the cover of the Eagles\' "Hotel California" album.\n' +
            'The hotel, located on Sunset Boulevard, was named the first historic landmark in Beverly Hills.',
        rate: 9.3,
        freeRooms: false,
        imagePath: "/assets/hotel_images/beverly_hills.jpg"
    },
    {
        id: 6,
        name: 'Peninsula Hong Kong',
        description: 'Known as the "Grand Dame of the East," the Peninsula Hong Kong is the flagship property of Peninsula Hotels. In fact, ' +
            'the hotel\'s name was inspired by its location at the southern tip of the Kowloon Peninsula.\n' +
            'Since its opening in 1928, the Peninsula has set the standard for luxury in Hong Kong, from its glossy fleet of green Rolls Royce Phantoms to the private jet available for guest use.',
        rate: 6.1,
        freeRooms: false,
        imagePath: "/assets/hotel_images/peninsula.jpg"
    },
    {
        id: 7,
        name: 'The Shelbourne Hotel, Dublin',
        description: 'Located on St. Stephen\'s Green in the heart of Dublin, the lavish Shelbourne Hotel is Ireland\'s oldest and most historic hotel, built in 1824.\n' +
            'In 1916, it was taken over by British troops during the Easter Rebellion, and it served as a hub of military activity during World War I.\n' +
            'In 1922, the Irish Constitution was drawn up in Room 112 (now known as the Constitution Room).',
        rate: 10.0,
        freeRooms: true,
        imagePath: "/assets/hotel_images/shelbourne.jpg"
    },
    {
        id: 8,
        name: 'The Ritz Hotel London',
        description: 'The Ritz Hotel, built in 1906, was London\'s first steel structure and the first hotel in the city to have bathrooms in every guest room.\n' +
            'Over its 109-year history, patrons have included nobles like King Edward VIII and movie stars like Charlie Chaplin.\n' +
            'Winston Churchill, Charles de Gaulle and President Eisenhower also famously used the hotel as a regular meeting point during World War II.',
        rate: 8.9,
        freeRooms: true,
        imagePath: "/assets/hotel_images/ritz.jpg"
    },
    {
        id: 9,
        name: 'New Yorker',
        description: 'The Wyndham New Yorker Hotel is a historic hotel located at 481 Eighth Avenue in New York City, United States. The 43-story Art Deco hotel, opened 1930, is a 1,083-room,' +
            ' mid-priced hotel located in Manhattan\'s Garment District and Hell\'s Kitchen areas, near Pennsylvania Station, Madison Square Garden, Times Square, and the Empire State Building.',
        rate: 6.7,
        freeRooms: false,
        imagePath: "/assets/hotel_images/newyorker.jpg"
    }
];


/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark mt-2\">\r\n  <div class=\"container\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\"><b>Sparrow</b>\r\n    <i class=\"fa fa-plane ml-2 mb-2 mt-2 icon-small\" style=\"\"></i>\r\n    <i class=\"fa fa-hotel ml-2 mb-2 mt-2 icon-small\" style=\"\"></i>\r\n    <i class=\"fa fa-car ml-2 mb-2 mt-2 icon-small\" style=\"\"></i>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample03\" aria-controls=\"navbarsExample03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Flights</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/hotels\">Hotels</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Rent-A-Car</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">About</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Contact Us</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-md-0\">\r\n      <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\r\n    </form>\r\n  </div>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\sparrow\frontend\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map