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

/***/ "./node_modules/raw-loader/index.js!./src/app/apiLog/api-log.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apiLog/api-log.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" >\r\n  <div class=\"header\">\r\n    <div class=\"heading\">\r\n      <h3>{{pageTitle}}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"filter row\">\r\n          <span class=\"filter_heading\">Filter</span>\r\n          <div class=\"dropdown col-md-2\">\r\n            <select autofocus name=\"Choose One\" (change)=\"selected($event)\" id=\"dropdownSelect\">\r\n              <option value=\"\">Choose One</option>\r\n              <option value=\"Level\">Level</option>\r\n              <option value=\"Date\">Date</option>\r\n              <option value=\"Logger\">Logger</option>\r\n              <option value=\"Message\">Message</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"filterSearch col-md-4\">\r\n            <input type=\"text\" [disabled]=\"!is_disabled\" id=\"myInput\" [(ngModel)]= 'listFilter'  placeholder=\"Search for item...\">\r\n          </div>\r\n        </div>\r\n        <div class=\" filtered_by row\">\r\n          <div class=\"col-md-6\">\r\n            <h3>Filtered by: {{listFilter}} </h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"Log_Data\">\r\n            <div class=\"api\"  *ngIf='distinctapi && distinctapi.length'>\r\n                <div class=\"panel panel-default\" *ngFor= 'let api of distinctapi; let i=index'>\r\n                    <div class=\"panel-heading pointerCursor\" (click)=\"ele.class = ele.class == 'showChildren' ? '' : 'showChildren'\" [ngClass]=\"{ hideChildren : ele.class !== 'showChildren' }\" #ele>\r\n                      <h4>\r\n                          {{api}}\r\n                      </h4>\r\n                    </div>\r\n                    <div class=\"panel-collapse\">\r\n                      <div class=\"panel-body table-responsive\">\r\n                        <table class=\"table\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"col_head\">Date</th>\r\n                              <th class=\"col_head\">Level</th>\r\n                              <th class=\"col_head\">Logger</th>\r\n                              <th class=\"col_head\">Message</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody *ngFor='let eachapilog of filteredapilogs' >\r\n                            <tr *ngIf='eachapilog.Api===api' class='col_val ' >\r\n                             <td class='td_val_date'>\r\n                               {{eachapilog.Date}} \r\n                             </td>\r\n                              <td class='td_val_Level' [attr.data-value] = \"eachapilog.Level\" >\r\n                                {{eachapilog.Level}}\r\n                              </td>\r\n                              <td class='td_val_Logger'>\r\n                                {{eachapilog.Logger}}\r\n                              </td>\r\n                              <td class='td_val_Message'>\r\n                                {{eachapilog.Message}}\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/welcome.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n      {{pageTitle}}\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"text-center\">\r\n          <img src=\"./assets/images/Anim.jpg\"\r\n               class=\"img-responsive center-block\"\r\n               style=\"max-height:300px;padding-bottom:50px\" />\r\n        </div>\r\n  \r\n        <div class=\"text-center\">Developed by:</div>\r\n        <div class=\"text-center\">\r\n          <h3>Animesh Singh</h3>\r\n        </div>\r\n  \r\n        <div class=\"text-center\">@animeshsingh</div>\r\n        <div class=\"text-center\">\r\n          <a href=\"https://www.linkedin.com/in/04animeshsingh/\">www.linkedin/AnimeshSingh</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/apiLog/api-log.component.css":
/*!**********************************************!*\
  !*** ./src/app/apiLog/api-log.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.heading {\r\n  height: 55px;\r\n  background-color: #89BF04;\r\n  width: 100%;\r\n  box-shadow: 5px 0px 17px #89BF04;\r\n}\r\n.row{\r\n  margin: 0px;\r\n}\r\n.heading h3 {\r\n  color: #fff;\r\n  padding: 15px 0px 0px 20px;\r\n}\r\n.card {\r\n  top: 20px;\r\n  border: 0px;\r\n  margin: 0px 20px;\r\n}\r\n.pointerCursor{\r\n  cursor: pointer;\r\n  transition-timing-function: ease;\r\n}\r\nspan.filter_heading {\r\n  font-size: 20px;\r\n  margin-left: 45px;\r\n}\r\nselect#dropdownSelect {\r\n  width: 133px;\r\n  height: 32px;\r\n  background-color: #89BF04;\r\n  color: 111;\r\n  font-size: 17px;\r\n  border-radius: 2px;\r\n  padding-left: 13px;\r\n  border-color: #89BF04;\r\n}\r\ninput#myInput {\r\n  height: 33px;\r\n  width: 350px;\r\n  padding-left: 5px;\r\n  color: #333;\r\n  border: 1px solid #89BF04;\r\n  font-size: 15px\r\n}\r\ninput#myInput:hover {\r\n  border: 1px solid #89BF04;\r\n  box-shadow: 1px 1px 2px #89BF04;\r\n  color: 333;\r\n}\r\n.filtered_by {\r\n  margin: 12px 0px;\r\n}\r\n.filtered_by > .col-md-6 {\r\n  left: 29px;\r\n}\r\n.panel{\r\n  box-shadow: 1px 1px 3px #89BF04;\r\n  margin-bottom: 10px;\r\n  border: 0px;\r\n}\r\n.panel-heading {\r\n  border-style: solid;\r\n  border-width: 0px 0px 1px 0px;\r\n  border-color: #49cc90;\r\n  background: rgba(73,204,144,.1);\r\n  border: 1px solid #49cc90;\r\n  border-radius: 3px;\r\n}\r\n.api_name {\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  text-transform: capitalize;\r\n}\r\n.panel-body{\r\n  text-align: center;\r\n  padding: 0px;\r\n  padding-bottom: 15px;\r\n}\r\n.panel-collapse {\r\n  border: 1px solid #49cc90;\r\n}\r\n.col_head{\r\n  color: #888;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n    font-size: 15px;\r\n}\r\n.panel-heading > h4 {\r\n  text-transform: capitalize;\r\n}\r\ntr > th.col_head {\r\n  width: 25%;\r\n}\r\ntbody,thead {\r\n  border: 0px;\r\n}\r\n.col_val > td {\r\n  font-size: 13px;\r\n  word-break: break-word;\r\n}\r\n.td_val_Level[data-value^= \"INFO\"]{\r\n\tcolor: #fff;\r\n    margin: 10px 160px;\r\n    background-color: #17A2B8;\r\n    border-radius: 6px;\r\n    font-weight: bold;\r\n}\r\n.td_val_Level[data-value^= \"WARN\"] {\r\n    color: #fff;\r\n    margin: 10px 160px;\r\n    background-color: #FFC107;\r\n    border-radius: 6px;\r\n    font-weight: bold;\r\n}\r\n.td_val_Level[data-value^= \"ERROR\"]{\r\n\tcolor: #fff;\r\n    margin: 10px 160px;\r\n    background-color: #DC3545;\r\n    border-radius: 6px;\r\n    font-weight: bold;\r\n}\r\ntd.td_val_Level {\r\n   display: block; \r\n   height: 30px;\r\n}\r\n.hideChildren + div{\r\n  display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpTG9nL2FwaS1sb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekI7QUFDRjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztJQUNULG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUVBO0NBQ0MsV0FBVztJQUNSLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsV0FBVztJQUNSLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0dBQ0csY0FBYztHQUNkLFlBQVk7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBpTG9nL2FwaS1sb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGluZyB7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OUJGMDQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogNXB4IDBweCAxN3B4ICM4OUJGMDQ7XHJcbn1cclxuLnJvd3tcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmhlYWRpbmcgaDMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE1cHggMHB4IDBweCAyMHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICB0b3A6IDIwcHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG5cclxuLnBvaW50ZXJDdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG59XHJcblxyXG5cclxuc3Bhbi5maWx0ZXJfaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG59XHJcblxyXG5zZWxlY3QjZHJvcGRvd25TZWxlY3Qge1xyXG4gIHdpZHRoOiAxMzNweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5QkYwNDtcclxuICBjb2xvcjogMTExO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gIGJvcmRlci1jb2xvcjogIzg5QkYwNDtcclxufVxyXG5cclxuaW5wdXQjbXlJbnB1dCB7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBjb2xvcjogIzMzMztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODlCRjA0O1xyXG4gIGZvbnQtc2l6ZTogMTVweFxyXG59XHJcblxyXG5pbnB1dCNteUlucHV0OmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODlCRjA0O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4ICM4OUJGMDQ7XHJcbiAgY29sb3I6IDMzMztcclxufVxyXG5cclxuLmZpbHRlcmVkX2J5IHtcclxuICBtYXJnaW46IDEycHggMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyZWRfYnkgPiAuY29sLW1kLTYge1xyXG4gIGxlZnQ6IDI5cHg7XHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjODlCRjA0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuLnBhbmVsLWhlYWRpbmcge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDljYzkwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNzMsMjA0LDE0NCwuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ5Y2M5MDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmFwaV9uYW1lIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5wYW5lbC1ib2R5e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLnBhbmVsLWNvbGxhcHNlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDljYzkwO1xyXG59XHJcbi5jb2xfaGVhZHtcclxuICBjb2xvcjogIzg4ODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnBhbmVsLWhlYWRpbmcgPiBoNCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbnRyID4gdGguY29sX2hlYWQge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxudGJvZHksdGhlYWQge1xyXG4gIGJvcmRlcjogMHB4O1xyXG59XHJcbi5jb2xfdmFsID4gdGQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4udGRfdmFsX0xldmVsW2RhdGEtdmFsdWVePSBcIklORk9cIl17XHJcblx0Y29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDEwcHggMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdBMkI4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZF92YWxfTGV2ZWxbZGF0YS12YWx1ZV49IFwiV0FSTlwiXSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMTBweCAxNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGRfdmFsX0xldmVsW2RhdGEtdmFsdWVePSBcIkVSUk9SXCJde1xyXG5cdGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAxMHB4IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RDMzU0NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnRkLnRkX3ZhbF9MZXZlbCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaGlkZUNoaWxkcmVuICsgZGl2e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/apiLog/api-log.component.ts":
/*!*********************************************!*\
  !*** ./src/app/apiLog/api-log.component.ts ***!
  \*********************************************/
