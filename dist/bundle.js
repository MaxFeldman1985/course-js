/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models/course.js":
/*!******************************!*\
  !*** ./src/models/course.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCourse": () => (/* binding */ createCourse)
/* harmony export */ });
function createCourse(id, name, lecturer, hours, cost, openningDate){
    return{id, name, lecturer, hours, cost, openningDate}
}

/***/ }),

/***/ "./src/services/college.js":
/*!*********************************!*\
  !*** ./src/services/college.js ***!
  \*********************************/
/***/ (() => {

throw new Error("Module parse failed: Private field '#courses' must be declared in an enclosing class (5:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|     #courseData\n|     constructor(courses, courseData) {\n>      this.#courses = courses;\n|      this.#courseData = courseData;\n|     }");

/***/ }),

/***/ "./src/services/courses.js":
/*!*********************************!*\
  !*** ./src/services/courses.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Courses)
/* harmony export */ });
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");
// fake data provisioning module



// data are the regular JS array
class Courses {
    #courses
    #minId
    #maxId
    constructor(minId, maxId, courses){
        this.#courses = courses ? courses : [] // this.#courses = courses ?? [];
        this.#minId = minId ?? 1;
        this.#maxId = maxId ?? 10000000;
    }
    add(course){
        course.id = this.#getId();
        this.#courses.push(course);
        return course;
    }
    #getId(){
        //returne unique value of id
       let id;
       do{
        id = (0,_utils_random__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(this.#minId, this.#maxId)
       }while(this.exists(id));
       
    }
    exists(id){
        //TODO checks if a course with the given id exists
        return false;
    }
}

/***/ }),

/***/ "./src/ui/form_handler.js":
/*!********************************!*\
  !*** ./src/ui/form_handler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormHandler)
/* harmony export */ });
class FormHandler {
    #formElement
    #alertElement
    #inputElement
    constructor(idForm, idAlert){
        this.#formElement = document.getElementById(idForm);
        this.#alertElement = document.getElementById(idAlert);
        this.#inputElement = document.querySelectorAll(`#${idFor} [name]`);
    }
   addHandler(fnProcessor) {
       this.#formElement.addEventListener('submit', event => {
           event.preventDefault();
           const data = Array.from(this.#inputElement).reduce((obj, element) => {
             obj[element.name] = element.value;
             return obj;
           }, {})
           const message = fnProcessor(data);
           if(!message){
               this.#formElement.requestFullscreen(); // if everithing ok
           }else{
               //TODO show alert inside this.#alertElement
           }
        })
   } 
}

/***/ }),

/***/ "./src/utils/random.js":
/*!*****************************!*\
  !*** ./src/utils/random.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber),
/* harmony export */   "getRandomElement": () => (/* binding */ getRandomElement),
/* harmony export */   "getRandomDate": () => (/* binding */ getRandomDate)
/* harmony export */ });
function getRandomNumber(min, max){
    //TODO return random number in tha range [min-max]
if (min > max) {
    [min,max] = [max,min];
}
return min + Math.round(Math.random() * (max - min));
}
function getRandomElement(array){
    //TODO return a random element of array
    const index = getRandomNumber(0, array.length - 1);
    return array[index];
}
function getRandomDate(minYear, maxYear){
    //TODO return random Date object (see constructor of the standart class Date)
    //const date = new Date(year, month, day)
    const year = getRandomNumber(minYear,maxYear);
    const month = getRandomNumber(0, 11);
    const date = new Date(year,month,day);
    return date;
}


/***/ }),

/***/ "./src/utils/randomCourse.js":
/*!***********************************!*\
  !*** ./src/utils/randomCourse.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomCourse": () => (/* binding */ getRandomCourse)
/* harmony export */ });
/* harmony import */ var _models_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/course */ "./src/models/course.js");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random */ "./src/utils/random.js");


function getRandomCourse(courseDate){
    //TODO getting random 
    const id = (0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(minId, maxId);
    const lecture = (0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(lectors);
    const name = (0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(courses);
    const hours = Math.round((0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(minHours, maxHours) / 10) * 10;
    const cost = Math.round((0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(minCost, maxCost) / 100) * 100;
    const openingDate = (0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomDate)(minYear, maxYear);
    return (0,_models_course__WEBPACK_IMPORTED_MODULE_0__.createCourse)(id, name, lecture, hours, cost, openingDate);
}

/***/ }),

/***/ "./src/config/courseData.json":
/*!************************************!*\
  !*** ./src/config/courseData.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"courses":["Java","Java Technologies","QA","React","JavaScript","HTML/CSS"],"lectors":["Abraham","Yakob","Sara","Yosef","Itshak","Moshe"],"minCost":5000,"maxCost":30000,"minHours":80,"maxHours":500,"minYear":2000,"maxYear":2022,"minId":100000,"maxId":999999}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_courseData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/courseData.json */ "./src/config/courseData.json");
/* harmony import */ var _services_college__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/college */ "./src/services/college.js");
/* harmony import */ var _services_college__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_services_college__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/courses */ "./src/services/courses.js");
/* harmony import */ var _ui_form_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/form_handler */ "./src/ui/form_handler.js");
/* harmony import */ var _utils_randomCourse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/randomCourse */ "./src/utils/randomCourse.js");





const N_COURSES = 5;
function createCourse(){
    const coursec = [];
    for(let i = 0; i < N_COURSES; i++){
        N_COURSES.push((0,_utils_randomCourse__WEBPACK_IMPORTED_MODULE_4__.getRandomCourse)(_config_courseData_json__WEBPACK_IMPORTED_MODULE_0__));
    }
    return courses;
}
function getCourseItem(courses) {
    return courses.map(c => `<li>${JSON.stringify(c)}</li>`).join('');
}
const ulElem = document.getElementById("courses");
const courses = createCourses();
ulElem.innerHTML = `${getCourseItem(createCourse())}`
const dataProvider = new _services_courses__WEBPACK_IMPORTED_MODULE_2__["default"](courses);
constProcessor = new (_services_college__WEBPACK_IMPORTED_MODULE_1___default())(dataProvider, _config_courseData_json__WEBPACK_IMPORTED_MODULE_0__);
const formHandler = new _ui_form_handler__WEBPACK_IMPORTED_MODULE_3__["default"]("courses-form", "alert");
formHandler.addHandler(course =>{
    const message = dataProcessor.addCourse(course);
    if (!message) {
    course.id = 100000;
    ulElem.innerHTML += `<li>${JSON.stringify(course)}</li>`;
    }
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map