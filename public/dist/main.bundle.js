webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.data = {
            name: '',
            comment: '',
            email: ''
        };
    }
    ApiService.prototype.send_comment = function (form) {
        this.data.name = form.value.name;
        this.data.comment = form.value.comment;
        this.data.email = form.value.email;
        console.log("SERVICE", this.data);
        return this.http.post('/send_comment', this.data).subscribe(function (err) {
            console.log(err);
        });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sent_sent_component__ = __webpack_require__("../../../../../src/app/sent/sent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'homepage/contact', redirectTo: 'contact' },
    { path: 'sent/homepage', redirectTo: 'homepage' },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'sent', component: __WEBPACK_IMPORTED_MODULE_5__sent_sent_component__["a" /* SentComponent */] },
    { path: 'homepage/projects', redirectTo: 'projects' },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__["a" /* ProjectsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sent_sent_component__ = __webpack_require__("../../../../../src/app/sent/sent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sent_sent_component__["a" /* SentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " #contact{\n    padding:10px 0 10px;\n  }\n\n  .contact-text{\n    margin:45px auto;\n  }\n\n  .mail-message-area{\n    width:100%;\n    padding:0 15px;\n  }\n\n  .mail-message{\n    width: 100%;\n    background:rgba(255,255,255, 0.8) !important;\n    transition: all 0.7s;\n    margin:0 auto;\n    border-radius: 0;\n  }\n\n  .not-visible-message{\n    height:0px;\n    opacity: 0;\n  }\n\n  .visible-message{\n    height:auto;\n    opacity: 1;\n    margin:25px auto 0;\n  }\n\n/* Input Styles */\n\n  .form{\n    width: 100%;\n    padding: 15px;\n    background:lightgray;\n    border:1px solid rgba(0, 0, 0, 0.075);\n    margin-bottom:25px;\n    color:#727272 !important;\n    font-size:13px;\n    transition: all 0.4s;\n  }\n\n  .form:hover{\n    border:1px solid red\n  }\n\n  .form:focus{\n    color: white;\n    outline: none;\n    border:1px solid red;\n  }\n\n  .textarea{\n    height: 200px;\n    max-height: 200px;\n    max-width: 100%;\n  }\n  \n/* Generic Button Styles */\n\n  .button{\n    padding:8px 12px;\n    background:#0A5175;\n    display: block;\n    width:120px;\n    margin:10px 0 0px 0;\n    border-radius:3px;\n    transition: all 0.3s;\n    text-align:center;\n    font-size:0.8em;\n    box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);\n    -moz-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);\n    -webkit-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);\n  }\n\n  .button:hover{\n    background:#8BC3A3;\n    color:white;\n  }\n\n/* Send Button Styles */\n\n  .form-btn{\n    width:180px;\n    display: block;\n    height: auto;\n    padding:15px;\n    color:#fff;\n    background:lightcoral;\n    border:none;\n    border-radius:3px;\n    outline: none;\n    transition: all 0.3s;\n    margin:auto;\n    box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);\n    -moz-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);\n    -webkit-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);\n  }\n\n  /*.form-btn:hover{\n    background:#111;\n    color: white;\n    border:none;\n  }*/\n\n  .form-btn:active{\n    opacity: 0.9;\n  }\ncenter{\n  margin-top:330px;\n}\ninput {\n    position: relative;\n    z-index: 9999;\n}\n\n.btop{\n    margin-top: 10%;\n}\n.x{\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner contact btop\">\n  <!-- Form Area -->\n  <div class=\"contact-form\">\n    <!-- Form -->\n    <form id=\"contact-us\" name=\"formData\"  (submit)=\"send_comment(formData)\"  #formData=\"ngForm\">\n      <!-- Left Inputs -->\n      <div class=\"col-xs-6 wow animated slideInLeft\" data-wow-delay=\".5s\">\n        <!-- Name -->\n        <input type=\"text\" name=\"name\" id=\"name\" required=\"required\" class=\"form\" placeholder=\"Name\" [(ngModel)]=\"data.name\" #name=\"ngModel\"/>\n        <!-- Email -->\n        <input type=\"text\" name=\"email\" id=\"email\" class=\"form\" placeholder=\"Email (optional)\" [(ngModel)]=\"data.email\" #email=\"ngModel\"/>\n        <!-- Subject -->\n        <input type=\"text\" name=\"subject\" id=\"subject\" hidden class=\"form\" placeholder=\"Subject\" value=\"portfolio comment\" />\n      </div><!-- End Left Inputs -->\n                        \n                        \n      <!-- Right Inputs -->\n      <div class=\"col-xs-6 wow animated slideInRight\" data-wow-delay=\".5s\">\n        <!-- Message -->\n        <textarea name=\"comment\" id=\"message\" class=\"form textarea\"  required placeholder=\"Comment\" [(ngModel)]=\"data.comment\" #comment=\"ngModel\"></textarea>\n      </div><!-- End Right Inputs -->\n                        \n                        \n      <!-- Bottom Submit -->\n      <div class=\"relative fullwidth col-xs-12 text-center\">\n        <!-- Send Button -->\n        <button [disabled]=\"!formData.valid\" type=\"submit\" id=\"submit\" name=\"submit\" class=\"form-btn semibold\">Leave a Comment</button><br> \n        <span class=\"x text-center\" *ngIf=\"!formData.valid\">Name and comment field is required before submission!</span>\n      </div><!-- End Bottom Submit -->\n                  \n      <!-- Clear -->\n      <div class=\"clear\"></div>\n    </form>\n\n    <!-- Your Mail Message -->\n    <div class=\"mail-message-area\">\n      <!-- Message -->\n      <div class=\"alert gray-bg mail-message not-visible-message\">\n        <strong>Thank You !</strong> Your email has been delivered.\n      </div>\n    </div>\n\n  </div><!-- End Contact Form Area -->\n</div><!-- End Inner -->"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(service, router) {
        this.service = service;
        this.router = router;
        this.data = {
            name: '',
            comment: '',
            email: ''
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.send_comment = function (form) {
        this.service.send_comment(form);
        this.router.navigate(['sent']);
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "  <header>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <!-- header Nav Start -->\n          <nav class=\"navbar navbar-default\">\n            <div class=\"container-fluid\">\n              <!-- Brand and toggle get grouped for better mobile display -->\n              <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"index.html\">\n                  <br><a href=\"https://github.com/bmlam89\">Github</a>\n                  <a href=\"https://www.linkedin.com/in/bmlam1\">LinkedIn</a>\n                </a>\n              </div>\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                  <ul class=\"nav navbar-nav navbar-right\">\n                    <!--<li><a href=\"index.html\">Home</a></li>\n                    <li><a href=\"work.html\">Work</a></li>-->\n                    <li><a [routerLink]=\"['projects']\">Passion Projects</a></li>\n                    <li><a [routerLink]=\"['contact']\">Contact Me</a></li>\n                    <!--<li><a href=\"contact.html\">Contact</a></li>-->\n                  </ul>\n                </div><!-- /.navbar-collapse -->\n              </div><!-- /.container-fluid -->\n            </nav>\n          </div>\n        </div>\n      </div>\n    </header><!-- header close -->\n        \n    <!-- Slider Start -->\n    <section id=\"slider\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n            <div class=\"block\">\n              <h1 class=\"animated fadeInUp text-center\">A PORTFOLIO ABOUT WHO I AM AND MY PERSONAL ACCOMPLISHMENTS <br> </h1>\n              <p class=\"animated fadeInUp text-center\">My goal is to show others a preview of my skillset and capabilities while giving others the opportunity to learn more about me. <br> </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- Wrapper Start -->\n    <section id=\"intro\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-7 col-sm-12\">\n            <div class=\"block\">\n              <div class=\"section-title\">\n                <h2>About This Site</h2>\n              </div>\n              <p>The aesthetics of this portfolio is due in large part to the templates offered by Dcrazed. With a layout that closely matched my sense of style, I was successfully able to integrate all folders and files associated with this template layout into my application. Frameworks involved in this application are Express, NodeJS, and Angular. The next few slides will give a little more information about who I am, projects I've done, and a chance for visitors to drop a comment or just leave feedback.  </p>\n            </div>\n          </div><!-- .col-md-7 close -->\n          <div class=\"col-md-5 col-sm-12\">\n            <div class=\"block\">\n              <img src=\"../../assets/img/wrapper-img.gif\" alt=\"Img\">\n            </div>\n          </div><!-- .col-md-5 close -->\n        </div>\n      </div>\n    </section>\n\n  <section id=\"feature\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-6\">\n          <h2>SEEING IS BELIEVING</h2>\n          <p>I am proud to showcase some of my work. Although the presentation of some may not be aesthetically pleasing, I am proude to put them on display due to the challenges I had to overcome in completeing my goals at hand. Each project is implemented in either JavaScript or Python and involves the use of a JS or Python based framework.</p>\n          <a [routerLink]=\"['projects']\" class=\"btn btn-view-works\">View Works</a>\n        </div>\n      </div>\n    </div>\n  </section>\n        \n    <!-- Service Start -->\n    <section id=\"service\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"section-title\">\n            <h2>Passions Interests and Goals</h2>\n            <p>Below are small snippets about myself that I hope gives viewers a small glimpse of who I am on a personal level.</p>\n          </div>\n        </div>\n        <div class=\"row \">\n          <div class=\"col-sm-6 col-md-3\">\n            <div class=\"service-item\">\n              <i class=\"icon ion-ios-americanfootball\"></i>\n              <h4>I'm the Champ!</h4>\n              <p>Fantasy Football! One of my favorite activities during the season. </p>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <div class=\"service-item\">\n              <i class=\"ion-ios-basketball\"></i>\n              <h4>Ball is Life</h4>\n              <p>Basketball. Playing and watching! It's never too late to jump on the bandwagon. </p>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <div class=\"service-item\">\n              <i class=\"ion-ios-people\"></i>\n              <h4>Friends & Family</h4>\n              <p>As they say, friends and family are the most important things in life. </p>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <div class=\"service-item\">\n              <i class=\"ion-social-apple\"></i>\n              <h4>Stay Hungry, Stay Foolish.</h4>\n              <p>Steve Jobs couldn't have said it better. I will always feel like there's room for growth - personal and professional.</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <div class=\"service-item\">\n              <i class=\"ion-cash\"></i>\n              <h4>Baller Is Life</h4>\n              <p>Is it a crime to want to put myself in a financially successful position for the future?</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <div class=\"service-item\">\n              <i class=\"ion-social-angular-outline\"></i>\n              <h4>Lead the Way</h4>\n              <p>Technology is always changing. Learning new frameworks and languages and constantly improving is always on my mind.</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <div class=\"service-item\">\n              <i class=\"ion-map\"></i>\n              <h4>Not All Who Wander Are Lost</h4>\n              <p>Traveling and exploring new things in life has always been one of my greatest passions. </p>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <div class=\"service-item\">\n              <i class=\"ion-social-instagram\"></i>\n              <h4>Creative Thinking Inspires Ideas. Ideas Inspire Change</h4>\n              <p>Just like any great idea that's had a large impact on my life, I want to stand fully stand behind my own and the projects I create.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- Call to action Start -->\n    <section id=\"call-to-action\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"block\">\n              <h2>Let's Get to Know Each Other</h2>\n              <p>I'd love to hear feedback or any comments in general. Maybe even a little about yourself as well. Don't be afraid to leave a message (this feature is fully functional)!</p>\n              <a class=\"btn btn-default btn-call-to-action\" [routerLink]=\"['contact']\" >Leave a Comment!</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- Content Start -->\n    <section id=\"testimonial\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"section-title text-center\">\n            <h2>More About this Portfolio</h2>\n            <p>Thanks for visiting. Hope to hear from you soon!</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"block\">\n              <ul class=\"counter-box clearfix\">\n                <li>\n                  <div class=\"block\">\n                    <i class=\"ion-social-javascript\"></i>\n                    <h4 class=\"counter\">3</h4>\n                    <span>Languages Used</span>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"block\">\n                    <i class=\"ion-social-angular\"></i>\n                    <h4 class=\"counter\">3</h4>\n                    <span>Frameworks Used</span>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"block\">\n                    <i class=\"ion-ios-calendar-outline\"></i>\n                    <h4 class=\"counter\">4</h4>\n                    <span>Days Spent</span>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"block\">\n                    <i class=\"ion-happy\"></i>\n                    <h4 class=\"counter\">0</h4>\n                    <span>Tears Shed</span>\n                  </div>\n                </li>\n\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"testimonial-carousel\">\n              <div id=\"testimonial-slider\" class=\"owl-carousel\">\n                <div>\n                    <img src=\"../../assets/img/cotation.png\" alt=\"IMG\">\n                    <p>Project Component is still a work in progress. They have yet to be deployed.</p>\n                    <div class=\"user\">\n                      <!--<img src=\"../../assets/img/item-img1.jpg\" alt=\"Pepole\">-->\n                      <!--<p><span>Rose Ray</span> CEO</p>-->\n                    </div>\n                </div>\n                <div>\n                  <img src=\"../../assets/img/cotation.png\" alt=\"IMG\">\n                    <p>This was deployed using AWS. I am in no way an expert on nginx and AWS. Still trying to improve in this area.</p>\n                    <div class=\"user\">\n                      <!--<img src=\"../../assets/img/item-img1.jpg\" alt=\"Pepole\">-->\n                      <!--<p><span>Rose Ray</span> CEO</p>-->\n                    </div>\n                </div>\n                <div>\n                  <img src=\"../../assets/img/cotation.png\" alt=\"IMG\">\n                    <p>My framework of choice has been Angular due to how powreful it is. I am able also able to utilize Django and Flask.</p>\n                    <div class=\"user\">\n                      <!--<img src=\"../../assets/img/item-img1.jpg\" alt=\"Pepole\">-->\n                      <!--<p><span>Rose Ray</span> CEO</p>-->\n                    </div>\n                </div>\n                <div>\n                  <img src=\"../../assets/img/cotation.png\" alt=\"IMG\">\n                    <p>Just a small project that I hope gives others a small preview of what I can offer.</p>\n                    <div class=\"user\">\n                      <!--<img src=\"../../assets/img/item-img1.jpg\" alt=\"Pepole\">-->\n                      <!--<p><span>Rose Ray</span> CEO</p>-->\n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n\n\n\n\n\n\n\n    \n    <!-- footer Start -->\n    <footer>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"footer-manu\">\n              Huge shoutout to Dcrazed for providing such a clean cut template!\n            </div>\n            <p>Copyright &copy; Crafted by <a href=\"https://dcrazed.com/\">Dcrazed</a>.</p>\n          </div>\n        </div>\n      </div>\n    </footer>\n            \n            \n  <script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1\"></' + 'script>')</script>\n            "

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".x{\n    margin-left: 9%;\n    margin-top: 3%;\n}\n\n.y{\n    margin-left: 5%;\n    margin-top: 3%;\n}\n\n.youtube-player{\nborder: 1px solid #1D740C;\nheight: 300px;\nwidth: 300px;\npadding: 0px;\n/*margin-left: 25px;\nmargin-bottom: 25px;\n/*border-radius: 50%;\n-moz-border-radius: 50%;\n-webkit-border-radius: 50%;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\n    <div class=\"col-sm-3 x\">\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/fyM_k3zvKAA\" frameborder=\"0\" gesture=\"media\" allowfullscreen class=\"youtube-player\" ></iframe>      \n        <p><strong>Description:</strong> Simple group messaging web application.<br>\n        <strong>Technologies Used:</strong> Express, NodeJS, jQuery, Socket.Io\n      </p>\n    </div>\n    <div class=\"col-sm-3 y\">\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/r19ljwh279w\" frameborder=\"0\" gesture=\"media\" allowfullscreen class=\"youtube-player\"></iframe>        \n        <p><strong>Description:</strong> Course management web application<br>\n        <strong>Technologies Used:</strong> Python, Django, HTML, CSS, MySQL, bootstrap\n    </div> \n    <!--<div class=\"col-sm-3 y\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/xu4l08Pkwh8\" frameborder=\"0\" allowfullscreen class=\"youtube-player\"></iframe>\n      <p><strong>Description:</strong> Commerce site where users can sell general products.<br>\n        Users can post multiple products and remove or update a posting if they change their mind.<br>\n      <strong>Technologies Used:</strong> Express, NodeJS, jQuery, Angular   </div>  -->\n  </div>\n\n  <!--<div class=\"row\">\n    <div class=\"col-sm-3 x\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/xu4l08Pkwh8\" frameborder=\"0\" allowfullscreen class=\"youtube-player\"></iframe>\n      <p><strong>Description:</strong> Simple group messaging web application.<br>\n      <strong>Technologies Used:</strong> Express, NodeJS, jQuery, Socket.Io    </div>\n    <div class=\"col-sm-3 y\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/xu4l08Pkwh8\" frameborder=\"0\" allowfullscreen class=\"youtube-player\"></iframe>\n      <p><strong>Description:</strong> Simple group messaging web application.<br>\n      <strong>Technologies Used:</strong> Express, NodeJS, jQuery, Socket.Io    </div>    \n  </div>-->\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sent/sent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\n    background-color:#eee;\n    width:1400px;\n    height:1400px;   \n}\n\n.x{\n    background-color: lightcoral;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sent/sent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container wrapper text-center\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\">Thanks for the feedback!</h1>\n    <p class=\"lead\">Rest assured - I go over and appreciate anyone who sends any feedback!</p>\n    \n    <p class=\"lead\">\n      <a class=\"btn x\" [routerLink]=\"['homepage']\" role=\"button\">Continue to homepage</a>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sent/sent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SentComponent = (function () {
    function SentComponent() {
    }
    SentComponent.prototype.ngOnInit = function () {
    };
    SentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sent',
            template: __webpack_require__("../../../../../src/app/sent/sent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sent/sent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SentComponent);
    return SentComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map