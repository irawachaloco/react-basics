/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var Hello_1 = __webpack_require__(3);
var heroName_1 = __webpack_require__(4);
//esto es sintactic-sugar
var hello = React.createElement(Hello_1.default, { name: "pancho" });
//aquí lo mismo de arriba sin sintactic-sugar
var hello2 = new Hello_1.default({ name: 'pancho' });
var main = React.createElement("div", null,
    React.createElement(heroName_1.default, { name: 'irawachaloco' }));
ReactDOM.render(main, document.getElementById('root'));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
//ReactDOM.render(
//    <Hello name="irawachaloco" enthusiasmLevel={10}/>,
//    document.getElementById('root')
//);
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        var _a = this.props, name = _a.name, _b = _a.enthusiasmLevel, enthusiasmLevel = _b === void 0 ? 1 : _b;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (React.createElement("div", { className: "hello" },
            React.createElement("div", { className: "greeting" },
                "Hello ",
                name + getExclamationMarks(enthusiasmLevel))));
    };
    return Hello;
}(React.Component));
exports.default = Hello;
// helpers
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var HeroName = /** @class */ (function (_super) {
    __extends(HeroName, _super);
    function HeroName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroName.prototype.render = function () {
        var name = this.props.name;
        return (React.createElement("div", null,
            React.createElement("div", { className: "hero-wrapper" },
                React.createElement("div", { className: "hero-title" },
                    React.createElement("svg", { id: 'title' },
                        React.createElement("linearGradient", { id: "text-colorBkgd", fy: "0", gradientTransform: "rotate(60 .5 .5)" },
                            React.createElement("stop", { offset: "-20%", stopColor: "#f15361" }),
                            React.createElement("stop", { offset: "50%", stopColor: "hsl(177, 77%, 68%)" },
                                React.createElement("animate", { attributeName: "offset", dur: "66000ms", values: "0;1;0", repeatCount: "indefinite" })),
                            React.createElement("stop", { offset: "100%", stopColor: "hsl(320, 61%, 41%)" })),
                        React.createElement("text", { x: "0", y: "97%", fill: "url(#text-colorBkgd)" }, this.props.name),
                        "Sorry, your browser does not support inline SVG.")))));
    };
    return HeroName;
}(React.Component));
exports.default = HeroName;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map