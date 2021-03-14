(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip_code: ""
      },
      paymentProcessing: false
    };
  },
  computed: {
    cart: function cart() {
      return this.$store.state.cart;
    },
    cartQuantity: function cartQuantity() {
      return this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    },
    cartTotal: function cartTotal() {
      var price = this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);
      price = price / 100;
      return price.toLocaleString("en-US", {
        style: "currency",
        currency: "KES"
      });
    }
  },
  methods: {
    cartLineTotal: function cartLineTotal(item) {
      var price = item.price * item.quantity;
      price = price / 100;
      return price.toLocaleString("en-US", {
        style: "currency",
        currency: "KES"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full" }, [
    _c("div", { staticClass: "lg:w-2/3 w-full mx-auto mt-8 overflow-auto" }, [
      _c(
        "table",
        { staticClass: "table-auto w-full text-left whitespace-no-wrap" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.cart, function(item, index) {
                return _c("tr", { key: item.id }, [
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(item.name) }
                  }),
                  _vm._v(" "),
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(item.quantity) }
                  }),
                  _vm._v(" "),
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(_vm.cartLineTotal(item)) }
                  }),
                  _vm._v(" "),
                  _c("td", { staticClass: "w-10 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "flex ml-auto text-sm text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
                        on: {
                          click: function($event) {
                            return _vm.$store.commit("removeFromCart", index)
                          }
                        }
                      },
                      [_vm._v("Remove")]
                    )
                  ])
                ])
              }),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "p-4 font-bold" }, [
                  _vm._v("Total Amount")
                ]),
                _vm._v(" "),
                _c("td", {
                  staticClass: "p-4 font-bold",
                  domProps: { textContent: _vm._s(_vm.cartQuantity) }
                }),
                _vm._v(" "),
                _c("td", {
                  staticClass: "p-4 font-bold",
                  domProps: { textContent: _vm._s(_vm.cartTotal) }
                }),
                _vm._v(" "),
                _c("td", { staticClass: "w-10 text-right" })
              ])
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "lg:w-2/3 w-full mx-auto mt-8" }, [
      _c("div", { staticClass: "flex flex-wrap -mx-2 mt-8" }, [
        _c("div", { staticClass: "p-2 w-1/3" }, [
          _c("div", { staticClass: "relative" }, [
            _c(
              "label",
              {
                staticClass: "leading-7 text-sm text-gray-600",
                attrs: { for: "first_name" }
              },
              [_vm._v("First Name")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.first_name,
                  expression: "customer.first_name"
                }
              ],
              staticClass:
                "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
              attrs: {
                type: "text",
                id: "first_name",
                name: "first_name",
                disabled: _vm.paymentProcessing
              },
              domProps: { value: _vm.customer.first_name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "first_name", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "p-2 w-1/3" }, [
          _c("div", { staticClass: "relative" }, [
            _c(
              "label",
              {
                staticClass: "leading-7 text-sm text-gray-600",
                attrs: { for: "last_name" }
              },
              [_vm._v("Last Name")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.last_name,
                  expression: "customer.last_name"
                }
              ],
              staticClass:
                "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
              attrs: {
                type: "text",
                id: "last_name",
                name: "last_name",
                disabled: _vm.paymentProcessing
              },
              domProps: { value: _vm.customer.last_name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "last_name", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "p-2 w-1/3" }, [
          _c("div", { staticClass: "relative" }, [
            _c(
              "label",
              {
                staticClass: "leading-7 text-sm text-gray-600",
                attrs: { for: "email" }
              },
              [_vm._v("Email Address")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.email,
                  expression: "customer.email"
                }
              ],
              staticClass:
                "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
              attrs: {
                type: "email",
                id: "email",
                name: "email",
                disabled: _vm.paymentProcessing
              },
              domProps: { value: _vm.customer.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "email", $event.target.value)
                }
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap -mx-2 mt-4" }, [
        _c("div", { staticClass: "p-2 w-1/3" }, [
          _c("div", { staticClass: "relative" }, [
            _c(
              "label",
              {
                staticClass: "leading-7 text-sm text-gray-600",
                attrs: { for: "address" }
              },
              [_vm._v("Street Address")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.address,
                  expression: "customer.address"
                }
              ],
              staticClass:
                "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
              attrs: {
                type: "text",
                id: "address",
                name: "address",
                disabled: _vm.paymentProcessing
              },
              domProps: { value: _vm.customer.address },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "address", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "p-2 w-1/3" }, [
          _c("div", { staticClass: "relative" }, [
            _c(
              "label",
              {
                staticClass: "leading-7 text-sm text-gray-600",
                attrs: { for: "city" }
              },
              [_vm._v("City")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.city,
                  expression: "customer.city"
                }
              ],
              staticClass:
                "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
              attrs: {
                type: "text",
                id: "city",
                name: "city",
                disabled: _vm.paymentProcessing
              },
              domProps: { value: _vm.customer.city },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "city", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "p-2 w-1/6" }, [
          _c("div", { staticClass: "relative" }, [
            _c(
              "label",
              {
                staticClass: "leading-7 text-sm text-gray-600",
                attrs: { for: "state" }
              },
              [_vm._v("State")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.state,
                  expression: "customer.state"
                }
              ],
              staticClass:
                "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
              attrs: {
                type: "email",
                id: "state",
                name: "state",
                disabled: _vm.paymentProcessing
              },
              domProps: { value: _vm.customer.state },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "state", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "p-2 w-1/6" }, [
          _c("div", { staticClass: "relative" }, [
            _c(
              "label",
              {
                staticClass: "leading-7 text-sm text-gray-600",
                attrs: { for: "zip_code" }
              },
              [_vm._v("Zip Code")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.zip_code,
                  expression: "customer.zip_code"
                }
              ],
              staticClass:
                "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
              attrs: {
                type: "email",
                id: "zip_code",
                name: "zip_code",
                disabled: _vm.paymentProcessing
              },
              domProps: { value: _vm.customer.zip_code },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "zip_code", $event.target.value)
                }
              }
            })
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl"
          },
          [_vm._v("Item")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
          },
          [_vm._v("Quantity")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
          },
          [_vm._v("Price")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
          },
          [_vm._v("Actions")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue":
/*!************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=b4c63204& */ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Order/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!*******************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=b4c63204& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);