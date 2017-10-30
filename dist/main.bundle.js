webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".branch-form{\n   top: -400px;\n}\n.logo {\n  position: absolute;\n  left: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <mat-grid-list cols=\"12\" rowHeight=\"100px\" class=\"logo-bar\">\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"11\" [rowspan]=\"1\" (click)=\"showBranchForm()\" >\n      <div class=\"logo\">\n        <img  align=\"left\" src=\"/assets/images/emiratesnbd.png\" alt=\"Emirates NBD\">\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</header>\n\n<mat-grid-list cols=\"12\" rowHeight=\"700px\" (window:resize)=\"onResize($event.currentTarget.self.innerWidth)\">\n  <mat-grid-tile [colspan]=\"body.left\" [rowspan]=\"1\" [style.background]=\"'white'\">\n  </mat-grid-tile>\n\n  <mat-grid-tile [colspan]=\"body.center\" [rowspan]=\"1\" [style.background]=\"'white'\">\n\n    <!-- {{state}} -->\n    <mat-card [@divBranch]=\"state\" class=\"branch-form\" >\n      <mat-card-content>\n\n        <app-branch  [showVerticalStepper]=\"isVerticalStepper()\" ></app-branch>\n      </mat-card-content>\n    </mat-card>\n\n\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"body.right\" [rowspan]=\"1\" [style.background]=\"'white'\">\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'app';
        this.state = 'one';
        this.crshowVerticalStepper = false;
        this.body = { left: 0, center: 12, right: 0, width: 1200 };
        setTimeout(function () {
            _this.showBranchForm();
        }, 310);
        this.onResize(innerWidth);
    }
    AppComponent.prototype.showBranchForm = function () {
        var _this = this;
        console.log("showBranchForm");
        this.state == 'one' ? this.state = 'two' : this.state = 'one';
        setTimeout(function () { return _this.state = 'three'; }, 250);
    };
    AppComponent.prototype.showBranchNextForm = function () {
        var _this = this;
        console.log("showBranchNextForm");
        this.state == 'three' ? this.state = 'four' : this.state = 'three';
        setTimeout(function () {
            _this.showBranchForm();
        }, 210);
    };
    AppComponent.prototype.onResize = function (wdwidth) {
        //lg1
        this.body.width = wdwidth;
        if (wdwidth >= 1200) {
            this.body.left = 1;
            this.body.center = 10;
            this.body.right = 1;
            this.crshowVerticalStepper = false;
        } //lg
        else if (wdwidth < 1200 && wdwidth >= 1112) {
            this.body.left = 1;
            this.body.center = 11;
            this.body.right = 0;
            this.crshowVerticalStepper = false;
        } //mat1
        else if (wdwidth < 1112 && wdwidth >= 1010) {
            this.body.left = 0;
            this.body.center = 12;
            this.body.right = 0;
            this.crshowVerticalStepper = false;
        } //mat
        else if (wdwidth < 1010 && wdwidth >= 940) {
            this.body.left = 0;
            this.body.center = 12;
            this.body.right = 0;
            this.crshowVerticalStepper = false;
        } //sm1
        else if (wdwidth < 940 && wdwidth >= 830) {
            this.body.left = 0;
            this.body.center = 12;
            this.body.right = 0;
            this.crshowVerticalStepper = true;
        } //sm
        else if (wdwidth < 830 && wdwidth >= 730) {
            this.body.left = 0;
            this.body.center = 12;
            this.body.right = 0;
            this.crshowVerticalStepper = true;
        } //xs2
        else if (wdwidth < 730 && wdwidth >= 577) {
            this.body.left = 0;
            this.body.center = 12;
            this.body.right = 0;
            this.crshowVerticalStepper = true;
        } //xs1
        else if (wdwidth < 577 && wdwidth >= 484) {
            this.body.left = 0;
            this.body.center = 12;
            this.body.right = 0;
            this.crshowVerticalStepper = true;
        } //xs
        else if (wdwidth >= 100 && wdwidth < 484) {
            this.body.left = 0;
            this.body.center = 12;
            this.body.right = 0;
            this.crshowVerticalStepper = true;
        }
    };
    AppComponent.prototype.isVerticalStepper = function () {
        return this.crshowVerticalStepper;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('divBranch', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('one', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    'background-color': 'white',
                    transform: 'translateY(-100px) scale(0.4)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('two', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    'background-color': 'white',
                    transform: 'translateY(240px) scale(0.5)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('three', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    'background-color': 'white',
                    transform: 'translateY(300px) scale(1)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('four', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    'background-color': 'white',
                    transform: 'translateY(0px) scale(1)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('one => two', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                        borderRadius: '200px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])(400)
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('two => three', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])(300)),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('three => four', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])(300)),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('four => one', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])(200))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs_hammer__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs_hammer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs_hammer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__branch_branch_component__ = __webpack_require__("../../../../../src/app/branch/branch.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__branch_branch_component__["a" /* BranchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/branch/branch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".branch-form {\n  min-width: 500px;\n  max-width: 800px;\n  width: 100%;\n}\n\n.branch-full-width {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/branch/branch.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-horizontal-stepper [linear]=\"isLinear\" *ngIf=\"!showVerticalStepper\">\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Select the branch {{showVerticalStepper}}</ng-template>\n      <mat-form-field class=\"branch-full-width\">\n        <input matInput placeholder=\"Branch\"  [matAutocomplete]=\"auto\" formControlName=\"firstCtrl\" required>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let branch of filteredBranch | async\" [value]=\"branch.branchName\">\n            <span>{{ branch.branchName }}</span> |\n            <small>Category: {{branch.branchCat}}</small>\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Select the branch type</ng-template>\n\n      <mat-form-field >\n        <mat-select placeholder=\"Branch type\" [(ngModel)]=\"selectedbranchTypeValue\" name=\"branchType\" formControlName=\"secondCtrl\" required>\n          <mat-option *ngFor=\"let type of branchType\" [value]=\"type.value\">\n            {{type.value}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"thirdFormGroup\">\n    <form [formGroup]=\"thirdFormGroup\">\n      <ng-template matStepLabel>Select the branch version</ng-template>\n\n      <mat-form-field >\n        <mat-select placeholder=\"Branch version\" [(ngModel)]=\"selectedbranchVersionValue\" name=\"branchType\" formControlName=\"thirdCtrl\" required>\n          <mat-option *ngFor=\"let version of branchVersion\" [value]=\"version.value\">\n            {{version.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Select the branch tag</ng-template>\n\n    <mat-selection-list #tags>\n      <mat-list-option *ngFor=\"let tag of branchTag\">\n        {{tag}}\n      </mat-list-option>\n    </mat-selection-list>\n\n    <p>\n    Options selected: {{tags.selectedOptions.selected.length}}\n    </p>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n\n<mat-vertical-stepper [linear]=\"isLinear\" *ngIf=\"showVerticalStepper\">\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Select the branch</ng-template>\n      <mat-form-field class=\"branch-full-width\">\n        <input matInput placeholder=\"Branch\"  [matAutocomplete]=\"auto\" formControlName=\"firstCtrl\" required>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let branch of filteredBranch | async\" [value]=\"branch.branchName\">\n            <span>{{ branch.branchName }}</span> |\n            <small>Category: {{branch.branchCat}}</small>\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Select the branch type</ng-template>\n\n      <mat-form-field >\n        <mat-select placeholder=\"Branch type\" [(ngModel)]=\"selectedbranchTypeValue\" name=\"branchType\" formControlName=\"secondCtrl\" required>\n          <mat-option *ngFor=\"let type of branchType\" [value]=\"type.value\">\n            {{type.value}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"thirdFormGroup\">\n    <form [formGroup]=\"thirdFormGroup\">\n      <ng-template matStepLabel>Select the branch version</ng-template>\n\n      <mat-form-field >\n        <mat-select placeholder=\"Branch version\" [(ngModel)]=\"selectedbranchVersionValue\" name=\"branchType\" formControlName=\"thirdCtrl\" required>\n          <mat-option *ngFor=\"let version of branchVersion\" [value]=\"version.value\">\n            {{version.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Select the branch tag</ng-template>\n\n    <mat-selection-list #tags>\n      <mat-list-option *ngFor=\"let tag of branchTag\">\n        {{tag}}\n      </mat-list-option>\n    </mat-selection-list>\n\n    <p>\n    Options selected: {{tags.selectedOptions.selected.length}}\n    </p>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n"

/***/ }),

