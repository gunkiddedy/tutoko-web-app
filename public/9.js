(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/barang/BarangAdd.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/barang/BarangAdd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      barang_nama: "",
      barang_satuan: "",
      barang_stok: "",
      barang_tipe: "",
      upah: 0,
      hpp: 0,
      hjs: 0,
      hjg: 0,
      tipes: ['Mandiri', 'Supplier'],
      status: ['Active', 'Inactive'],
      imageList: [],
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    cancel: function cancel() {
      this.$router.push('/barang');
    },
    updateImageList: function updateImageList(file) {
      this.imageList.push(file.raw);
      console.log(this.imageList);
    },
    handleRemove: function handleRemove(file) {
      this.imageList.splice(file, 1);
    },
    handlePreview: function handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed: function handleExceed(files, imageList) {
      this.$message.warning("maksimal 1 photo");
    },
    validateForm: function validateForm() {
      if (!this.barang_nama) {
        this.status = false;
        this.showNotification("nama barang tidak boleh kosong");
        return false;
      }

      if (!this.barang_satuan) {
        this.status = false;
        this.showNotification("satuan tidak boleh kosong");
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
    saveDataBarang: function saveDataBarang(e) {
      var _this2 = this;

      e.preventDefault();

      if (!this.validateForm()) {
        this.isSaving = false;
        return false;
      }

      this.isSaving = true;
      var formData = new FormData();
      formData.append("barang_nama", this.barang_nama);
      formData.append("barang_satuan", this.barang_satuan);
      formData.append("barang_stok", this.barang_stok);
      formData.append("barang_tipe", this.barang_tipe);
      formData.append("upah", this.upah);
      formData.append("hpp", this.hpp);
      formData.append("hjs", this.hjs);
      formData.append("hjg", this.hjg);
      this.imageList.forEach(function (file) {
        formData.append("photo", file, file.name);
      });
      axios.post("/api/add-data-barang", formData).then(function (response) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/barang/BarangAdd.vue?vue&type=template&id=d502814a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/barang/BarangAdd.vue?vue&type=template&id=d502814a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
              _c(
                "main",
                { staticClass: "w-full flex-grow p-1 md:p-6 bg-white" },
                [
                  _c(
                    "h1",
                    {
                      staticClass:
                        "text-lg text-gray-500 pb-1 font-semibold text-center mt-4"
                    },
                    [_vm._v("\n          Tambah Data Barang\n        ")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mt-6 pl-0 lg:pl-2" }, [
                    _c("div", { staticClass: "leading-loose" }, [
                      _c(
                        "div",
                        { staticClass: "p-2 md:p-10 bg-white rounded shadow" },
                        [
                          _c(
                            "div",
                            { staticClass: "grid grid-cols-1 md:grid-cols-2" },
                            [
                              _c("div", { staticClass: "px-0 md:px-4 my-2" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "uppercase block text-sm text-gray-600",
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
                                      value: _vm.barang_nama,
                                      expression: "barang_nama"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-5 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                  attrs: {
                                    id: "barang_nama",
                                    type: "text",
                                    "aria-label": "Name"
                                  },
                                  domProps: { value: _vm.barang_nama },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.barang_nama = $event.target.value
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "px-0 md:px-4 my-2" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "uppercase block text-sm text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Satuan")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.barang_satuan,
                                      expression: "barang_satuan"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                  attrs: {
                                    id: "barang_satuan",
                                    type: "text",
                                    placeholder: "Satuan",
                                    "aria-label": "Email"
                                  },
                                  domProps: { value: _vm.barang_satuan },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.barang_satuan = $event.target.value
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "px-0 md:px-4 my-2" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "uppercase block text-sm text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Jenis Barang")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.barang_tipe,
                                        expression: "barang_tipe"
                                      }
                                    ],
                                    staticClass:
                                      "w-full px-5 py-2  rounded text-gray-500 focus:outline-none focus:shadow-inner border-2 border-blue-200 bg-white appearance-none",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.barang_tipe = $event.target.multiple
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
                                        attrs: {
                                          value: "",
                                          selected: "selected"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      -Pilih-\n                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.tipes, function(tipe, i) {
                                      return _c(
                                        "option",
                                        {
                                          key: i,
                                          staticClass: "text-gray-700",
                                          domProps: { value: tipe }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(tipe) +
                                              "\n                    "
                                          )
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ]),
                              _vm._v(" "),
                              _vm.barang_tipe == "Mandiri"
                                ? _c(
                                    "div",
                                    { staticClass: "px-0 md:px-4 my-2" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "uppercase block text-sm text-gray-600",
                                          attrs: { for: "cus_email" }
                                        },
                                        [_vm._v("hpp")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.hpp,
                                            expression: "hpp"
                                          }
                                        ],
                                        staticClass:
                                          "w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                        attrs: {
                                          id: "barang_satuan",
                                          type: "text",
                                          placeholder: "hpp",
                                          "aria-label": "Email"
                                        },
                                        domProps: { value: _vm.hpp },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.hpp = $event.target.value
                                          }
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.barang_tipe == "Mandiri"
                                ? _c(
                                    "div",
                                    { staticClass: "px-0 md:px-4 my-2" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "uppercase block text-sm text-gray-600",
                                          attrs: { for: "cus_email" }
                                        },
                                        [_vm._v("upah")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.upah,
                                            expression: "upah"
                                          }
                                        ],
                                        staticClass:
                                          "w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                        attrs: {
                                          id: "barang_satuan",
                                          type: "text",
                                          placeholder: "upah",
                                          "aria-label": "Email"
                                        },
                                        domProps: { value: _vm.upah },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.upah = $event.target.value
                                          }
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.barang_tipe == "Mandiri"
                                ? _c(
                                    "div",
                                    { staticClass: "px-0 md:px-4 my-2" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "uppercase block text-sm text-gray-600",
                                          attrs: { for: "cus_email" }
                                        },
                                        [_vm._v("hjs")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.hjs,
                                            expression: "hjs"
                                          }
                                        ],
                                        staticClass:
                                          "w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                        attrs: {
                                          id: "barang_satuan",
                                          type: "text",
                                          placeholder: "hjs",
                                          "aria-label": "Email"
                                        },
                                        domProps: { value: _vm.hjs },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.hjs = $event.target.value
                                          }
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.barang_tipe == "Mandiri"
                                ? _c(
                                    "div",
                                    { staticClass: "px-0 md:px-4 my-2" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "uppercase block text-sm text-gray-600",
                                          attrs: { for: "cus_email" }
                                        },
                                        [_vm._v("hjg")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.hjg,
                                            expression: "hjg"
                                          }
                                        ],
                                        staticClass:
                                          "w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                        attrs: {
                                          id: "barang_satuan",
                                          type: "text",
                                          placeholder: "hjg",
                                          "aria-label": "Email"
                                        },
                                        domProps: { value: _vm.hjg },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.hjg = $event.target.value
                                          }
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "button-plus-upload flex px-1 justify-between items-center my-6"
                                },
                                [
                                  _c(
                                    "div",
                                    {},
                                    [
                                      _c(
                                        "el-upload",
                                        {
                                          attrs: {
                                            action: "#",
                                            "list-type": "picture-card",
                                            "on-preview": _vm.handlePreview,
                                            "on-change": _vm.updateImageList,
                                            limit: 1,
                                            "on-exceed": _vm.handleExceed,
                                            "on-remove": _vm.handleRemove,
                                            "auto-upload": false
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "el-icon-plus"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      !_vm.status
                                        ? _c(
                                            "el-dialog",
                                            {
                                              attrs: {
                                                visible: _vm.dialogVisible
                                              },
                                              on: {
                                                "update:visible": function(
                                                  $event
                                                ) {
                                                  _vm.dialogVisible = $event
                                                }
                                              }
                                            },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  width: "100%",
                                                  src: _vm.dialogImageUrl,
                                                  alt: ""
                                                }
                                              })
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "span",
                              {
                                staticClass: "px-4 text-sm font-sf-pro",
                                class: {
                                  "text-green-400": _vm.status,
                                  "text-red-400": !_vm.status
                                }
                              },
                              [_vm._v(_vm._s(_vm.status_msg))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-6" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded",
                                on: { click: _vm.saveDataBarang }
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(
                                      _vm.isSaving == true
                                        ? "Processing..."
                                        : "Simpan Data"
                                    ) +
                                    "\n                "
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
                              [_vm._v("Batal\n                ")]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              ),
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

/***/ "./resources/js/pages/barang/BarangAdd.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/barang/BarangAdd.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangAdd_vue_vue_type_template_id_d502814a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangAdd.vue?vue&type=template&id=d502814a&scoped=true& */ "./resources/js/pages/barang/BarangAdd.vue?vue&type=template&id=d502814a&scoped=true&");
/* harmony import */ var _BarangAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangAdd.vue?vue&type=script&lang=js& */ "./resources/js/pages/barang/BarangAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BarangAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangAdd_vue_vue_type_template_id_d502814a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangAdd_vue_vue_type_template_id_d502814a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d502814a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/barang/BarangAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/barang/BarangAdd.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/barang/BarangAdd.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/barang/BarangAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/barang/BarangAdd.vue?vue&type=template&id=d502814a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/barang/BarangAdd.vue?vue&type=template&id=d502814a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangAdd_vue_vue_type_template_id_d502814a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangAdd.vue?vue&type=template&id=d502814a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/barang/BarangAdd.vue?vue&type=template&id=d502814a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangAdd_vue_vue_type_template_id_d502814a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangAdd_vue_vue_type_template_id_d502814a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);