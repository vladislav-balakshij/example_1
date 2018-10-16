(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _message = require('./modules/message');

var _create = require('./modules/create');

var messages = {
	consoleMessage: (0, _message.message)('App Works!')
};

console.info(messages.consoleMessage);

},{"./modules/create":2,"./modules/message":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var create = exports.create = 5;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.message = message;
function message(x) {
    return x;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGJhYmVsXFxhcHAuanMiLCJhcHBcXGJhYmVsXFxtb2R1bGVzXFxjcmVhdGUuanMiLCJhcHBcXGJhYmVsXFxtb2R1bGVzXFxtZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFFQSxJQUFNO2lCQUNXLHNCQURqQixBQUFpQixBQUNBLEFBQVE7QUFEUixBQUNoQjs7QUFHRCxRQUFBLEFBQVEsS0FBSyxTQUFiLEFBQXNCOzs7Ozs7OztBQ1BmLElBQU0sMEJBQU4sQUFBZTs7Ozs7Ozs7USxBQ0FOLFUsQUFBQTtBQUFULFNBQUEsQUFBUyxRQUFULEFBQWlCLEdBQUcsQUFDdkI7V0FBQSxBQUFPLEFBQ1YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHttZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZSc7XHJcbmltcG9ydCB7Y3JlYXRlfSBmcm9tICcuL21vZHVsZXMvY3JlYXRlJztcclxuXHJcbmNvbnN0IG1lc3NhZ2VzID0ge1xyXG5cdGNvbnNvbGVNZXNzYWdlOiBtZXNzYWdlKCdBcHAgV29ya3MhJylcclxufVxyXG5cclxuY29uc29sZS5pbmZvKG1lc3NhZ2VzLmNvbnNvbGVNZXNzYWdlKTsiLCJleHBvcnQgY29uc3QgY3JlYXRlID0gNTsiLCJleHBvcnQgZnVuY3Rpb24gbWVzc2FnZSh4KSB7XHJcbiAgICByZXR1cm4geDtcclxufSJdfQ==
