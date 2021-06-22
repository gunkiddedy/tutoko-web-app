(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/Penjualan.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/Penjualan.vue?vue&type=script&lang=js& ***!
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
// import _ from "lodash";
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
        label: "Action",
        field: "action",
        sortable: false,
        width: "130px"
      }, {
        label: "Tanggal Jual",
        field: "tanggal_custom",
        sortable: false,
        width: "auto"
      }, {
        label: "Nama Barang",
        field: "barang_nama",
        sortable: false,
        width: "auto",
        filterable: true,
        filterOptions: {
          enabled: true,
          placeholder: "Filter",
          trigger: "enter"
        }
      }, {
        label: "Jumlah Penjualan",
        field: "jumlah",
        sortable: false,
        width: "auto"
      }, {
        label: "Harga Jual",
        field: "harga_jual_custom",
        sortable: false,
        width: "auto"
      }, {
        label: "Jumlah Bayar",
        field: "payment_custom",
        sortable: false,
        width: "auto"
      }, {
        label: "Tagihan (Piutang)",
        field: "tagihan_custom",
        sortable: false,
        width: "auto"
      }, {
        label: "Data Pembeli",
        field: "pembeli_custom",
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
        name: "penjualan-edit",
        params: {
          id: param
        }
      });
    },
    tambahData: function tambahData() {
      this.$router.push({
        name: "penjualan-add"
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

      axios.get("/api/penjualan/", {
        params: this.serverParams
      }).then(function (response) {
        _this.loading = false;
        _this.totalRecords = response.data.length;
        _this.rows = response.data;
        console.log(response);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/Penjualan.vue?vue&type=template&id=66be56b0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/Penjualan.vue?vue&type=template&id=66be56b0& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                _vm._m(0),
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
                                props.column.field == "harga_jual_custom"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.toRupiah(props.row.harga_jual)
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                props.column.field == "payment_custom"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.toRupiah(props.row.payment)
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                props.column.field == "tagihan_custom"
                                  ? _c("span", [
                                      _c(
                                        "span",
                                        {
                                          class: {
                                            "text-red-400 font-bold":
                                              props.row.tagihan > 0,
                                            "text-green-400 font-bold":
                                              props.row.tagihan == 0
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(
                                                _vm.toRupiah(props.row.tagihan)
                                              ) +
                                              "\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                props.column.field == "pembeli_custom"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(props.row.nama_pembeli) +
                                          " - \n\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(props.row.phone_pembeli) +
                                          " - \n\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(props.row.alamat_pembeli) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                props.column.field == "tanggal_custom"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm
                                              .moment(props.row.tanggal)
                                              .format("LL")
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                props.column.field == "action"
                                  ? _c("span", [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "bg-indigo-500 rounded border border-indigo-600 hover:bg-indigo-600 px-2 py-0 text-white font-semibold mx-1",
                                          on: {
                                            click: function($event) {
                                              return _vm.editData(props.row.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-pen mr-2"
                                          }),
                                          _vm._v("Edit\n\t\t\t\t\t\t\t\t\t\t")
                                        ]
                                      )
                                    ])
                                  : _c("span", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            props.formattedRow[
                                              props.column.field
                                            ]
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t"
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center justify-between" }, [
      _c(
        "h1",
        { staticClass: "text-lg pb-1 font-semibold text-indigo-400 uppercase" },
        [_vm._v("\n\t\t\t\t\t\tDaftar Penjualan")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/penjualan/Penjualan.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/penjualan/Penjualan.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Penjualan_vue_vue_type_template_id_66be56b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Penjualan.vue?vue&type=template&id=66be56b0& */ "./resources/js/pages/penjualan/Penjualan.vue?vue&type=template&id=66be56b0&");
/* harmony import */ var _Penjualan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Penjualan.vue?vue&type=script&lang=js& */ "./resources/js/pages/penjualan/Penjualan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Penjualan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Penjualan_vue_vue_type_template_id_66be56b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Penjualan_vue_vue_type_template_id_66be56b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/penjualan/Penjualan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/penjualan/Penjualan.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/penjualan/Penjualan.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penjualan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Penjualan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/Penjualan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penjualan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/penjualan/Penjualan.vue?vue&type=template&id=66be56b0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/penjualan/Penjualan.vue?vue&type=template&id=66be56b0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penjualan_vue_vue_type_template_id_66be56b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Penjualan.vue?vue&type=template&id=66be56b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/Penjualan.vue?vue&type=template&id=66be56b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penjualan_vue_vue_type_template_id_66be56b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penjualan_vue_vue_type_template_id_66be56b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);