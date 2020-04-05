(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _decade_toggle_decade_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decade-toggle/decade-toggle.component */ "./src/app/decade-toggle/decade-toggle.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");





class AppComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.currentDateFilter = '';
    }
    ngOnInit() {
        this.getMovies();
    }
    /* Moved this from MoviesComponent because the movie list information was
     * needed in multiple locations and it didn't make sense to pass it
     * around through Subscriptions in this specific implementation.
     * Might not be the case if we wanted to offload fiters to the backend.
     */
    getMovies() {
        this.moviesService.getMovies().subscribe(movies => {
            this.totalResults = movies.totalResults;
            this.movies = movies.Search.sort((m1, m2) => parseInt((m2.Year), 10) - parseInt((m1.Year), 10));
            this.decades = movies.Search.reduce((accum, m) => {
                if (!accum.includes(m.Year.slice(0, 3) + "0")) {
                    accum.push(m.Year.slice(0, 3) + "0");
                }
                return accum;
            }, []).sort((a, b) => b - a);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 4, consts: [[1, "app"], [3, "decades", "currentDateFilter"], [3, "movies", "currentDateFilter"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-decade-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-movies", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("decades", ctx.decades)("currentDateFilter", ctx.currentDateFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.movies)("currentDateFilter", ctx.currentDateFilter);
    } }, directives: [_decade_toggle_decade_toggle_component__WEBPACK_IMPORTED_MODULE_2__["DecadeToggleComponent"], _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"]], styles: [".app[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 700px;\n  \n  padding: 32px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWJlY2NhbWF6dXIvRGVza3RvcC9hbmd1bGFyL21vdmllcy9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUFrQix1RUFBQTtFQUNsQixlQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDcwMHB4OyAvKiBNYXggd2lkdGggZm9yIHJlYWRhYmlsaXR5OyB0aGlzIHZhbHVlIHdvdWxkIGRlcGVuZCBvbiBmdWxsIGRlc2lnbnMgKi9cbiAgcGFkZGluZzogMzJweCAwO1xufVxuIiwiLmFwcCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgLyogTWF4IHdpZHRoIGZvciByZWFkYWJpbGl0eTsgdGhpcyB2YWx1ZSB3b3VsZCBkZXBlbmQgb24gZnVsbCBkZXNpZ25zICovXG4gIHBhZGRpbmc6IDMycHggMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _decade_toggle_decade_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decade-toggle/decade-toggle.component */ "./src/app/decade-toggle/decade-toggle.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");

 /* for API calls */

/* Pulll in our components and interfaces */





// ng generate automatically imports new components to app and declares them
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
        _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"],
        _decade_toggle_decade_toggle_component__WEBPACK_IMPORTED_MODULE_4__["DecadeToggleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
                    _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"],
                    _decade_toggle_decade_toggle_component__WEBPACK_IMPORTED_MODULE_4__["DecadeToggleComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/date-filter.service.ts":
/*!****************************************!*\
  !*** ./src/app/date-filter.service.ts ***!
  \****************************************/
/*! exports provided: DateFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFilterService", function() { return DateFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



/**
  * DateFilterService
  * Manage changes to selected filter value and emits change
  * to subscribers
  */
class DateFilterService {
    constructor() {
        this.now = new Date();
        /* Subjects are observables, makes it easy to pass data between siblings */
        this.filterDate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filterDate.next('');
    }
    setDate(date) {
        this.filterDate.next(date);
    }
    getDate() {
        return this.filterDate.asObservable();
    }
}
DateFilterService.ɵfac = function DateFilterService_Factory(t) { return new (t || DateFilterService)(); };
DateFilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateFilterService, factory: DateFilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateFilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/decade-toggle/decade-toggle.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/decade-toggle/decade-toggle.component.ts ***!
  \**********************************************************/
/*! exports provided: DecadeToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecadeToggleComponent", function() { return DecadeToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _date_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-filter.service */ "./src/app/date-filter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DecadeToggleComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DecadeToggleComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const decade_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onFilterDate(decade_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const decade_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", ctx_r0.currentDateFilter === decade_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", decade_r1, "'s");
} }
class DecadeToggleComponent {
    constructor(dateFilterService) {
        this.dateFilterService = dateFilterService;
    }
    ngOnInit() { }
    /**
      * onFilterDate
      * Change decade on click
      */
    onFilterDate(date) {
        this.dateFilterService.setDate(date);
    }
}
DecadeToggleComponent.ɵfac = function DecadeToggleComponent_Factory(t) { return new (t || DecadeToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_filter_service__WEBPACK_IMPORTED_MODULE_1__["DateFilterService"])); };
DecadeToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DecadeToggleComponent, selectors: [["app-decade-toggle"]], inputs: { decades: "decades", currentDateFilter: "currentDateFilter" }, decls: 2, vars: 1, consts: [[1, "decade-toggle"], [3, "is-active", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function DecadeToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DecadeToggleComponent_button_1_Template, 2, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.decades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".decade-toggle[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  text-align: right;\n}\n.decade-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #F7F8F9;\n  border: 1px solid currentColor;\n  color: #C2CAD0;\n  display: inline-block;\n  line-height: 1;\n  padding: 12px 24px;\n  cursor: pointer;\n}\n.decade-toggle[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background-color: #1A72B0;\n  border-color: #1A72B0;\n  color: #fff;\n}\n.decade-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-radius: 3px 0 0 3px;\n}\n.decade-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 3px 3px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWJlY2NhbWF6dXIvRGVza3RvcC9hbmd1bGFyL21vdmllcy9hcHAvc3JjL2FwcC9kZWNhZGUtdG9nZ2xlL2RlY2FkZS10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlY2FkZS10b2dnbGUvZGVjYWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNDTjtBREVJO0VBQ0UsMEJBQUE7QUNBTjtBREdJO0VBQ0UsMEJBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL2RlY2FkZS10b2dnbGUvZGVjYWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWNhZGUtdG9nZ2xlIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEY5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBjb2xvcjogI0MyQ0FEMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTcyQjA7XG4gICAgICBib3JkZXItY29sb3I6ICMxQTcyQjA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICB9XG4gIH1cbn1cbiIsIi5kZWNhZGUtdG9nZ2xlIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGVjYWRlLXRvZ2dsZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEY5O1xuICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGNvbG9yOiAjQzJDQUQwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZWNhZGUtdG9nZ2xlIGJ1dHRvbi5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUE3MkIwO1xuICBib3JkZXItY29sb3I6ICMxQTcyQjA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRlY2FkZS10b2dnbGUgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG59XG4uZGVjYWRlLXRvZ2dsZSBidXR0b246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecadeToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-decade-toggle',
                templateUrl: './decade-toggle.component.html',
                styleUrls: ['./decade-toggle.component.scss']
            }]
    }], function () { return [{ type: _date_filter_service__WEBPACK_IMPORTED_MODULE_1__["DateFilterService"] }]; }, { decades: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentDateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MovieDetailComponent_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.trimmedImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Cover of ", ctx_r7.movie.Title, "");
} }
function MovieDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDetailComponent_div_0_img_2_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "View on IMDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.trimmedImgSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.movie.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.movie.Rated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.movie.Runtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.movie.Released);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.movie.Plot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/title/", ctx_r6.imdbID, "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MovieDetailComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    ngOnInit() {
        this.getMovie(this.imdbID);
    }
    /**
      * getMovie
      * Call movie detail service to get information on current movie
      * This is something that in a real world case I might try to work
      * out some sort of local caching behavior to avoid API calls on
      * ever filter click; for this limited example, it'll do.
      */
    getMovie(id) {
        this.moviesService.getMovieDetail(this.imdbID).subscribe(movie => {
            this.movie = movie;
            let splitSrc = movie.Poster.split('/');
            this.trimmedImgSrc = splitSrc.length < 1 ? '' : 'assets/' + splitSrc[splitSrc.length - 1];
        });
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], inputs: { imdbID: "imdbID" }, decls: 1, vars: 1, consts: [["class", "movie", 4, "ngIf"], [1, "movie"], [1, "movie__img"], [3, "src", "alt", 4, "ngIf"], [1, "movie__info"], [1, "movie__meta"], [1, "movie__rating"], [1, "movie__run"], [1, "movie__date"], [1, "movie__plot"], [1, "movie__link"], [1, "btn", 3, "href"], [3, "src", "alt"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailComponent_div_0_Template, 18, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".movie[_ngcontent-%COMP%] {\n  background-color: #E8EBEE;\n  border: 2px solid #303436;\n  border-radius: 8px;\n  display: flex;\n  margin-bottom: 32px;\n  padding: 16px;\n}\n.movie[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #D8D8D8;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 24px;\n  line-height: 1;\n  margin-bottom: 6px;\n  padding-bottom: 8px;\n}\n.movie__date[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-left: auto;\n}\n.movie__img[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  margin-right: 24px;\n  width: 140px;\n}\n.movie__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  height: auto;\n  width: 100%;\n}\n.movie__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: calc(100% - 164px);\n}\n.movie__link[_ngcontent-%COMP%] {\n  margin-top: auto;\n  text-align: right;\n}\n.movie__meta[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.movie__rating[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  border-radius: 4px;\n  color: #8D989D;\n  font-family: Courier, monospace;\n  line-height: 1;\n  margin-right: 14px;\n  padding: 4px;\n}\n.movie__run[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWJlY2NhbWF6dXIvRGVza3RvcC9hbmd1bGFyL21vdmllcy9hcHAvc3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURHQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNBRjtBREdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKO0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDREY7QURJQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RUJFRTtcbiAgYm9yZGVyOiAycHggc29saWQgIzMwMzQzNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuXG4gIGgyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB9XG59XG5cbi5tb3ZpZV9fZGF0ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm1vdmllX19pbWcge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxNDBweDtcblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5tb3ZpZV9faW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2NHB4KTtcbn1cblxuLm1vdmllX19saW5rIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb3ZpZV9fbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubW92aWVfX3JhdGluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzhEOTg5RDtcbiAgZm9udC1mYW1pbHk6IENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ubW92aWVfX3J1biB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuIiwiLm1vdmllIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RUJFRTtcbiAgYm9yZGVyOiAycHggc29saWQgIzMwMzQzNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1vdmllIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5tb3ZpZV9fZGF0ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm1vdmllX19pbWcge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cbi5tb3ZpZV9faW1nIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb3ZpZV9faW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2NHB4KTtcbn1cblxuLm1vdmllX19saW5rIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb3ZpZV9fbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubW92aWVfX3JhdGluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzhEOTg5RDtcbiAgZm9udC1mYW1pbHk6IENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ubW92aWVfX3J1biB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-detail',
                templateUrl: './movie-detail.component.html',
                styleUrls: ['./movie-detail.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, { imdbID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/movies.service.ts":
/*!***********************************!*\
  !*** ./src/app/movies.service.ts ***!
  \***********************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



/**
 * MoviesService
 * Service to call for movie data from API
 */
class MoviesService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://www.omdbapi.com/?apikey=d57fdb10';
    }
    /* return an Observable here so that the calling component will wait for returned info */
    getMovies() {
        return this.http.get(`${this.apiUrl}&s=Batman`);
    }
    getMovieDetail(id) {
        return this.http.get(`${this.apiUrl}&i=${id}`);
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _date_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date-filter.service */ "./src/app/date-filter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");






function MoviesComponent_app_movie_detail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-detail", 2);
} if (rf & 2) {
    const movie_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imdbID", movie_r5.imdbID);
} }
/**
 * MoviesComponent
 * Manages the movie listing
 */