/***/ "../../../../../src/app/branch/branch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BranchComponent = (function () {
    function BranchComponent(_formBuilder) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.isLinear = false;
        this.branchType = [
            { value: 'Commercial' },
            { value: 'Souk' },
            { value: 'Neighbourhood' },
            { value: 'Mall' },
            { value: 'Other' }
        ];
        this.branchVersion = [
            { value: 'Digital', name: 'Fully Digital' },
            { value: 'Digital-Hybrid', name: 'Digital/Hybrid' },
            { value: 'Hybrid', name: 'Hybrid' },
            { value: 'Normal-Hybrid', name: 'Normal/Hybrid' },
            { value: 'Normal', name: 'Normal' }
        ];
        this.branchTag = ['Branch Tag 1', 'Branch Tag 2', 'Branch Tag 3', 'Branch Tag 4', 'Branch Tag 5'];
        this.branch = [
            {
                branchCat: 'Commercial',
                branchName: 'Abu Dhabi Main Branch, Abu Dhabi'
            }, {
                branchCat: 'Souk',
                branchName: 'Ajman Main Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Al Ain Main, Al Ain'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Al Ain Mall, Al Ain'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Al Aweer Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Al Barsha Branch'
            },
            {
                branchCat: 'Souk',
                branchName: 'Al Faheedi Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Al Ittihad Branch, Dubai'
            },
            {
                branchCat: 'Souk',
                branchName: 'Al Karama Branch'
            },
            {
                branchCat: 'Souk',
                branchName: 'Al Maktoum Branch, Dubai'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Al Mizhar Branch, Dubai'
            },
            {
                branchCat: 'Mall',
                branchName: 'Al Muhairy Centre Branch, Abu Dhabi'
            },
            {
                branchCat: 'Souk',
                branchName: 'Al Muraqabat Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Al Muroor Branch, Abu Dhabi'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Al Najdah Branch, Abu Dhabi'
            },
            {
                branchCat: 'Souk',
                branchName: 'Al Qiyadah Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Al Quoz Branch'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Al Qusais Branch, Dubai'
            },
            {
                branchCat: 'Souk',
                branchName: 'Al Ras Branch, Dubai'
            },
            {
                branchCat: 'Souk',
                branchName: 'Al Rashidiya Branch, Dubai'
            },
            {
                branchCat: 'Souk',
                branchName: 'Al Souk Branch'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Al Taawun Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Al Twar Branch, Dubai'
            },
            {
                branchCat: 'Mall',
                branchName: 'Al Wahda Branch, Abu Dhabi'
            },
            {
                branchCat: 'Mall',
                branchName: 'Bank Street Branch, Dubai'
            },
            {
                branchCat: 'Mall',
                branchName: 'Bawabat Al Sharq Mall Branch, Abu Dhabi'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Burj Al Arab Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Business Bay Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Convention Centre Branch, Dubai'
            },
            {
                branchCat: 'Mall',
                branchName: 'Dalma Mall Branch, Abu Dhabi'
            },
            {
                branchCat: 'Mall',
                branchName: 'Deerfield Mall Branch'
            },
            {
                branchCat: 'Other',
                branchName: 'Deira Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Deira City Centre Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Dragon Mart'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Dubai Airline Centre Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Dubai Airport T3'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Dubai Courts Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Dubai Festival City Branch, Dubai'
            },
            {
                branchCat: 'Mall',
                branchName: 'Dubai Mall Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Dubai Marina Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Dubai Marina Mall Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Dubai Media City Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Dubai Police Academy Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Dubai Silicon Oasis Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Electra Street Branch, Abu Dhabi'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Emirates Airline HQ Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Emirates Mall Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Emirates Tower Branch, Dubai'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Fujairah Main Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Galleria Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Green Community Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Group Head Office Branch'
            },
            {
                branchCat: 'Souk',
                branchName: 'Hamriya Branch, Dubai'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Hatta Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Ibn Battuta Mall Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Jebel Ali, Dubai'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Jumeirah Beach Rd Branch, Dubai'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Jumeirah Beach Walk Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Jumeirah Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Jumeirah Lake Towers'
            },
            {
                branchCat: 'Souk',
                branchName: 'Karama Shopping Complex Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Khaladiyah Branch, Abu Dhabi'
            },
            {
                branchCat: 'Mall',
                branchName: 'Mall of the Emirates, Dubai'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Mamzar Branch, Dubai'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Mankhool Branch, Dubai'
            },
            {
                branchCat: 'Other',
                branchName: 'Matajer Al Quoz Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Mirdif City Centre Branch'
            },
            {
                branchCat: 'Souk',
                branchName: 'Mizher Mall Branch, Dubai'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Motor City Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Muhaisnah Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Mussafah Branch , Abu Dhabi'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Nad Al Shiba Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Oud Metha Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Ramoul Branch, Dubai'
            },
            {
                branchCat: 'Souk',
                branchName: 'Ras Al Khaimah Corniche Branch'
            },
            {
                branchCat: 'Souk',
                branchName: 'Ras Al Khaimah Main Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Ras Al Khaimah Mall Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Ras Al Khor Branch'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Samnan Branch, Sharjah'
            },
            {
                branchCat: 'Souk',
                branchName: 'Satwa Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Sharjah Airport Branch'
            },
            {
                branchCat: 'Mall',
                branchName: 'Sharjah City Centre Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Sharjah Industrial Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Sharjah Industrial Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Sharjah Main Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Sheikh Zayed Road Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Tecom Branch'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Tourist Club Branch, Abu Dhabi'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Tower Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'Umm Al Quwain Branch'
            },
            {
                branchCat: 'Neighbourhood',
                branchName: 'Umm Suqueim Branch'
            },
            {
                branchCat: 'Souk',
                branchName: 'Union Square Branch, Dubai'
            },
            {
                branchCat: 'Mall',
                branchName: 'Wafi Mall Branch, Dubai'
            },
            {
                branchCat: 'Commercial',
                branchName: 'World Trade Centre Branch, Dubai'
            }
        ];
        this.branchCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.filteredBranch = this.branchCtrl.valueChanges
            .startWith(null)
            .map(function (branch) { return branch ? _this.filterBranch(branch) : _this.branch.slice(); });
    }
    BranchComponent.prototype.filterBranch = function (name) {
        return this.branch.filter(function (branch) {
            return branch.branchName.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    BranchComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        //this.showVerticalStepper = false;
    };
    return BranchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], BranchComponent.prototype, "showVerticalStepper", void 0);
BranchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-branch',
        template: __webpack_require__("../../../../../src/app/branch/branch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/branch/branch.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], BranchComponent);

var _a;
//# sourceMappingURL=branch.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map