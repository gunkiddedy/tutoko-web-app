(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
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
      suppliers: null,
      form: {
        barang_id: '',
        supplier_id: '',
        tanggal: '',
        jumlah: 0,
        harga_beli: 0,
        payment: 0,
        harga_jual_standar: 0,
        harga_jual_grosir: 0
      }
    };
  },
  computed: {
    totalHarga: function totalHarga() {
      var totalH = this.form.jumlah * this.form.harga_beli;

      if (totalH) {
        var number = totalH;
        var reverse = number.toString().split('').reverse().join('');
        var ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan;
      } else {
        return totalH;
      } // return this.form.jumlah * this.form.harga_beli

    },
    totalHutang: function totalHutang() {
      var totalHarga = this.form.jumlah * this.form.harga_beli;
      var totalU = this.form.payment - totalHarga;

      if (totalU) {
        if (this.form.payment > totalHarga) return 0;else {
          var number = totalU;
          var reverse = number.toString().split('').reverse().join('');
          var ribuan = reverse.match(/\d{1,3}/g);
          ribuan = ribuan.join('.').split('').reverse().join('');
          return ribuan;
        }
      } else {
        return totalU;
      } // return this.form.payment - (this.form.jumlah * this.form.harga_beli)

    }
  },
  mounted: function mounted() {
    this.getSuppliers();
    this.getBarangs();
  },
  methods: {
    cancel: function cancel() {
      this.$router.push('/pembelian');
    },
    saveData: function saveData(e) {
      var _this = this;

      e.preventDefault();
      this.isSaving = true;

      if (!this.validateForm()) {
        this.isSaving = false;
        return false;
      }

      var formData = new FormData();
      formData.append("supplier_id", this.form.supplier_id);
      formData.append("barang_id", this.form.barang_id);

      if (this.form.tanggal == '') {
        var todayDate = new Date().toISOString().slice(0, 10);
        formData.append("tanggal", todayDate);
      } else {
        var date = this.form.tanggal.toLocaleString('en-GB').split('-');
        var fixDate = date[2] + '-' + date[1] + '-' + date[0];
        formData.append("tanggal", fixDate);
      }

      formData.append("jumlah", this.form.jumlah);
      formData.append("harga_beli", this.form.harga_beli);
      formData.append("payment", this.form.payment);
      formData.append("harga_jual_standar", this.form.harga_jual_standar);
      formData.append("harga_jual_grosir", this.form.harga_jual_grosir);
      axios.post("/api/add-data", formData).then(function (response) {
        console.log(response);

        _this.showNotification("Data Successfully Added");

        _this.isSaving = false;

        _this.$router.push('pembelian');
      })["catch"](function (error) {
        _this.isSaving = false;
        _this.status_msg = error;
        console.log(error);
      });
    },
    getSuppliers: function getSuppliers() {
      var _this2 = this;

      axios.get("/api/supplier/").then(function (response) {
        _this2.suppliers = response.data;
        console.log(response);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getBarangs: function getBarangs() {
      var _this3 = this;

      axios.get("/api/barang-non-mandiri/").then(function (response) {
        _this3.barangs = response.data;
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

      if (!this.form.supplier_id) {
        this.status = false;
        this.showNotification("supplier tidak boleh kosong");
        return false;
      }

      if (!this.form.jumlah) {
        this.status = false;
        this.showNotification("jumlah tidak boleh kosong");
        return false;
      }

      if (!this.form.harga_beli) {
        this.status = false;
        this.showNotification("harga beli tidak boleh kosong");
        return false;
      }

      if (!this.form.payment) {
        this.status = false;
        this.showNotification("terbayar tidak boleh kosong");
        return false;
      }

      if (!this.form.harga_jual_standar) {
        this.status = false;
        this.showNotification("harga jual standar tidak boleh kosong");
        return false;
      }

      if (!this.form.harga_jual_grosir) {
        this.status = false;
        this.showNotification("harga jual grosir tidak boleh kosong");
        return false;
      }

      return true;
    },
    showNotification: function showNotification(message) {
      var _this4 = this;

      this.status_msg = message;
      setTimeout(function () {
        _this4.status_msg = "";
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mx-datepicker[data-v-02ec5d6f] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.mx-input[data-v-02ec5d6f] {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  padding: 6px 30px;\n  padding-left: 10px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #555;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=template&id=02ec5d6f&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=template&id=02ec5d6f&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("\n          Tambah Data Pembelian\n        ")]
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
                                    staticClass: "block text-lg text-gray-600",
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
                                      "uppercase w-full px-5  py-2 rounded text-gray-500 focus:outline-none focus:shadow-inner border-2 border-blue-200 bg-white appearance-none",
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
                                          "barang_id",
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
                                          "\n                      -Pilih-\n                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.barangs, function(barang, i) {
                                      return _c(
                                        "option",
                                        {
                                          key: i,
                                          staticClass:
                                            "text-gray-700 uppercase",
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
                                    staticClass: "block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Nama Supplier")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.supplier_id,
                                        expression: "form.supplier_id"
                                      }
                                    ],
                                    staticClass:
                                      "uppercase w-full px-5  py-2 rounded text-gray-500 focus:outline-none focus:shadow-inner border-2 border-blue-200 bg-white appearance-none",
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
                                          "supplier_id",
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
                                          "\n                      -Pilih-\n                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.suppliers, function(
                                      supplier,
                                      i
                                    ) {
                                      return _c(
                                        "option",
                                        {
                                          key: i,
                                          staticClass:
                                            "text-gray-700 uppercase",
                                          domProps: { value: supplier.id }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(supplier.supplier_nama) +
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
                                    staticClass: "block text-lg text-gray-600",
                                    attrs: { for: "cus_name" }
                                  },
                                  [_vm._v("Jumlah Pembelian")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.jumlah,
                                      expression: "form.jumlah"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4  py-2 text-gray-700 bg-gray-50 rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                  attrs: {
                                    id: "jumlah",
                                    type: "number",
                                    min: "0",
                                    "aria-label": "jumlah",
                                    placeholder: "Masukkan jumlah pembelian"
                                  },
                                  domProps: { value: _vm.form.jumlah },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "jumlah",
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
                                    staticClass: "block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Harga Beli")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.harga_beli,
                                      expression: "form.harga_beli"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4  py-2 text-gray-700 bg-gray-50 rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                  attrs: {
                                    id: "barang_satuan",
                                    type: "number",
                                    min: "0",
                                    placeholder: "Masukkan harga beli",
                                    "aria-label": "Email"
                                  },
                                  domProps: { value: _vm.form.harga_beli },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "harga_beli",
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
                                    staticClass: "block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Terbayar")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.payment,
                                      expression: "form.payment"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4  py-2 text-gray-700 bg-gray-50 rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                  attrs: {
                                    id: "barang_stok",
                                    type: "number",
                                    min: "0",
                                    placeholder: "Jumlah yang dibayarkan",
                                    "aria-label": ""
                                  },
                                  domProps: { value: _vm.form.payment },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "payment",
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
                                        "block text-lg text-gray-600",
                                      attrs: { for: "cus_email" }
                                    },
                                    [_vm._v("Tanggal Pembelian")]
                                  ),
                                  _vm._v(" "),
                                  _c("date-picker", {
                                    attrs: {
                                      "value-type": "format",
                                      placeholder: "Tanggal Pembelian",
                                      format: "DD-MM-YYYY"
                                    },
                                    model: {
                                      value: _vm.form.tanggal,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "tanggal", $$v)
                                      },
                                      expression: "form.tanggal"
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
                                    staticClass: "block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Harga Jual Standar")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.harga_jual_standar,
                                      expression: "form.harga_jual_standar"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4  py-2 text-gray-700 bg-gray-50 rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                  attrs: {
                                    id: "barang_stok",
                                    type: "number",
                                    min: "0",
                                    placeholder: "Jumlah yang dibayarkan",
                                    "aria-label": ""
                                  },
                                  domProps: {
                                    value: _vm.form.harga_jual_standar
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "harga_jual_standar",
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
                                    staticClass: "block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Harga Jual Grosir")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.harga_jual_grosir,
                                      expression: "form.harga_jual_grosir"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4  py-2 text-gray-700 bg-gray-50 rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                  attrs: {
                                    id: "barang_stok",
                                    type: "number",
                                    min: "0",
                                    placeholder: "Jumlah yang dibayarkan",
                                    "aria-label": ""
                                  },
                                  domProps: {
                                    value: _vm.form.harga_jual_grosir
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "harga_jual_grosir",
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
                                    staticClass: "block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Total Harga")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "px-4 total-harga font-bold text-2xl text-gray-900"
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.totalHarga) +
                                        "\n                  "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "px-0 md:px-4 my-2" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "block text-lg text-gray-600",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("Kurang Bayar")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "hutang px-4 font-bold text-2xl text-red-500"
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.totalHutang) +
                                        "\n                  "
                                    )
                                  ]
                                )
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

/***/ "./resources/js/pages/pembelian/PembelianAdd.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/pembelian/PembelianAdd.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PembelianAdd_vue_vue_type_template_id_02ec5d6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PembelianAdd.vue?vue&type=template&id=02ec5d6f&scoped=true& */ "./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=template&id=02ec5d6f&scoped=true&");
/* harmony import */ var _PembelianAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PembelianAdd.vue?vue&type=script&lang=js& */ "./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PembelianAdd_vue_vue_type_style_index_0_id_02ec5d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css& */ "./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PembelianAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PembelianAdd_vue_vue_type_template_id_02ec5d6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PembelianAdd_vue_vue_type_template_id_02ec5d6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02ec5d6f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/pembelian/PembelianAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PembelianAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_style_index_0_id_02ec5d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=style&index=0&id=02ec5d6f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_style_index_0_id_02ec5d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_style_index_0_id_02ec5d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_style_index_0_id_02ec5d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_style_index_0_id_02ec5d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=template&id=02ec5d6f&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=template&id=02ec5d6f&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_template_id_02ec5d6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PembelianAdd.vue?vue&type=template&id=02ec5d6f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pembelian/PembelianAdd.vue?vue&type=template&id=02ec5d6f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_template_id_02ec5d6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PembelianAdd_vue_vue_type_template_id_02ec5d6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);