(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  data: function data() {
    return {
      showInfoPembeli: false,
      isUpdating: false,
      status_msg: "",
      status: '',
      barangNama: null,
      barangStok: 0,
      harga: {
        standar: 0,
        grosir: 0
      },
      selectedHarga: 0,
      penjualan: {
        barang_id: '',
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
    // checkStok(){
    // 	let stok = this.barangStok;
    // 	if(this.penjualan.jumlah > stok){
    // 		alert('stok tidak cukup');
    // 		this.penjualan.jumlah = stok;
    // 	}
    // },
    totalHarga: function totalHarga() {
      var totalH = this.penjualan.jumlah * this.penjualan.harga_jual;

      if (totalH) {
        var number = totalH;
        var reverse = number.toString().split('').reverse().join('');
        var ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan;
      } else {
        return totalH;
      } // return this.penjualan.jumlah * this.penjualan.harga_jual

    },
    totalHutang: function totalHutang() {
      var totalHarga = this.penjualan.jumlah * this.penjualan.harga_jual;
      var totalU = this.penjualan.payment - totalHarga;

      if (totalU) {
        if (this.penjualan.payment > totalHarga) return 0;else {
          var number = totalU;
          var reverse = number.toString().split('').reverse().join('');
          var ribuan = reverse.match(/\d{1,3}/g);
          ribuan = ribuan.join('.').split('').reverse().join('');
          return ribuan;
        }
      } else {
        return totalU;
      } // return this.penjualan.payment - (this.penjualan.jumlah * this.penjualan.harga_jual)

    }
  },
  mounted: function mounted() {
    this.getPenjualan(this.id);
  },
  methods: {
    updatePenjualan: function updatePenjualan(param) {
      var _this = this;

      this.isUpdating = true;
      var formData = new FormData();
      formData.append("barang_id", this.penjualan.barang_id);
      formData.append("tanggal", this.penjualan.tanggal);
      formData.append("jumlah", this.penjualan.jumlah);
      formData.append("harga_jual", this.penjualan.harga_jual);
      formData.append("payment", this.penjualan.payment);
      formData.append("nama_pembeli", this.penjualan.nama_pembeli);
      formData.append("phone_pembeli", this.penjualan.phone_pembeli);
      formData.append("alamat_pembeli", this.penjualan.alamat_pembeli);
      axios.post("/api/update-penjualan/".concat(param), formData).then(function (response) {
        _this.isUpdating = false;

        _this.$router.push({
          name: "penjualan"
        });

        console.log(response);
      })["catch"](function (error) {
        _this.isUpdating = false;
        console.log(error);
      });
    },
    getPenjualan: function getPenjualan(param) {
      var _this2 = this;

      axios.get("/api/get-penjualan/" + param).then(function (response) {
        console.log('penjualan', response);
        _this2.loading = false;

        _this2.getNamaBarang(response.data.barang_id);

        _this2.getHargaBarang(response.data.barang_id);

        _this2.penjualan.barang_id = response.data.barang_id;
        _this2.penjualan.tanggal = response.data.tanggal;
        _this2.penjualan.jumlah = response.data.jumlah;
        _this2.penjualan.harga_jual = response.data.harga_jual;
        _this2.penjualan.payment = response.data.payment;
        _this2.penjualan.nama_pembeli = response.data.nama_pembeli;
        _this2.penjualan.phone_pembeli = response.data.phone_pembeli;
        _this2.penjualan.alamat_pembeli = response.data.alamat_pembeli;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    setHarga: function setHarga(param) {
      this.penjualan.harga_jual = param;
    },
    getHargaBarang: function getHargaBarang(param) {
      var _this3 = this;

      axios.get("/api/get-harga-barang/" + param).then(function (response) {
        _this3.harga.standar = response.data.harga_jual_standar;
        _this3.harga.grosir = response.data.harga_jual_grosir; // this.penjualan.harga_jual = response.data.harga_jual_standar;

        console.log(response);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getNamaBarang: function getNamaBarang(param) {
      var _this4 = this;

      axios.get("/api/get-barang/" + param).then(function (response) {
        _this4.barangNama = response.data.barang_nama;
        _this4.barangStok = response.data.barang_stok;
        console.log(response);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    validateForm: function validateForm() {
      if (!this.penjualan.barang_id) {
        this.status = false;
        this.showNotification("nama barang tidak boleh kosong");
        return false;
      }

      if (!this.penjualan.jumlah) {
        this.status = false;
        this.showNotification("jumlah tidak boleh kosong");
        return false;
      }

      if (!this.penjualan.harga_jual) {
        this.status = false;
        this.showNotification("harga jual tidak boleh kosong");
        return false;
      }

      if (!this.penjualan.payment) {
        this.status = false;
        this.showNotification("pembayaran tidak boleh kosong");
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mx-datepicker[data-v-26ce47da] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.mx-input[data-v-26ce47da] {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  padding: 6px 30px;\n  padding-left: 10px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #555;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=template&id=26ce47da&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=template&id=26ce47da&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                  "h1",
                  { staticClass: "text-lg text-gray-500 pb-1 font-semibold" },
                  [_vm._v("Tambah Data Pembelian")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full mt-6 pl-0 lg:pl-2" }, [
                  _c("div", { staticClass: "leading-loose" }, [
                    _c("div", { staticClass: "p-10 bg-white rounded shadow" }, [
                      _c("div", { staticClass: "grid grid-cols-1" }, [
                        _c(
                          "div",
                          { staticClass: "px-4 my-2 grid grid-cols-2 gap-4" },
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
                                  "font-bold uppercase text-xl w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded",
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
                                    value: _vm.penjualan.jumlah,
                                    expression: "penjualan.jumlah"
                                  }
                                ],
                                staticClass:
                                  "w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded font-bold text-xl",
                                attrs: {
                                  readonly: "",
                                  id: "jumlah",
                                  type: "number",
                                  "aria-label": "jumlah",
                                  placeholder: "Masukkan jumlah pembelian"
                                },
                                domProps: { value: _vm.penjualan.jumlah },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.penjualan,
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
                          { staticClass: "px-4 my-2 grid grid-cols-2 gap-4" },
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
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tHarga Deal\n\t\t\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.penjualan.harga_jual,
                                    expression: "penjualan.harga_jual"
                                  }
                                ],
                                staticClass:
                                  "font-bold w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded text-xl",
                                attrs: {
                                  readonly: "",
                                  id: "barang_satuan",
                                  type: "number",
                                  placeholder: "Masukkan harga jual",
                                  "aria-label": "Email"
                                },
                                domProps: { value: _vm.penjualan.harga_jual },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.penjualan,
                                      "harga_jual",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "label",
                                {
                                  staticClass: "block text-base text-gray-400",
                                  attrs: { for: "cus_email" }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tTerbayar\n\t\t\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.penjualan.payment,
                                    expression: "penjualan.payment"
                                  }
                                ],
                                staticClass:
                                  "font-bold w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded text-xl",
                                attrs: {
                                  id: "barang_stok",
                                  type: "number",
                                  placeholder: "Jumlah yang dibayarkan",
                                  "aria-label": ""
                                },
                                domProps: { value: _vm.penjualan.payment },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.penjualan,
                                      "payment",
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
                          { staticClass: "px-4 my-2 grid grid-cols-2 gap-4" },
                          [
                            _c("div", { staticClass: "py-2 text-xl" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "block text-base text-gray-400",
                                  attrs: { for: "cus_email" }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tTanggal Penjualan\n\t\t\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticClass:
                                  "font-bold w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded text-xl",
                                attrs: {
                                  readonly: "",
                                  id: "barang_satuan",
                                  type: "text",
                                  "aria-label": "Email"
                                },
                                domProps: {
                                  value: _vm
                                    .moment(_vm.penjualan.tanggal)
                                    .format("LL")
                                }
                              })
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.showInfoPembeli
                          ? _c(
                              "div",
                              {
                                staticClass: "px-4 my-2 grid grid-cols-3 gap-4"
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
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\tNama Pembeli"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.penjualan.nama_pembeli,
                                        expression: "penjualan.nama_pembeli"
                                      }
                                    ],
                                    staticClass:
                                      "font-bold w-full px-4 py-2 text-xl text-gray-700 bg-indigo-50 rounded",
                                    attrs: {
                                      id: "barang_stok",
                                      type: "text",
                                      placeholder: "",
                                      "aria-label": ""
                                    },
                                    domProps: {
                                      value: _vm.penjualan.nama_pembeli
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.penjualan,
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
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\tTlp. Pembeli\n\t\t\t\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.penjualan.phone_pembeli,
                                        expression: "penjualan.phone_pembeli"
                                      }
                                    ],
                                    staticClass:
                                      "font-bold w-full px-4 py-2 text-xl text-gray-700 bg-indigo-50 rounded",
                                    attrs: {
                                      id: "barang_stok",
                                      type: "text",
                                      placeholder: "",
                                      "aria-label": ""
                                    },
                                    domProps: {
                                      value: _vm.penjualan.phone_pembeli
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.penjualan,
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
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\tALamat pembeli\n\t\t\t\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.penjualan.alamat_pembeli,
                                        expression: "penjualan.alamat_pembeli"
                                      }
                                    ],
                                    staticClass:
                                      "font-bold w-full px-4 py-2 text-xl text-gray-700 bg-indigo-50 rounded",
                                    attrs: {
                                      id: "barang_stok",
                                      type: "text",
                                      placeholder: "",
                                      "aria-label": ""
                                    },
                                    domProps: {
                                      value: _vm.penjualan.alamat_pembeli
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.penjualan,
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
                          { staticClass: "px-4 my-2 grid grid-cols-2 gap-4" },
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
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tTotal Harga"
                                  )
                                ]
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
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(_vm.totalHarga) +
                                      "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tKurang Bayar"
                                  )
                                ]
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
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(_vm.totalHutang) +
                                      "\n\t\t\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]),
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
                        { staticClass: "mt-6 px-4 flex items-center" },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "bg-gray-200 block rounded px-6 py-1 focus:outline-none hover:bg-gray-300 mr-4",
                              on: {
                                click: function($event) {
                                  _vm.showInfoPembeli = !_vm.showInfoPembeli
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\tCatat Pembelis\n\t\t\t\t\t\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "px-6 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-600 rounded",
                              on: {
                                click: function($event) {
                                  return _vm.updatePenjualan(_vm.id)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.isUpdating == true
                                      ? "Processing..."
                                      : "Update"
                                  ) +
                                  "\n\t\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]),
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

/***/ "./resources/js/pages/penjualan/PenjualanEdit.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/penjualan/PenjualanEdit.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PenjualanEdit_vue_vue_type_template_id_26ce47da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PenjualanEdit.vue?vue&type=template&id=26ce47da&scoped=true& */ "./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=template&id=26ce47da&scoped=true&");
/* harmony import */ var _PenjualanEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PenjualanEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PenjualanEdit_vue_vue_type_style_index_0_id_26ce47da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css& */ "./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PenjualanEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PenjualanEdit_vue_vue_type_template_id_26ce47da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PenjualanEdit_vue_vue_type_template_id_26ce47da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "26ce47da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/penjualan/PenjualanEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PenjualanEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_style_index_0_id_26ce47da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=style&index=0&id=26ce47da&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_style_index_0_id_26ce47da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_style_index_0_id_26ce47da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_style_index_0_id_26ce47da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_style_index_0_id_26ce47da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=template&id=26ce47da&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=template&id=26ce47da&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_template_id_26ce47da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PenjualanEdit.vue?vue&type=template&id=26ce47da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/penjualan/PenjualanEdit.vue?vue&type=template&id=26ce47da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_template_id_26ce47da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenjualanEdit_vue_vue_type_template_id_26ce47da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);