class MoviesComponent {
    constructor(moviesService, dateFilterService) {
        this.moviesService = moviesService;
        this.dateFilterService = dateFilterService;
        /* listen for changes on the dateFilterService */
        this.subscription = this.dateFilterService
            .getDate()
            .subscribe(date => {
            this.currentDateFilter = date;
            /* This doesn't feel like the right spot to do this... need to figure out why ngOnChanges isn't triggering */
            this.filteredMovies = this.fiterMovies();
        });
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.filteredMovies = this.fiterMovies();
    }
    /**
      * fiterMovies
      * utility function to trim list of movies by decade or reset
      * to full list as appropriate
      */
    fiterMovies() {
        if (!this.currentDateFilter) {
            return this.movies;
        }
        return this.movies.filter((m) => {
            return m.Year.slice(0, 3) == this.currentDateFilter.slice(0, 3);
        });
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_filter_service__WEBPACK_IMPORTED_MODULE_2__["DateFilterService"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], inputs: { movies: "movies", currentDateFilter: "currentDateFilter" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "movies"], [3, "imdbID", 4, "ngFor", "ngForOf"], [3, "imdbID"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesComponent_app_movie_detail_1_Template, 1, 1, "app-movie-detail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredMovies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }, { type: _date_filter_service__WEBPACK_IMPORTED_MODULE_2__["DateFilterService"] }]; }, { movies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentDateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rebeccamazur/Desktop/angular/movies/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map