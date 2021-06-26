(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/absensi/Absensi.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/absensi/Absensi.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: true,
      isLoggedIn: false,
      username: "",
      role: "",
      isAdmin: false,
      isLoading: false,
      columns: [{
        label: "Nama Pegawai",
        field: "pegawai_nama",
        sortable: false,
        width: "auto",
        filterable: true,
        filterOptions: {
          enabled: true,
          placeholder: "Filter pegawai",
          trigger: "enter"
        }
      }, {
        label: "Jam Kerja",
        field: "jam_kerja",
        sortable: false,
        width: "auto"
      }, {
        label: "Tanggal",
        field: "tanggal_custom",
        sortable: false,
        width: "auto"
      }, {
        label: "Gaji Harian",
        field: "gaji_harian_custom",
        sortable: false,
        width: "auto"
      }, {
        label: "Pendapatan",
        field: "jumlah_gaji_custom",
        sortable: false,
        width: "auto"
      }],
      rows: [],
      totalRecords: 0,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "",
          type: "desc"
        },
        page: 1,
        perPage: 10
      }
    };
  },
  created: function created() {
    this.getRecords();
  },
  mounted: function mounted() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    this.username = localStorage.getItem("username");
    this.role = localStorage.getItem("role");
    this.isAdmin = localStorage.getItem("isAdmin");
  },
  methods: {
    toRupiah: function toRupiah(param) {
      var fix = param.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.");
      return fix;
    },
    editData: function editData(param) {
      this.$router.push({
        name: "absensi-edit",
        params: {
          id: param
        }
      });
    },
    tambahData: function tambahData() {
      this.$router.push({
        name: "absensi-add"
      });
    },
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(params) {
      this.updateParams({
        page: params.currentPage
      });
      this.getRecords();
    },
    onPerPageChange: function onPerPageChange(params) {
      this.updateParams({
        perPage: params.currentPerPage
      });
      this.getRecords();
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: [{
          field: params[0].field,
          type: params[0].type
        }]
      });
      this.getRecords();
    },
    onColumnFilter: function onColumnFilter(params) {
      // this.$set(this.columns[foundIndex].filterOptions, 'filterValue', value);
      this.updateParams(params);
      this.getRecords();
    },
    getRecords: function getRecords() {
      var _this = this;

      axios.get("/api/detail-absensi/", {
        params: this.serverParams
      }).then(function (response) {
        _this.loading = false;
        _this.totalRecords = response.data.length;
        _this.rows = response.data;
        console.log(response.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/absensi/Absensi.vue?vue&type=template&id=e5d4874c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/absensi/Absensi.vue?vue&type=template&id=e5d4874c& ***!
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
                _c(
                  "div",
                  { staticClass: "flex items-center justify-between" },
                  [
                    _c(
                      "h1",
                      {
                        staticClass:
                          "text-lg pb-1 font-semibold text-indigo-400 uppercase"
                      },
                      [_vm._v("\n            Daftar Absensi\n          ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "bg-blue-500 hover:bg-blue-600 w-auto text-white px-4 py-2 rounded",
                        on: { click: _vm.tambahData }
                      },
                      [
                        _c("i", { staticClass: "fas fa-plus mr-1" }),
                        _vm._v("Tambah Data")
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
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
                _c("div", { staticClass: "w-full mt-2" }, [
                  _c(
                    "div",
                    { staticClass: "bg-white overflow-auto" },
                    [
                      _c("vue-good-table", {
                        attrs: {
                          mode: "pages",
                          lineNumbers: false,
                          totalRows: _vm.totalRecords,
                          isLoading: _vm.isLoading,
                          "pagination-options": {
                            enabled: true,
                            perPageDropdown: [10],
                            nextLabel: "next",
                            prevLabel: "prev",
                            setCurrentPage: 1,
                            perPage: 10,
                            dropdownAllowAll: false,
                            rowsPerPageLabel: "per halaman",
                            allLabel: "Semua",
                            ofLabel: "dari"
                          },
                          rows: _vm.rows,
                          columns: _vm.columns
                        },
                        on: {
                          "on-page-change": _vm.onPageChange,
                          "on-sort-change": _vm.onSortChange,
                          "on-column-filter": _vm.onColumnFilter,
                          "on-per-page-change": _vm.onPerPageChange,
                          "update:isLoading": function($event) {
                            _vm.isLoading = $event
                          },
                          "update:is-loading": function($event) {
                            _vm.isLoading = $event
                          }
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "table-row",
                            fn: function(props) {
                              return [
                                props.column.field == "tanggal_custom"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm
                                              .moment(props.row.tanggal)
                                              .format("LL")
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                props.column.field == "gaji_harian_custom"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.toRupiah(props.row.gaji_harian)
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                props.column.field == "jumlah_gaji_custom"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            _vm.toRupiah(props.row.jumlah_gaji)
                                          ) +
                                          "\n                    "
                                      )
                                    ])
                                  : _c("span", [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            props.formattedRow[
                                              props.column.field
                                            ]
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
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

/***/ "./resources/js/pages/absensi/Absensi.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/absensi/Absensi.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Absensi_vue_vue_type_template_id_e5d4874c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Absensi.vue?vue&type=template&id=e5d4874c& */ "./resources/js/pages/absensi/Absensi.vue?vue&type=template&id=e5d4874c&");
/* harmony import */ var _Absensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Absensi.vue?vue&type=script&lang=js& */ "./resources/js/pages/absensi/Absensi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Absensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Absensi_vue_vue_type_template_id_e5d4874c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Absensi_vue_vue_type_template_id_e5d4874c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/absensi/Absensi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/absensi/Absensi.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/absensi/Absensi.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Absensi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/absensi/Absensi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/absensi/Absensi.vue?vue&type=template&id=e5d4874c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/absensi/Absensi.vue?vue&type=template&id=e5d4874c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_template_id_e5d4874c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Absensi.vue?vue&type=template&id=e5d4874c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/absensi/Absensi.vue?vue&type=template&id=e5d4874c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_template_id_e5d4874c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Absensi_vue_vue_type_template_id_e5d4874c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);