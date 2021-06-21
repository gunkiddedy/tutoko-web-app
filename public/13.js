(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/supplier/SupplierAdd.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/supplier/SupplierAdd.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id"],
  data: function data() {
    return {
      isSaving: false,
      status_msg: "",
      supplier_nama: "",
      supplier_phone: "",
      supplier_alamat: ""
    };
  },
  methods: {
    validateForm: function validateForm() {
      if (!this.supplier_nama) {
        this.status = false;
        this.showNotification("nama tidak boleh kosong");
        return false;
      }

      if (!this.supplier_phone) {
        this.status = false;
        this.showNotification("phone tidak boleh kosong");
        return false;
      }

      return true;
    },
    showNotification: function showNotification(message) {
      var _this = this;

      this.status_msg = message;
      setTimeout(function () {
        _this.status_msg = "";
      }, 3000);
    },
    saveDataSupplier: function saveDataSupplier(e) {
      var _this2 = this;

      e.preventDefault();

      if (!this.validateForm()) {
        this.isSaving = false;
        return false;
      }

      this.isSaving = true;
      var formData = new FormData();
      formData.append("supplier_nama", this.supplier_nama);
      formData.append("supplier_phone", this.supplier_phone);
      formData.append("supplier_alamat", this.supplier_alamat);
      axios.post("/api/add-data-supplier", formData).then(function (response) {
        console.log(response);

        _this2.showNotification("Data Successfully Added");

        _this2.isSaving = false;

        _this2.$router.go(-1);
      })["catch"](function (error) {
        _this2.status_msg = error;
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/supplier/SupplierAdd.vue?vue&type=template&id=f71b498a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/supplier/SupplierAdd.vue?vue&type=template&id=f71b498a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "bg-gray-100 font-family-karla flex" },
    [
      _c("sidebar-component"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "relative w-full flex flex-col h-screen overflow-y-hidden"
        },
        [
          _c("header-component"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-full h-screen overflow-x-hidden border-t flex flex-col"
            },
            [
              _c("main", { staticClass: "w-full flex-grow p-6 bg-white" }, [
                _vm.loading
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "z-30 flex justify-around relative opacity-75 bg-black inset-0"
                      },
                      [_c("loader")],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "h1",
                  { staticClass: "text-lg text-gray-500 pb-1 font-semibold" },
                  [_vm._v("\n\t\t\t\t\t\tAdd Data Supplier\n\t\t\t\t\t")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full mt-6 pl-0 lg:pl-2" }, [
                  _c("div", { staticClass: "leading-loose" }, [
                    _c("div", { staticClass: "p-10 bg-white rounded shadow" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1"
                        },
                        [
                          _c("div", { staticClass: "px-4 my-2" }, [
                            _c(
                              "label",
                              {
                                staticClass: "block text-sm text-gray-600",
                                attrs: { for: "cus_name" }
                              },
                              [_vm._v("Nama Supplier")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_nama,
                                  expression: "supplier_nama"
                                }
                              ],
                              staticClass:
                                "w-full px-5 py-1 text-gray-700 bg-gray-200 rounded",
                              attrs: {
                                id: "supplier_nama",
                                type: "text",
                                "aria-label": "Name"
                              },
                              domProps: { value: _vm.supplier_nama },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.supplier_nama = $event.target.value
                                }
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1"
                        },
                        [
                          _c("div", { staticClass: "px-4 my-2" }, [
                            _c(
                              "label",
                              {
                                staticClass: "block text-sm text-gray-600",
                                attrs: { for: "cus_email" }
                              },
                              [_vm._v("Phone")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_phone,
                                  expression: "supplier_phone"
                                }
                              ],
                              staticClass:
                                "w-full px-2 py-1 text-gray-700 bg-gray-200 rounded",
                              attrs: {
                                id: "supplier_phone",
                                type: "text",
                                placeholder: "Phone",
                                "aria-label": "Email"
                              },
                              domProps: { value: _vm.supplier_phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.supplier_phone = $event.target.value
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "px-4 my-2" }, [
                            _c(
                              "label",
                              {
                                staticClass: "block text-sm text-gray-600",
                                attrs: { for: "cus_email" }
                              },
                              [_vm._v("Alamat")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_alamat,
                                  expression: "supplier_alamat"
                                }
                              ],
                              staticClass:
                                "w-full px-2 py-1 text-gray-700 bg-gray-200 rounded",
                              attrs: {
                                id: "supplier_alamat",
                                type: "text",
                                placeholder: "Alamat",
                                "aria-label": ""
                              },
                              domProps: { value: _vm.supplier_alamat },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.supplier_alamat = $event.target.value
                                }
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-6 px-4" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "px-4 py-1 text-white font-light tracking-wider bg-blue-500 hover:bg-blue-600 rounded",
                            on: { click: _vm.saveDataSupplier }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.isSaving == true
                                  ? "Saving..."
                                  : "Simpan Data"
                              )
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.loading
                ? _c("div", {
                    staticClass: "opacity-25 fixed inset-0 z-30 bg-black"
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("footer-component")
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/supplier/SupplierAdd.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/supplier/SupplierAdd.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SupplierAdd_vue_vue_type_template_id_f71b498a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupplierAdd.vue?vue&type=template&id=f71b498a&scoped=true& */ "./resources/js/pages/supplier/SupplierAdd.vue?vue&type=template&id=f71b498a&scoped=true&");
/* harmony import */ var _SupplierAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupplierAdd.vue?vue&type=script&lang=js& */ "./resources/js/pages/supplier/SupplierAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SupplierAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SupplierAdd_vue_vue_type_template_id_f71b498a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SupplierAdd_vue_vue_type_template_id_f71b498a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f71b498a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/supplier/SupplierAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/supplier/SupplierAdd.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/supplier/SupplierAdd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/supplier/SupplierAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/supplier/SupplierAdd.vue?vue&type=template&id=f71b498a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/supplier/SupplierAdd.vue?vue&type=template&id=f71b498a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierAdd_vue_vue_type_template_id_f71b498a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierAdd.vue?vue&type=template&id=f71b498a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/supplier/SupplierAdd.vue?vue&type=template&id=f71b498a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierAdd_vue_vue_type_template_id_f71b498a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierAdd_vue_vue_type_template_id_f71b498a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);