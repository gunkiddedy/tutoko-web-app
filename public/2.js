(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  data: function data() {
    return {
      showInfoPembeli: false,
      isSaving: false,
      status_msg: "",
      status: '',
      barangNama: null,
      barangStok: 0,
      harga: {
        standar: 0,
        grosir: 0
      },
      selectedHarga: 0,
      form: {
        barang_id: this.id,
        tanggal: '',
        jumlah: 0,
        harga_jual: 0,
        payment: 0,
        nama_pembeli: '-',
        phone_pembeli: '-',
        alamat_pembeli: '-'
      }
    };
  },
  computed: {
    checkStok: function checkStok() {
      var stok = this.barangStok;

      if (this.form.jumlah > stok) {
        // alert('stok tidak cukup');
        this.$swal('Stok tidak cukup');
        this.form.jumlah = stok;
      }
    },
    totalHarga: function totalHarga() {
      var totalH = this.form.jumlah * this.form.harga_jual;

      if (totalH) {
        var number = totalH;
        var reverse = number.toString().split('').reverse().join('');
        var ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan;
      } else {
        return totalH;
      } // return this.form.jumlah * this.form.harga_jual

    },
    totalHutang: function totalHutang() {
      var totalHarga = this.form.jumlah * this.form.harga_jual;
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
      } // return this.form.payment - (this.form.jumlah * this.form.harga_jual)

    }
  },
  mounted: function mounted() {
    this.getNamaBarang(this.id);
    this.getHargaBarang(this.id);
  },
  methods: {
    cancel: function cancel() {
      this.$router.push('/barang');
    },
    setHarga: function setHarga(param) {
      this.form.harga_jual = param;
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
      formData.append("harga_jual", this.form.harga_jual);
      formData.append("payment", this.form.payment);
      formData.append("nama_pembeli", this.form.nama_pembeli);
      formData.append("phone_pembeli", this.form.phone_pembeli);
      formData.append("alamat_pembeli", this.form.alamat_pembeli);
      axios.post("/api/add-data-penjualan", formData).then(function (response) {
        console.log(response);

        _this.showNotification("Data Successfully Added");

        _this.isSaving = false;

        _this.$router.push('/penjualan');
      })["catch"](function (error) {
        _this.isSaving = false;
        _this.status_msg = error;
        console.log(error);
      });
    },
    getHargaBarang: function getHargaBarang(param) {
      var _this2 = this;

      axios.get("/api/get-harga-barang/" + param).then(function (response) {
        _this2.harga.standar = response.data.harga_jual_standar;
        _this2.harga.grosir = response.data.harga_jual_grosir;
        _this2.form.harga_jual = response.data.harga_jual_standar;
        console.log(response);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getNamaBarang: function getNamaBarang(param) {
      var _this3 = this;

      axios.get("/api/get-barang/" + param).then(function (response) {
        _this3.barangNama = response.data.barang_nama;
        _this3.barangStok = response.data.barang_stok;
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

      if (!this.form.jumlah) {
        this.status = false;
        this.showNotification("jumlah tidak boleh kosong");
        return false;
      }

      if (!this.form.harga_jual) {
        this.status = false;
        this.showNotification("harga jual tidak boleh kosong");
        return false;
      }

      if (!this.form.payment) {
        this.status = false;
        this.showNotification("pembayaran tidak boleh kosong");
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mx-datepicker[data-v-2d424f81] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.mx-input[data-v-2d424f81] {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  padding: 6px 30px;\n  padding-left: 10px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #555;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=template&id=2d424f81&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=template&id=2d424f81&scoped=true& ***!
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
                    [_vm._v("\n\t\t\t\t\t\tTambah Data Penjualan\n\t\t\t\t\t")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "p-0 md:p-10 bg-white rounded shadow leading-loose w-full mt-6"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "px-1 md:px-4 my-2 grid grid-cols-1 md:grid-cols-2 gap-4"
                        },
                        [
                          _c("div", {}, [
                            _c(
                              "label",
                              {
                                staticClass: "block text-base text-gray-400",
                                attrs: { for: "cus_email" }
                              },
                              [_vm._v("Nama Barang")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticClass:
                                "focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold w-full px-4 py-2 text-gray-700 bg-white rounded",
                              attrs: {
                                readonly: "",
                                type: "text",
                                name: "",
                                id: ""
                              },
                              domProps: {
                                value:
                                  _vm.barangNama +
                                  " - Stok (" +
                                  _vm.barangStok +
                                  ")"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", {}, [
                            _c(
                              "label",
                              {
                                staticClass: "block text-base text-gray-400",
                                attrs: { for: "cus_name" }
                              },
                              [_vm._v("Jumlah Penjualan")]
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
                                "w-full px-4 py-2 text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
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
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "px-1 md:px-4 my-2 grid grid-cols-1 md:grid-cols-3 gap-4"
                        },
                        [
                          _c("div", {}, [
                            _c(
                              "label",
                              {
                                staticClass: "block text-base text-gray-400",
                                attrs: { for: "cus_email" }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tHarga Standard\n\t\t\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "focus:outline-none focus:ring-2 focus:ring-yellow-600 px-6 py-2 w-full rounded bg-yellow-500 text-white focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                on: {
                                  click: function($event) {
                                    return _vm.setHarga(_vm.harga.standar)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.harga.standar))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", {}, [
                            _c(
                              "label",
                              {
                                staticClass: "block text-base text-gray-400",
                                attrs: { for: "cus_email" }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tHarga Grosir\n\t\t\t\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "focus:outline-none focus:ring-2 px-6 py-2 w-full rounded bg-blue-500 text-white focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                                on: {
                                  click: function($event) {
                                    return _vm.setHarga(_vm.harga.grosir)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.harga.grosir))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", {}, [
                            _c(
                              "label",
                              {
                                staticClass: "block text-base text-gray-400",
                                attrs: { for: "cus_email" }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tHarga Deal\n\t\t\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.harga_jual,
                                  expression: "form.harga_jual"
                                }
                              ],
                              staticClass:
                                "w-full px-4 py-2 text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
                              attrs: {
                                id: "barang_satuan",
                                type: "number",
                                min: "0",
                                placeholder: "Masukkan harga jual",
                                "aria-label": "Email"
                              },
                              domProps: { value: _vm.form.harga_jual },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "harga_jual",
                                    $event.target.value
                                  )
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
                            "px-1 md:px-4 my-2 grid grid-cols-1 md:grid-cols-2 gap-4"
                        },
                        [
                          _c("div", [
                            _c(
                              "label",
                              {
                                staticClass: "block text-base text-gray-400",
                                attrs: { for: "cus_email" }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tTerbayar\n\t\t\t\t\t\t\t\t\t"
                                )
                              ]
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
                                "w-full px-4 py-2 text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold",
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
                            { staticClass: "py-2" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "block text-base text-gray-400",
                                  attrs: { for: "cus_email" }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\tTanggal Penjualan\n\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.showInfoPembeli
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "px-1 md:px-4 my-2 grid grid-cols-1 md:grid-cols-3 gap-4"
                            },
                            [
                              _c("div", {}, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "block text-base text-gray-400",
                                    attrs: { for: "cus_email" }
                                  },
                                  [_vm._v("\n\t\t\t\t\t\t\t\t\t\tNama Pembeli")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.nama_pembeli,
                                      expression: "form.nama_pembeli"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4 py-2 focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold text-gray-700 bg-white rounded",
                                  attrs: {
                                    id: "barang_stok",
                                    type: "text",
                                    placeholder: "",
                                    "aria-label": ""
                                  },
                                  domProps: { value: _vm.form.nama_pembeli },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "nama_pembeli",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", {}, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "block text-base text-gray-400",
                                    attrs: { for: "cus_email" }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\tTlp. Pembeli\n\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.phone_pembeli,
                                      expression: "form.phone_pembeli"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4 py-2 focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold text-gray-700 bg-white rounded",
                                  attrs: {
                                    id: "barang_stok",
                                    type: "text",
                                    placeholder: "",
                                    "aria-label": ""
                                  },
                                  domProps: { value: _vm.form.phone_pembeli },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "phone_pembeli",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", {}, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "block text-base text-gray-400",
                                    attrs: { for: "cus_email" }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\tALamat pembeli\n\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.alamat_pembeli,
                                      expression: "form.alamat_pembeli"
                                    }
                                  ],
                                  staticClass:
                                    "w-full px-4 py-2 focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold text-gray-700 bg-white rounded",
                                  attrs: {
                                    id: "barang_stok",
                                    type: "text",
                                    placeholder: "",
                                    "aria-label": ""
                                  },
                                  domProps: { value: _vm.form.alamat_pembeli },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "alamat_pembeli",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "px-1 md:px-4 my-2 grid grid-cols-1 md:grid-cols-2 gap-4"
                        },
                        [
                          _c("div", [
                            _c(
                              "label",
                              {
                                staticClass: "block text-base text-gray-400",
                                attrs: { for: "cus_email" }
                              },
                              [_vm._v("\n\t\t\t\t\t\t\t\t\t\tTotal Harga")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "total-harga font-bold text-2xl text-gray-900"
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(_vm.totalHarga) +
                                    "\n\t\t\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "label",
                              {
                                staticClass: "block text-base text-gray-400",
                                attrs: { for: "cus_email" }
                              },
                              [_vm._v("\n\t\t\t\t\t\t\t\t\t\tKurang Bayar")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "hutang font-bold text-2xl text-red-500"
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(_vm.totalHutang) +
                                    "\n\t\t\t\t\t\t\t\t\t"
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
                      _c(
                        "div",
                        {
                          staticClass:
                            "mt-6 md:px-4 px-0 grid grid-cols-1 md:grid-cols-3 gap-4"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "bg-gray-200 block rounded px-6 py-1 focus:outline-none hover:bg-gray-300",
                              on: {
                                click: function($event) {
                                  _vm.showInfoPembeli = !_vm.showInfoPembeli
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\tCatat Pembeli\n\t\t\t\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "px-6 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-600 rounded",
                              on: { click: _vm.saveData }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.isSaving == true
                                      ? "Processing..."
                                      : "Simpan Data"
                                  ) +
                                  "\n\t\t\t\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "px-6 py-1 text-white font-light tracking-wider bg-red-400 hover:bg-red-600 rounded",
                              on: { click: _vm.cancel }
                            },
                            [_vm._v("Batal\n\t\t\t\t\t\t\t")]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("footer-component")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("span", { attrs: { hidden: "" } }, [_vm._v(_vm._s(_vm.checkStok))])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/penjualan/PenjualanAdd.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/penjualan/PenjualanAdd.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PenjualanAdd_vue_vue_type_template_id_2d424f81_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PenjualanAdd.vue?vue&type=template&id=2d424f81&scoped=true& */ "./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=template&id=2d424f81&scoped=true&");
/* harmony import */ var _PenjualanAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PenjualanAdd.vue?vue&type=script&lang=js& */ "./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PenjualanAdd_vue_vue_type_style_index_0_id_2d424f81_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css& */ "./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PenjualanAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PenjualanAdd_vue_vue_type_template_id_2d424f81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PenjualanAdd_vue_vue_type_template_id_2d424f81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d424f81",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/penjualan/PenjualanAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PenjualanAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_style_index_0_id_2d424f81_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=style&index=0&id=2d424f81&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_style_index_0_id_2d424f81_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_style_index_0_id_2d424f81_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_style_index_0_id_2d424f81_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_style_index_0_id_2d424f81_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=template&id=2d424f81&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=template&id=2d424f81&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_template_id_2d424f81_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PenjualanAdd.vue?vue&type=template&id=2d424f81&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanAdd.vue?vue&type=template&id=2d424f81&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_template_id_2d424f81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanAdd_vue_vue_type_template_id_2d424f81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);