/*! exports provided: ApiLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiLogComponent", function() { return ApiLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-log.service */ "./src/app/apiLog/api-log.service.ts");



let ApiLogComponent = class ApiLogComponent {
    constructor(apiLogServie) {
        this.apiLogServie = apiLogServie;
        this.pageTitle = 'Api Error Log';
        this.apilogs = [];
        this.filteredapilogs = [];
        this.distinctapi = [];
        this.hidden = true;
        this.is_disabled = false;
    }
    selected(event) {
        if (event.target.value === "" || event.target.value === undefined) {
            this.is_disabled = false;
            alert("Select appropriate dropdown value");
        }
        else {
            this.is_disabled = true;
            this._selectedValue = event.target.value;
        }
    }
    get listFilter() {
        return this._listfilter;
    }
    set listFilter(value) {
        this._listfilter = value;
        this.filteredapilogs = this.listFilter ? this.filterData(this.listFilter) : this.apilogs;
    }
    filterData(filterby) {
        if (this._selectedValue === "" || this._selectedValue === undefined) {
            alert("Select appropriate dropdown value");
            return this.filteredapilogs;
        }
        else {
            return this.filteredapilogs = this.apilogs.filter(item => item[this._selectedValue].toLowerCase().includes((filterby).toLowerCase()));
        }
    }
    ngOnInit() {
        this.apiLogServie.getApiLogs().subscribe({
            next: apilogs => {
                this.logs = apilogs;
                this.apilogs = this.apiLogServie.getJsonObject(apilogs).
                    sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    return dateA > dateB ? 1 : -1;
                });
                this.filteredapilogs = this.apilogs;
                this.distinctapi = this.apiLogServie.distinctapipoint;
                console.log(this.distinctapi);
            },
            error: err => {
                console.log(err.message);
            }
        });
        console.log(this.apilogs[0]);
    }
};
ApiLogComponent.ctorParameters = () => [
    { type: _api_log_service__WEBPACK_IMPORTED_MODULE_2__["ApiLogService"] }
];
ApiLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./api-log.component.html */ "./node_modules/raw-loader/index.js!./src/app/apiLog/api-log.component.html"),
        styles: [__webpack_require__(/*! ./api-log.component.css */ "./src/app/apiLog/api-log.component.css")]
    })
], ApiLogComponent);



