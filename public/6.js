(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      status: '',
      barangs: null,
      pegawais: null,
      // hargas: null,
      form: {
        barang_id: '',
        pegawai_id: '',
        produksi_tanggal: '',
        produksi_jumlah: 0,
        hpp: 0,
        upah: 0,
        hjs: 0,
        hjg: 0
      }
    };
  },
  mounted: function mounted() {
    this.getPegawais();
    this.getBarangs();
  },
  methods: {
    selectedBarang: function selectedBarang(param) {
      this.getHarga(param);
    },
    getHarga: function getHarga(param) {
      var _this = this;

      axios.get("/api/get-harga/" + param).then(function (response) {
        // this.hargas = response.data;
        if (response.data.hpp) {
          _this.form.hpp = response.data.hpp;
          _this.form.upah = response.data.upah;
          _this.form.hjs = response.data.hjs;
          _this.form.hjg = response.data.hjg;
        } else {
          _this.form.hpp = 0;
          _this.form.upah = 0;
          _this.form.hjs = 0;
          _this.form.hjg = 0;
        }

        console.log(response.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    cancel: function cancel() {
      this.$router.push('/produksi');
    },
    saveData: function saveData(e) {
      var _this2 = this;

      e.preventDefault();
      this.isSaving = true;

      if (!this.validateForm()) {
        this.isSaving = false;
        return false;
      }

      var formData = new FormData();
      formData.append("barang_id", this.form.barang_id);
      formData.append("pegawai_id", this.form.pegawai_id);

      if (this.form.produksi_tanggal == '') {
        var todayDate = new Date().toISOString().slice(0, 10);
        formData.append("produksi_tanggal", todayDate);
      } else {
        var date = this.form.produksi_tanggal.toLocaleString('en-GB').split('-');
        var fixDate = date[2] + '-' + date[1] + '-' + date[0];
        formData.append("produksi_tanggal", fixDate);
      }

      formData.append("produksi_jumlah", this.form.produksi_jumlah);
      formData.append("hpp", this.form.hpp);
      formData.append("upah", this.form.upah);
      formData.append("hjs", this.form.hjs);
      formData.append("hjg", this.form.hjg);
      axios.post("/api/add-data-produksi", formData).then(function (response) {
        console.log(response);

        _this2.showNotification("Data Successfully Added");

        _this2.isSaving = false;

        _this2.$router.push('produksi');
      })["catch"](function (error) {
        _this2.isSaving = false;
        _this2.status_msg = error;
        console.log(error);
      });
    },
    getPegawais: function getPegawais() {
      var _this3 = this;

      axios.get("/api/pegawai/").then(function (response) {
        _this3.pegawais = response.data;
        console.log(response);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getBarangs: function getBarangs() {
      var _this4 = this;

      axios.get("/api/barang-mandiri/").then(function (response) {
        _this4.barangs = response.data;
        console.log(response);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    validateForm: function validateForm() {
      if (!this.form.barang_id) {
        this.status = false;
        this.showNotification("nama barang tidak boleh kosong");
        return false;
      }

      if (!this.form.pegawai_id) {
        this.status = false;
        this.showNotification("pegawai tidak boleh kosong");
        return false;
      }

      if (!this.form.produksi_jumlah) {
        this.status = false;
        this.showNotification("jumlah produksi tidak boleh kosong");
        return false;
      }

      if (!this.form.upah) {
        this.status = false;
        this.showNotification("upah produksi tidak boleh kosong");
        return false;
      }

      if (!this.form.hpp) {
        this.status = false;
        this.showNotification("hpp tidak boleh kosong");
        return false;
      }

      return true;
    },
    showNotification: function showNotification(message) {
      var _this5 = this;

      this.status_msg = message;
      setTimeout(function () {
        _this5.status_msg = "";
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mx-datepicker[data-v-4cc66d4a] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.mx-input[data-v-4cc66d4a] {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  padding: 6px 30px;\n  padding-left: 10px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #555;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=template&id=4cc66d4a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=template&id=4cc66d4a&scoped=true& ***!
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
              _c(
                "main",
                { staticClass: "w-full flex-grow p-1 md:p-6 bg-white" },
                [
                  _c(
                    "h1",
                    { staticClass: "text-lg text-gray-500 pb-1 font-semibold" },
                    [_vm._v("Tambah Data Produksi")]
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
                                      "uppercase block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Nama Barang")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.barang_id,
                                        expression: "form.barang_id"
                                      }
                                    ],
                                    staticClass:
                                      "w-full px-5 py-2 rounded text-gray-500 focus:outline-none focus:shadow-inner border-2 border-blue-200 bg-white appearance-none uppercase text-lg font-bold",
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "barang_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                        function($event) {
                                          return _vm.selectedBarang(
                                            _vm.form.barang_id
                                          )
                                        }
                                      ]
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
                                          "\n                      -Pilih Barang-\n                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.barangs, function(barang, i) {
                                      return _c(
                                        "option",
                                        {
                                          key: i,
                                          staticClass: "text-gray-700",
                                          domProps: { value: barang.id }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(barang.barang_nama) +
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
                              _c("div", { staticClass: "px-0 md:px-4 my-2" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "uppercase block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Nama Pegawai")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pegawai_id,
                                        expression: "form.pegawai_id"
                                      }
                                    ],
                                    staticClass:
                                      "w-full px-5 py-2 rounded text-gray-500 focus:outline-none focus:shadow-inner border-2 border-blue-200 bg-white appearance-none uppercase text-lg font-bold",
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
                                        _vm.$set(
                                          _vm.form,
                                          "pegawai_id",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
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
                                          "\n                      -Pilih Pegawai-\n                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.pegawais, function(pegawai, i) {
                                      return _c(
                                        "option",
                                        {
                                          key: i,
                                          staticClass: "text-gray-700",
                                          domProps: { value: pegawai.id }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(pegawai.pegawai_nama) +
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
                              _c("div", { staticClass: "px-0 md:px-4 my-2" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "uppercase block text-lg text-gray-600",
                                    attrs: { for: "cus_name" }
                                  },
                                  [_vm._v("Jumlah Produksi")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.produksi_jumlah,
                                      expression: "form.produksi_jumlah"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4 py-2 focus:bg-blue-50 text-gray-700 rounded border-2 border-blue-200 bg-white uppercase text-lg font-bold",
                                  attrs: {
                                    id: "jumlah",
                                    type: "number",
                                    min: "0",
                                    placeholder: "Jumlah produksi"
                                  },
                                  domProps: { value: _vm.form.produksi_jumlah },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "produksi_jumlah",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "px-0 md:px-4 my-2" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "uppercase block text-lg text-gray-600",
                                      attrs: { for: "cus_email" }
                                    },
                                    [_vm._v("Tanggal Produksi")]
                                  ),
                                  _vm._v(" "),
                                  _c("date-picker", {
                                    attrs: {
                                      "value-type": "format",
                                      placeholder: "Tanggal Produksi",
                                      format: "DD-MM-YYYY"
                                    },
                                    model: {
                                      value: _vm.form.produksi_tanggal,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "produksi_tanggal",
                                          $$v
                                        )
                                      },
                                      expression: "form.produksi_tanggal"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "px-0 md:px-4 my-2" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "uppercase block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Harga Pokok Produksi")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.hpp,
                                      expression: "form.hpp"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-white rounded uppercase text-lg font-bold",
                                  attrs: {
                                    readonly: "",
                                    id: "barang_satuan",
                                    type: "number",
                                    min: "0",
                                    placeholder: "Harga Pokok Produksi"
                                  },
                                  domProps: { value: _vm.form.hpp },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "hpp",
                                        $event.target.value
                                      )
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
                                      "uppercase block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Upah Produksi")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.upah,
                                      expression: "form.upah"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-white rounded uppercase text-lg font-bold",
                                  attrs: {
                                    readonly: "",
                                    id: "barang_satuan",
                                    type: "number",
                                    min: "0",
                                    placeholder: "Upah produksi"
                                  },
                                  domProps: { value: _vm.form.upah },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "upah",
                                        $event.target.value
                                      )
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
                                      "uppercase block text-lg text-gray-600",
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
                                      value: _vm.form.hjs,
                                      expression: "form.hjs"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-white rounded uppercase text-lg font-bold",
                                  attrs: {
                                    readonly: "",
                                    id: "barang_satuan",
                                    type: "number",
                                    min: "0",
                                    placeholder: "hjs"
                                  },
                                  domProps: { value: _vm.form.hjs },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "hjs",
                                        $event.target.value
                                      )
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
                                      "uppercase block text-lg text-gray-600",
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
                                      value: _vm.form.hjg,
                                      expression: "form.hjg"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-white rounded uppercase text-lg font-bold",
                                  attrs: {
                                    readonly: "",
                                    id: "barang_satuan",
                                    type: "number",
                                    min: "0",
                                    placeholder: "hjg"
                                  },
                                  domProps: { value: _vm.form.hjg },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "hjg",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-2" }, [
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
                          _c("div", { staticClass: "mt-6 px-0 md:px-4" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "px-6 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-600 rounded",
                                on: { click: _vm.saveData }
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

/***/ "./resources/js/pages/produksi/ProduksiAdd.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/produksi/ProduksiAdd.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProduksiAdd_vue_vue_type_template_id_4cc66d4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProduksiAdd.vue?vue&type=template&id=4cc66d4a&scoped=true& */ "./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=template&id=4cc66d4a&scoped=true&");
/* harmony import */ var _ProduksiAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProduksiAdd.vue?vue&type=script&lang=js& */ "./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProduksiAdd_vue_vue_type_style_index_0_id_4cc66d4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css& */ "./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProduksiAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProduksiAdd_vue_vue_type_template_id_4cc66d4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProduksiAdd_vue_vue_type_template_id_4cc66d4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cc66d4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/produksi/ProduksiAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProduksiAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_style_index_0_id_4cc66d4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=style&index=0&id=4cc66d4a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_style_index_0_id_4cc66d4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_style_index_0_id_4cc66d4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_style_index_0_id_4cc66d4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_style_index_0_id_4cc66d4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=template&id=4cc66d4a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=template&id=4cc66d4a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_template_id_4cc66d4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProduksiAdd.vue?vue&type=template&id=4cc66d4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/produksi/ProduksiAdd.vue?vue&type=template&id=4cc66d4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_template_id_4cc66d4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiAdd_vue_vue_type_template_id_4cc66d4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);