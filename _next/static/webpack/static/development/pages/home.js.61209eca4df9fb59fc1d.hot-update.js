webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/Layout/Footer/FooterMain.js":
/*!************************************************!*\
  !*** ./components/Layout/Footer/FooterMain.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar FooterMain = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(FooterMain, _Component);\n\n  var _super = _createSuper(FooterMain);\n\n  function FooterMain() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, FooterMain);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleSectionScroll\", function (sectionId) {\n      var position = offset(document.getElementById(sectionId));\n      window.scrollTo({\n        top: position.top - document.getElementById('header-wrapper').offsetHeight,\n        left: 0,\n        behavior: 'smooth'\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(FooterMain, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(\"footer\", {\n        id: \"footer\",\n        className: \"footer-main\"\n      }, __jsx(\"div\", {\n        className: \"footer-top\"\n      }, __jsx(\"div\", {\n        className: \"container\"\n      }, __jsx(\"div\", {\n        className: \"row\"\n      }, __jsx(\"div\", {\n        className: \"col-xs-12 col-sm-6 col-md-6 col-xl-3\"\n      }, __jsx(\"div\", {\n        className: \"left-55\"\n      }, __jsx(\"div\", {\n        className: \"footer-logo\"\n      }, __jsx(\"div\", {\n        className: \"site-logo text-decoration-none\"\n      }, __jsx(\"span\", {\n        className: \"text-white\"\n      }, \"K\"), \"rishna\")))), __jsx(\"div\", {\n        className: \"col-xs-12 col-sm-6 col-md-6 col-xl-5\"\n      }, __jsx(\"div\", {\n        className: \"left-55\"\n      }, __jsx(\"div\", {\n        className: \"f-widget-title pl-2\"\n      }, __jsx(\"h4\", {\n        className: \"text-white\"\n      }, \"Menus\")), __jsx(\"div\", {\n        className: \"sigle-address\"\n      }, __jsx(\"ul\", {\n        className: \"footer-link\"\n      }, __jsx(\"li\", null, __jsx(\"a\", {\n        className: \"h-text-c1 text-c3 text-decoration-none\",\n        href: \"https://teamstech.in\"\n      }, \"Home\")), __jsx(\"li\", null, __jsx(\"a\", {\n        className: \"h-text-c1 text-c3 text-decoration-none\",\n        href: \"https://teamstech.in/industries/\"\n      }, \"Industries\")), __jsx(\"li\", null, __jsx(\"a\", {\n        className: \"h-text-c1 text-c3 text-decoration-none\",\n        href: \"https://teamstech.in/capabilities/\"\n      }, \"Capabilities\")), __jsx(\"li\", null, __jsx(\"a\", {\n        className: \"h-text-c1 text-c3 text-decoration-none\",\n        href: \"https://teamstech.in/offering/\"\n      }, \"Offerings\")), __jsx(\"li\", null, __jsx(\"a\", {\n        className: \"h-text-c1 text-c3 text-decoration-none\",\n        href: \"https://teamstech.in/insights/blogs/\"\n      }, \"Blogs\")), __jsx(\"li\", null, __jsx(\"a\", {\n        className: \"h-text-c1 text-c3 text-decoration-none\",\n        href: \"https://teamstech.in/about-us/\"\n      }, \"About us\")), __jsx(\"li\", null, __jsx(\"a\", {\n        className: \"h-text-c1 text-c3 text-decoration-none\",\n        href: \"https://teamstech.in/contact-us/\"\n      }, \"Contact us\")))))), __jsx(\"div\", {\n        className: \"col-xs-12 col-sm-6 col-md-6 col-xl-4\"\n      }, __jsx(\"div\", {\n        className: \"left-55 text-white\"\n      }, __jsx(\"div\", {\n        className: \"f-widget-title\"\n      }, __jsx(\"h4\", {\n        className: \"text-white\"\n      }, \"Get in touch\")), __jsx(\"div\", {\n        className: \"footer-social text-center pt-2 pb-4\"\n      }, __jsx(\"div\", {\n        className: \"text-white fs-26 footer-social text-left pb-2\"\n      }, __jsx(\"a\", {\n        className: \"text-decoration-none\",\n        target: \"_blank\",\n        href: \"#\",\n        title: \"Github\"\n      }, __jsx(\"i\", {\n        \"class\": \"icon-group-53\"\n      })))), __jsx(\"div\", {\n        className: \"sigle-address\"\n      }, __jsx(\"p\", null, __jsx(\"b\", {\n        className: \"pr-2\"\n      }, __jsx(\"i\", {\n        className: \"icon-group-54\"\n      })), \" +91-8754666985,\", __jsx(\"br\", null), \"\\xA0\\xA0\\xA0\\xA0\\xA0 +91-9789891475\")), __jsx(\"div\", {\n        className: \"sigle-address\"\n      }, __jsx(\"p\", null, __jsx(\"b\", {\n        className: \"pr-2\"\n      }, __jsx(\"i\", {\n        \"class\": \"icon-group-56\"\n      })), \" krishnaraj@hotmail.com\"))))), __jsx(\"div\", {\n        className: \"cd-top\"\n      }, __jsx(\"i\", {\n        className: \"fas fa-level-up-alt\"\n      })))), __jsx(\"div\", {\n        className: \"footer-bottom\"\n      }, __jsx(\"div\", {\n        className: \"container\"\n      }, __jsx(\"div\", {\n        className: \"row\"\n      }, __jsx(\"div\", {\n        className: \"col-12 text-center text-white\"\n      }, __jsx(\"p\", {\n        className: \"py-3 d-block\"\n      }, \"This template is made with \", __jsx(\"i\", {\n        \"class\": \"icon-group-55 fs-13 px-1\"\n      }), \" by \", __jsx(\"b\", null, \"Krishnaraj\"))))))));\n    }\n  }]);\n\n  return FooterMain;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FooterMain);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIvRm9vdGVyTWFpbi5qcz9hZTU0Il0sIm5hbWVzIjpbIkZvb3Rlck1haW4iLCJzZWN0aW9uSWQiLCJwb3NpdGlvbiIsIm9mZnNldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsIm9mZnNldEhlaWdodCIsImxlZnQiLCJiZWhhdmlvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs4TkFFb0IsVUFBQ0MsU0FBRCxFQUFlO0FBQ2pDLFVBQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JKLFNBQXhCLENBQUQsQ0FBckI7QUFDQUssWUFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQ1pDLFdBQUcsRUFBRU4sUUFBUSxDQUFDTSxHQUFULEdBQWVKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENJLFlBRGxEO0FBRVpDLFlBQUksRUFBRSxDQUZNO0FBR1pDLGdCQUFRLEVBQUU7QUFIRSxPQUFoQjtBQUtILEs7Ozs7Ozs7NkJBRVE7QUFDTCxhQUNJLG1FQUNJO0FBQVEsVUFBRSxFQUFDLFFBQVg7QUFBb0IsaUJBQVMsRUFBQztBQUE5QixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLGFBREosV0FESixDQURKLENBREosQ0FESixFQVVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUksaUJBQVMsRUFBQztBQUFkLGlCQURKLENBREosRUFJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0ksa0JBQ0k7QUFBRyxpQkFBUyxFQUFDLHdDQUFiO0FBQXNELFlBQUksRUFBQztBQUEzRCxnQkFESixDQURKLEVBSUksa0JBQ0k7QUFBRyxpQkFBUyxFQUFDLHdDQUFiO0FBQXNELFlBQUksRUFBQztBQUEzRCxzQkFESixDQUpKLEVBT0ksa0JBQ0k7QUFBRyxpQkFBUyxFQUFDLHdDQUFiO0FBQXNELFlBQUksRUFBQztBQUEzRCx3QkFESixDQVBKLEVBVUksa0JBQ0k7QUFBRyxpQkFBUyxFQUFDLHdDQUFiO0FBQXNELFlBQUksRUFBQztBQUEzRCxxQkFESixDQVZKLEVBYUksa0JBQ0k7QUFBRyxpQkFBUyxFQUFDLHdDQUFiO0FBQXNELFlBQUksRUFBQztBQUEzRCxpQkFESixDQWJKLEVBZ0JJLGtCQUNJO0FBQUcsaUJBQVMsRUFBQyx3Q0FBYjtBQUFzRCxZQUFJLEVBQUM7QUFBM0Qsb0JBREosQ0FoQkosRUFtQkksa0JBQ0k7QUFBRyxpQkFBUyxFQUFDLHdDQUFiO0FBQXNELFlBQUksRUFBQztBQUEzRCxzQkFESixDQW5CSixDQURKLENBSkosQ0FESixDQVZKLEVBMENJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUksaUJBQVMsRUFBQztBQUFkLHdCQURKLENBREosRUFJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLHNCQUFiO0FBQ0ksY0FBTSxFQUFDLFFBRFg7QUFDb0IsWUFBSSxFQUFDLEdBRHpCO0FBRUksYUFBSyxFQUFDO0FBRlYsU0FHSTtBQUFHLGlCQUFNO0FBQVQsUUFISixDQURKLENBREosQ0FKSixFQWFJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksaUJBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLENBREosc0JBR3dCLGlCQUh4Qix3Q0FESixDQWJKLEVBb0JJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksaUJBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FDSTtBQUFHLGlCQUFNO0FBQVQsUUFESixDQURKLDRCQURKLENBcEJKLENBREosQ0ExQ0osQ0FESixFQTBFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUF3QjtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQUF4QixDQTFFSixDQURKLENBREosRUErRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYix3Q0FBdUQ7QUFBRyxpQkFBTTtBQUFULFFBQXZELFVBQW1HLDhCQUFuRyxDQURKLENBREosQ0FESixDQURKLENBL0VKLENBREosQ0FESjtBQTZGSDs7OztFQXpHb0JDLCtDOztBQTZHVloseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIvRm9vdGVyTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZvb3Rlck1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgaGFuZGxlU2VjdGlvblNjcm9sbCA9IChzZWN0aW9uSWQpID0+IHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCkpXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnRvcCAtIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItd3JhcHBlcicpLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCIgY2xhc3NOYW1lPVwiZm9vdGVyLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC14bC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtNTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1sb2dvIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Szwvc3Bhbj5yaXNobmFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC14bC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtNTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYtd2lkZ2V0LXRpdGxlIHBsLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5NZW51czwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdsZS1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImgtdGV4dC1jMSB0ZXh0LWMzIHRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cImh0dHBzOi8vdGVhbXN0ZWNoLmluXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaC10ZXh0LWMxIHRleHQtYzMgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiaHR0cHM6Ly90ZWFtc3RlY2guaW4vaW5kdXN0cmllcy9cIj5JbmR1c3RyaWVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoLXRleHQtYzEgdGV4dC1jMyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCJodHRwczovL3RlYW1zdGVjaC5pbi9jYXBhYmlsaXRpZXMvXCI+Q2FwYWJpbGl0aWVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoLXRleHQtYzEgdGV4dC1jMyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCJodHRwczovL3RlYW1zdGVjaC5pbi9vZmZlcmluZy9cIj5PZmZlcmluZ3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImgtdGV4dC1jMSB0ZXh0LWMzIHRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cImh0dHBzOi8vdGVhbXN0ZWNoLmluL2luc2lnaHRzL2Jsb2dzL1wiPkJsb2dzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoLXRleHQtYzEgdGV4dC1jMyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCJodHRwczovL3RlYW1zdGVjaC5pbi9hYm91dC11cy9cIj5BYm91dCB1czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaC10ZXh0LWMxIHRleHQtYzMgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiaHR0cHM6Ly90ZWFtc3RlY2guaW4vY29udGFjdC11cy9cIj5Db250YWN0IHVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLXhsLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC01NSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmLXdpZGdldC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkdldCBpbiB0b3VjaDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsIHRleHQtY2VudGVyIHB0LTIgcGItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZnMtMjYgZm9vdGVyLXNvY2lhbCB0ZXh0LWxlZnQgcGItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdpdGh1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1ncm91cC01M1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdsZS1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwicHItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZ3JvdXAtNTRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+ICs5MS04NzU0NjY2OTg1LDxiciAvPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyArOTEtOTc4OTg5MTQ3NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdsZS1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwicHItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1ncm91cC01NlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj4ga3Jpc2huYXJhakBob3RtYWlsLmNvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZC10b3BcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtbGV2ZWwtdXAtYWx0XCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMyBkLWJsb2NrXCI+VGhpcyB0ZW1wbGF0ZSBpcyBtYWRlIHdpdGggPGkgY2xhc3M9XCJpY29uLWdyb3VwLTU1IGZzLTEzIHB4LTFcIj48L2k+IGJ5IDxiPktyaXNobmFyYWo8L2I+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3Rlck1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout/Footer/FooterMain.js\n");

/***/ })

})