/***/ }),

/***/ "./src/app/apiLog/api-log.service.ts":
/*!*******************************************!*\
  !*** ./src/app/apiLog/api-log.service.ts ***!
  \*******************************************/
/*! exports provided: ApiLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiLogService", function() { return ApiLogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ApiLogService = class ApiLogService {
    constructor(http) {
        this.http = http;
        this.LogUrl = 'api/logs/theon-api.txt';
        this.apilogsjson = [];
        this.distinctapipoint = [];
    }
    getApiLogs() {
        return this.http.get(this.LogUrl, { responseType: 'string' })
            .pipe(Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(), Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    getJsonObject(data) {
        const currentStr = data.split('\n');
        let apiLastindex;
        for (let i = 0; i < currentStr.length - 1; i++) {
            let start = 3;
            let flag = 1;
            const currentObj = JSON.parse(currentStr[i]);
            console.log(currentObj);
            this.apilogsjson.push(currentObj);
            while (flag) {
                if (currentObj.Message[start] !== ':') {
                    start++;
                }
                else {
                    apiLastindex = start;
                    flag = 0;
                }
            }
            currentObj.Api = currentObj.Message.substring(3, apiLastindex);
            this.distinctapipoint.push(currentObj.Api);
            // tslint:disable-next-line: no-shadowed-variable
            this.distinctapipoint = this.distinctapipoint.filter((x, i, a) => x && a.indexOf(x) === i);
        }
        return this.apilogsjson;
    }
};
ApiLogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiLogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiLogService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.pageTitle = 'ApiError-Log';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
      <div class='body'>
        <router-outlet></router-outlet>
      </div>`,
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apiLog_api_log_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apiLog/api-log.component */ "./src/app/apiLog/api-log.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"],
            _apiLog_api_log_component__WEBPACK_IMPORTED_MODULE_6__["ApiLogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: 'apiLog', component: _apiLog_api_log_component__WEBPACK_IMPORTED_MODULE_6__["ApiLogComponent"] },
                { path: 'welcome', component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
                { path: '', redirectTo: 'apiLog', pathMatch: 'full' }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/welcome.component.css":
/*!********************************************!*\
  !*** ./src/app/home/welcome.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\r\n  font-size: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() {
        this.pageTitle = 'Welcome Geneia Clinical Api Log';
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/home/welcome.component.css")]
    })
], WelcomeComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\animeshs\OneDrive - HealthAsyst Pvt. Ltd\ApiError-Log\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map