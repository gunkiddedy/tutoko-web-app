(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/laporan/Absensi.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/laporan/Absensi.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tgl_awal: '',
      tgl_akhir: '',
      dataAbsensi: null
    };
  },
  methods: {
    toRupiah: function toRupiah(param) {
      if (param != null) {
        var fix = param.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.");
        return fix;
      } else {
        return 0;
      }
    },
    getData: function getData() {
      var _this = this;

      var date1 = this.tgl_awal.toLocaleString('en-GB').split('-');
      var date2 = this.tgl_akhir.toLocaleString('en-GB').split('-');
      var fixDate1 = date1[2] + '-' + date1[1] + '-' + date1[0];
      var fixDate2 = date2[2] + '-' + date2[1] + '-' + date2[0];
      axios.get("/api/absensi/" + fixDate1 + '/' + fixDate2).then(function (response) {
        if (response.data.length) _this.dataAbsensi = response.data;else _this.dataAbsensi = 'tidak ada data';
        console.log(response.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/laporan/Absensi.vue?vue&type=template&id=aa208ad8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/laporan/Absensi.vue?vue&type=template&id=aa208ad8& ***!
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
  return _c("div", { staticClass: "bg-gray-100 font-family-karla flex" }, [
    _c(
      "div",
      {
        staticClass: "relative w-full flex flex-col h-screen overflow-y-hidden"
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
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "grup-date mt-12 flex space-x-4" }, [
                _c(
                  "div",
                  { staticClass: "date flex flex-col" },
                  [
                    _c("span", [_vm._v("Tanggal Awal")]),
                    _vm._v(" "),
                    _c("date-picker", {
                      attrs: {
                        "value-type": "format",
                        placeholder: "Tanggal awal",
                        format: "DD-MM-YYYY"
                      },
                      model: {
                        value: _vm.tgl_awal,
                        callback: function($$v) {
                          _vm.tgl_awal = $$v
                        },
                        expression: "tgl_awal"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "date flex flex-col" },
                  [
                    _c("span", [_vm._v("Tanggal Akhir")]),
                    _vm._v(" "),
                    _c("date-picker", {
                      attrs: {
                        "value-type": "format",
                        placeholder: "Tanggal akhir",
                        format: "DD-MM-YYYY"
                      },
                      model: {
                        value: _vm.tgl_akhir,
                        callback: function($$v) {
                          _vm.tgl_akhir = $$v
                        },
                        expression: "tgl_akhir"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex items-center space-x-4 pt-5" },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "bg-blue-400 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:ring-2 rounded-md text-white text-base font-bold noPrint",
                        on: { click: _vm.getData }
                      },
                      [_vm._v("Tampilkan")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "noPrint bg-red-400 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:ring-2 rounded-md text-white text-base font-bold",
                        attrs: { onclick: "window.print();" }
                      },
                      [_vm._v("Cetak")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "bg-yellow-400 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:ring-2 rounded-md text-white text-base font-bold noPrint",
                        attrs: { to: "/laporan" }
                      },
                      [_vm._v("Kembali ke beranda laporan")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "show-data mt-12" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table-auto border-collapse border border-gray-400 w-full"
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "text-center" },
                      _vm._l(_vm.dataAbsensi, function(data, index) {
                        return _c("tr", { key: index }, [
                          _c(
                            "td",
                            { staticClass: "border border-gray-300 p-2" },
                            [_vm._v(_vm._s(index + 1))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "border border-gray-300 p-2 text-left"
                            },
                            [_vm._v(_vm._s(data.pegawai_nama))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "border border-gray-300 p-2 text-left"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.moment(data.tanggal).format("L"))
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "border border-gray-300 p-2 text-left"
                            },
                            [_vm._v(_vm._s(data.jam_kerja) + " Hari")]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "border border-gray-300 p-2 font-bold"
                            },
                            [_vm._v(_vm._s(_vm.toRupiah(data.gaji_harian)))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "border border-gray-300 p-2 font-bold"
                            },
                            [_vm._v(_vm._s(_vm.toRupiah(data.jumlah_gaji)))]
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "flex items-center justify-between border-b-2 border-gray-300"
      },
      [
        _c(
          "h1",
          {
            staticClass: "text-lg pb-1 font-semibold text-indigo-400 uppercase"
          },
          [_vm._v("Laporan Absensi")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "text-center" }, [
      _c("tr", [
        _c("th", { staticClass: "border border-gray-300 p-2" }, [
          _vm._v("NO.")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "border border-gray-300 p-2" }, [
          _vm._v("NAMA PEGAWAI")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "border border-gray-300 p-2" }, [
          _vm._v("TGL KERJA")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "border border-gray-300 p-2" }, [
          _vm._v("JAM KERJA")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "border border-gray-300 p-2" }, [
          _vm._v("GAJI HARIAN")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "border border-gray-300 p-2" }, [
          _vm._v("PENDAPATAN")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/laporan/Absensi.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/laporan/Absensi.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Absensi_vue_vue_type_template_id_aa208ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Absensi.vue?vue&type=template&id=aa208ad8& */ "./resources/js/pages/laporan/Absensi.vue?vue&type=template&id=aa208ad8&");
/* harmony import */ var _Absensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Absensi.vue?vue&type=script&lang=js& */ "./resources/js/pages/laporan/Absensi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Absensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Absensi_vue_vue_type_template_id_aa208ad8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Absensi_vue_vue_type_template_id_aa208ad8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/laporan/Absensi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/laporan/Absensi.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/laporan/Absensi.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Absensi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/laporan/Absensi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/laporan/Absensi.vue?vue&type=template&id=aa208ad8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/laporan/Absensi.vue?vue&type=template&id=aa208ad8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_template_id_aa208ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Absensi.vue?vue&type=template&id=aa208ad8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/laporan/Absensi.vue?vue&type=template&id=aa208ad8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_template_id_aa208ad8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_template_id_aa208ad8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);