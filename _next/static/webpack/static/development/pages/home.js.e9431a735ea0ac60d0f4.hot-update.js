webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/Layout/Header/HeaderMain.js":
/*!************************************************!*\
  !*** ./components/Layout/Header/HeaderMain.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/helpers/helperFunctions */ \"./services/helpers/helperFunctions.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar HeaderMain = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HeaderMain, _Component);\n\n  var _super = _createSuper(HeaderMain);\n\n  function HeaderMain() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, HeaderMain);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleSectionScroll\", function (sectionId) {\n      var position = Object(_services_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_8__[\"offset\"])(document.getElementById(sectionId));\n      window.scrollTo({\n        top: position.top - document.getElementById('header-wrapper').offsetHeight,\n        left: 0,\n        behavior: 'smooth'\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(HeaderMain, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.addEventListener('scroll', this.handleScroll);\n    }\n  }, {\n    key: \"handleScroll\",\n    value: function handleScroll() {\n      var element = document.getElementById('header-wrapper');\n\n      if (window.scrollY > document.getElementById('header-wrapper').offsetHeight) {\n        element.classList.add('sticky');\n      } else {\n        element.classList.remove('sticky');\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"nav\", {\n        className: \"header-main\"\n      }, __jsx(\"div\", {\n        className: \"container\"\n      }, __jsx(\"div\", {\n        className: \"row py-2 d-flex flex-wrap align-items-center\"\n      }, __jsx(\"div\", {\n        className: \"site-logo text-decoration-none\"\n      }, __jsx(\"span\", {\n        className: \"text-white\"\n      }, \"K\"), \"rishna\"), __jsx(\"ul\", {\n        className: \"d-flex nav-menu justify-content-end ml-auto\"\n      }, __jsx(\"li\", {\n        className: \"nav-item\"\n      }, __jsx(\"span\", {\n        className: \"nav-link\",\n        onClick: function onClick() {\n          return _this2.handleSectionScroll('hero-wrap');\n        },\n        \"data-href\": \"hero-wrap\"\n      }, \"Home\")), __jsx(\"li\", {\n        className: \"nav-item\"\n      }, __jsx(\"span\", {\n        className: \"nav-link\",\n        onClick: function onClick() {\n          return _this2.handleSectionScroll('about-section');\n        },\n        \"data-href\": \"about-section\"\n      }, \"About\")), __jsx(\"li\", {\n        className: \"nav-item\"\n      }, __jsx(\"span\", {\n        className: \"nav-link\",\n        onClick: function onClick() {\n          return _this2.handleSectionScroll('resume-section');\n        },\n        \"data-href\": \"resume-section\"\n      }, \"Resume\")), __jsx(\"li\", {\n        className: \"nav-item\"\n      }, __jsx(\"span\", {\n        className: \"nav-link\",\n        onClick: function onClick() {\n          return _this2.handleSectionScroll('support-section');\n        },\n        \"data-href\": \"Support-section\"\n      }, \"Support\")), __jsx(\"li\", {\n        className: \"nav-item\"\n      }, __jsx(\"span\", {\n        className: \"nav-link\",\n        onClick: function onClick() {\n          return _this2.handleSectionScroll('projects-section');\n        },\n        \"data-href\": \"projects-section\"\n      }, \"Projects\")), __jsx(\"li\", {\n        className: \"nav-item\"\n      }, __jsx(\"span\", {\n        className: \"nav-link\",\n        onClick: function onClick() {\n          return _this2.handleSectionScroll('blog-section');\n        },\n        \"data-href\": \"blog-section\"\n      }, \"My Blog\")), __jsx(\"li\", {\n        className: \"nav-item\"\n      }, __jsx(\"span\", {\n        className: \"nav-link\",\n        onClick: function onClick() {\n          return _this2.handleSectionScroll('contact-section');\n        },\n        \"data-href\": \"contact-section\"\n      }, \"Contact\"))))));\n    }\n  }]);\n\n  return HeaderMain;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderMain);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIvSGVhZGVyTWFpbi5qcz8xMjc5Il0sIm5hbWVzIjpbIkhlYWRlck1haW4iLCJzZWN0aW9uSWQiLCJwb3NpdGlvbiIsIm9mZnNldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsIm9mZnNldEhlaWdodCIsImxlZnQiLCJiZWhhdmlvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJlbGVtZW50Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhhbmRsZVNlY3Rpb25TY3JvbGwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OE5BZWtCLFVBQUNDLFNBQUQsRUFBZTtBQUNuQyxVQUFJQyxRQUFRLEdBQUdDLGdGQUFNLENBQUNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkosU0FBeEIsQ0FBRCxDQUFyQjtBQUNBSyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFDZEMsV0FBRyxFQUFFTixRQUFRLENBQUNNLEdBQVQsR0FBZUosUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ0ksWUFEaEQ7QUFFZEMsWUFBSSxFQUFFLENBRlE7QUFHZEMsZ0JBQVEsRUFBRTtBQUhJLE9BQWhCO0FBS0QsSzs7Ozs7Ozt3Q0FwQm1CO0FBQ2xCTCxZQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLFlBQXZDO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLE9BQU8sR0FBR1YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFkOztBQUNBLFVBQUlDLE1BQU0sQ0FBQ1MsT0FBUCxHQUFpQlgsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ0ksWUFBL0QsRUFBNkU7QUFDM0VLLGVBQU8sQ0FBQ0UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDRCxPQUZELE1BRU87QUFDTEgsZUFBTyxDQUFDRSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixRQUF6QjtBQUNEO0FBQ0Y7Ozs2QkFXUTtBQUFBOztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBZ0Q7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLGFBQWhELFdBREYsRUFFRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0U7QUFDRSxpQkFBUyxFQUFDLFVBRFo7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNDLG1CQUFMLENBQXlCLFdBQXpCLENBQU47QUFBQSxTQUZYO0FBR0UscUJBQVU7QUFIWixnQkFERixDQURGLEVBU0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRTtBQUNFLGlCQUFTLEVBQUMsVUFEWjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ0EsbUJBQUwsQ0FBeUIsZUFBekIsQ0FBTjtBQUFBLFNBRlg7QUFHRSxxQkFBVTtBQUhaLGlCQURGLENBVEYsRUFpQkU7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRTtBQUNFLGlCQUFTLEVBQUMsVUFEWjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ0EsbUJBQUwsQ0FBeUIsZ0JBQXpCLENBQU47QUFBQSxTQUZYO0FBR0UscUJBQVU7QUFIWixrQkFERixDQWpCRixFQXlCRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNFO0FBQ0UsaUJBQVMsRUFBQyxVQURaO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDQSxtQkFBTCxDQUF5QixpQkFBekIsQ0FBTjtBQUFBLFNBRlg7QUFHRSxxQkFBVTtBQUhaLG1CQURGLENBekJGLEVBaUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0U7QUFDRSxpQkFBUyxFQUFDLFVBRFo7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNBLG1CQUFMLENBQXlCLGtCQUF6QixDQUFOO0FBQUEsU0FGWDtBQUdFLHFCQUFVO0FBSFosb0JBREYsQ0FqQ0YsRUF5Q0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRTtBQUNFLGlCQUFTLEVBQUMsVUFEWjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ0EsbUJBQUwsQ0FBeUIsY0FBekIsQ0FBTjtBQUFBLFNBRlg7QUFHRSxxQkFBVTtBQUhaLG1CQURGLENBekNGLEVBaURFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0U7QUFDRSxpQkFBUyxFQUFDLFVBRFo7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNBLG1CQUFMLENBQXlCLGlCQUF6QixDQUFOO0FBQUEsU0FGWDtBQUdFLHFCQUFVO0FBSFosbUJBREYsQ0FqREYsQ0FGRixDQURGLENBREYsQ0FERjtBQW1FRDs7OztFQTVGc0JDLCtDOztBQStGVnBCLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL0hlYWRlck1haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2hlbHBlcnMvaGVscGVyRnVuY3Rpb25zJ1xuXG5jbGFzcyBIZWFkZXJNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci13cmFwcGVyJylcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLXdyYXBwZXInKS5vZmZzZXRIZWlnaHQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RpY2t5JylcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlY3Rpb25TY3JvbGwgPSAoc2VjdGlvbklkKSA9PiB7XG4gICAgbGV0IHBvc2l0aW9uID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCkpXG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogcG9zaXRpb24udG9wIC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci13cmFwcGVyJykub2Zmc2V0SGVpZ2h0LFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlci1tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktMiBkLWZsZXggZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWxvZ28gdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Szwvc3Bhbj5yaXNobmE8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggbmF2LW1lbnUganVzdGlmeS1jb250ZW50LWVuZCBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNlY3Rpb25TY3JvbGwoJ2hlcm8td3JhcCcpfVxuICAgICAgICAgICAgICAgICAgZGF0YS1ocmVmPVwiaGVyby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTZWN0aW9uU2Nyb2xsKCdhYm91dC1zZWN0aW9uJyl9XG4gICAgICAgICAgICAgICAgICBkYXRhLWhyZWY9XCJhYm91dC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU2VjdGlvblNjcm9sbCgncmVzdW1lLXNlY3Rpb24nKX1cbiAgICAgICAgICAgICAgICAgIGRhdGEtaHJlZj1cInJlc3VtZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNlY3Rpb25TY3JvbGwoJ3N1cHBvcnQtc2VjdGlvbicpfVxuICAgICAgICAgICAgICAgICAgZGF0YS1ocmVmPVwiU3VwcG9ydC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBTdXBwb3J0XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTZWN0aW9uU2Nyb2xsKCdwcm9qZWN0cy1zZWN0aW9uJyl9XG4gICAgICAgICAgICAgICAgICBkYXRhLWhyZWY9XCJwcm9qZWN0cy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU2VjdGlvblNjcm9sbCgnYmxvZy1zZWN0aW9uJyl9XG4gICAgICAgICAgICAgICAgICBkYXRhLWhyZWY9XCJibG9nLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIE15IEJsb2dcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNlY3Rpb25TY3JvbGwoJ2NvbnRhY3Qtc2VjdGlvbicpfVxuICAgICAgICAgICAgICAgICAgZGF0YS1ocmVmPVwiY29udGFjdC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTWFpblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/Header/HeaderMain.js\n");

/***/ })

})