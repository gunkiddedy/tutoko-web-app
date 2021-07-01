(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id"],
  data: function data() {
    return {
      loading: true,
      isUpdating: false,
      pegawai_nama: "",
      pegawai_phone: "",
      pegawai_alamat: "",
      active: "",
      gaji_harian: 0,
      status: ["Active", "Inactive"]
    };
  },
  mounted: function mounted() {
    this.getDataPegawai(this.id);
  },
  methods: {
    cancel: function cancel() {
      this.$router.push('/pegawai');
    },
    getDataPegawai: function getDataPegawai(param) {
      var _this = this;

      axios.get("/api/get-pegawai/" + param).then(function (response) {
        _this.loading = false;
        _this.pegawai_nama = response.data.pegawai_nama;
        _this.pegawai_phone = response.data.pegawai_phone;
        _this.pegawai_alamat = response.data.pegawai_alamat;
        _this.gaji_harian = response.data.gaji_harian;
        _this.active = response.data.active;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    updateDataPegawai: function updateDataPegawai(param) {
      var _this2 = this;

      this.isUpdating = true;
      var formData = new FormData();
      formData.append("pegawai_nama", this.pegawai_nama);
      formData.append("pegawai_phone", this.pegawai_phone);
      formData.append("pegawai_alamat", this.pegawai_alamat);
      formData.append("gaji_harian", this.gaji_harian);
      formData.append("active", this.active);
      axios.post("/api/update-pegawai/".concat(param), formData).then(function (response) {
        _this2.isUpdating = false;

        _this2.$router.push({
          name: "pegawai"
        });

        console.log(response);
      })["catch"](function (error) {
        _this2.isUpdating = false;
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=template&id=a59aadfc&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=template&id=a59aadfc&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                  [_vm._v("\n\t\t\t\t\t\tEdit Data Barang\n\t\t\t\t\t")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full mt-6 pl-0 lg:pl-2" }, [
                  _c("div", { staticClass: "leading-loose" }, [
                    _c("div", { staticClass: "p-10 bg-white rounded shadow" }, [
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
                                attrs: { for: "cus_name" }
                              },
                              [_vm._v("Nama Barang")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pegawai_nama,
                                  expression: "pegawai_nama"
                                }
                              ],
                              staticClass:
                                "w-full px-5 py-1 text-gray-700 bg-gray-200 rounded",
                              attrs: {
                                id: "pegawai_nama",
                                type: "text",
                                "aria-label": "Name"
                              },
                              domProps: { value: _vm.pegawai_nama },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.pegawai_nama = $event.target.value
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
                                attrs: { for: "cus_name" }
                              },
                              [_vm._v("Gaji Harian")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.gaji_harian,
                                  expression: "gaji_harian"
                                }
                              ],
                              staticClass:
                                "w-full px-5 py-1 text-gray-700 bg-gray-200 rounded",
                              attrs: {
                                id: "pegawai_nama",
                                type: "text",
                                "aria-label": "Name"
                              },
                              domProps: { value: _vm.gaji_harian },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.gaji_harian = $event.target.value
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
                                  value: _vm.pegawai_phone,
                                  expression: "pegawai_phone"
                                }
                              ],
                              staticClass:
                                "w-full px-2 py-1 text-gray-700 bg-gray-200 rounded",
                              attrs: {
                                id: "pegawai_phone",
                                type: "text",
                                placeholder: "Phone",
                                "aria-label": "Email"
                              },
                              domProps: { value: _vm.pegawai_phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.pegawai_phone = $event.target.value
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
                                  value: _vm.pegawai_alamat,
                                  expression: "pegawai_alamat"
                                }
                              ],
                              staticClass:
                                "w-full px-2 py-1 text-gray-700 bg-gray-200 rounded",
                              attrs: {
                                id: "pegawai_alamat",
                                type: "text",
                                placeholder: "Alamat",
                                "aria-label": ""
                              },
                              domProps: { value: _vm.pegawai_alamat },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.pegawai_alamat = $event.target.value
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
                                attrs: { for: "cus_name" }
                              },
                              [_vm._v("Status")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.active,
                                    expression: "active"
                                  }
                                ],
                                staticClass:
                                  "w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.active = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    staticClass: "text-gray-700",
                                    attrs: { value: "", selected: "selected" }
                                  },
                                  [_vm._v("-Pilih-")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.status, function(stat, i) {
                                  return _c(
                                    "option",
                                    {
                                      key: i,
                                      staticClass: "text-gray-700",
                                      domProps: { value: stat }
                                    },
                                    [_vm._v(_vm._s(stat))]
                                  )
                                })
                              ],
                              2
                            )
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
                            on: {
                              click: function($event) {
                                return _vm.updateDataPegawai(_vm.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.isUpdating == true
                                  ? "Updating..."
                                  : "Update Data"
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "ml-4 px-6 py-1 text-white font-light tracking-wider bg-red-400 hover:bg-red-600 rounded",
                            on: { click: _vm.cancel }
                          },
                          [_vm._v("Batal\n\t\t\t\t\t\t\t\t\t")]
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

/***/ "./resources/js/pages/pegawai/PegawaiEdit.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/pegawai/PegawaiEdit.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PegawaiEdit_vue_vue_type_template_id_a59aadfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PegawaiEdit.vue?vue&type=template&id=a59aadfc&scoped=true& */ "./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=template&id=a59aadfc&scoped=true&");
/* harmony import */ var _PegawaiEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PegawaiEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PegawaiEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PegawaiEdit_vue_vue_type_template_id_a59aadfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PegawaiEdit_vue_vue_type_template_id_a59aadfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a59aadfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/pegawai/PegawaiEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PegawaiEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PegawaiEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PegawaiEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=template&id=a59aadfc&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=template&id=a59aadfc&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PegawaiEdit_vue_vue_type_template_id_a59aadfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PegawaiEdit.vue?vue&type=template&id=a59aadfc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pegawai/PegawaiEdit.vue?vue&type=template&id=a59aadfc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PegawaiEdit_vue_vue_type_template_id_a59aadfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PegawaiEdit_vue_vue_type_template_id_a59aadfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);