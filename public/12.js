(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/barang/BarangEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/barang/BarangEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      barang_nama: "",
      barang_satuan: "",
      barang_stok: "",
      barang_tipe: "",
      upah: 0,
      hpp: 0,
      hjs: 0,
      hjg: 0,
      active: "",
      photo: "",
      tipes: ["Mandiri", "Supplier"],
      status: ["Active", "Inactive"],
      url: "",
      imageList: []
    };
  },
  mounted: function mounted() {
    this.getDataBarang(this.id);
  },
  methods: {
    cancel: function cancel() {
      this.$router.go(-1);
    },
    onFileChange: function onFileChange(e) {
      var file = e.target.files[0];
      this.imageList.push(file);
      this.url = URL.createObjectURL(file);
      console.log(this.photo);
    },
    getDataBarang: function getDataBarang(param) {
      var _this = this;

      axios.get("/api/get-barang/" + param).then(function (response) {
        _this.loading = false;
        _this.barang_nama = response.data.barang_nama;
        _this.barang_satuan = response.data.barang_satuan;
        _this.barang_stok = response.data.barang_stok;
        _this.barang_tipe = response.data.barang_tipe;
        _this.upah = response.data.upah;
        _this.hpp = response.data.hpp;
        _this.hjs = response.data.hjs;
        _this.hjg = response.data.hjg;
        _this.photo = response.data.photo;
        _this.active = response.data.active;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    deletePhoto: function deletePhoto(param) {
      axios.post("/api/delete-photo/" + param).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateDataBarang: function updateDataBarang(param) {
      var _this2 = this;

      this.isUpdating = true;
      var formData = new FormData();
      formData.append("barang_nama", this.barang_nama);
      formData.append("barang_satuan", this.barang_satuan);
      formData.append("barang_stok", this.barang_stok);
      formData.append("barang_tipe", this.barang_tipe);
      formData.append("upah", this.upah);
      formData.append("hpp", this.hpp);
      formData.append("hjs", this.hjs);
      formData.append("hjg", this.hjg);
      formData.append("active", this.active); // console.log(this.imageList);

      this.imageList.forEach(function (file) {
        formData.append("photo", file, file.name);
      });
      axios.post("/api/update-barang/".concat(param), formData).then(function (response) {
        _this2.isUpdating = false;

        _this2.$router.push({
          name: "barang"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/barang/BarangEdit.vue?vue&type=template&id=73c05980&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/barang/BarangEdit.vue?vue&type=template&id=73c05980&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                  [_vm._v("\n            Edit Data Barang\n          ")]
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
                                "w-full px-5 py-1 text-gray-700 bg-gray-50 rounded",
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
                                "w-full px-2 py-1 text-gray-700 bg-gray-50 rounded",
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
                          _c("div", { staticClass: "px-4 my-2" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "uppercase block text-sm text-gray-600",
                                attrs: { for: "cus_email" }
                              },
                              [_vm._v("Stok")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.barang_stok,
                                  expression: "barang_stok"
                                }
                              ],
                              staticClass:
                                "w-full px-2 py-1 text-gray-700 bg-gray-50 rounded",
                              attrs: {
                                id: "barang_stok",
                                type: "text",
                                placeholder: "Stok",
                                "aria-label": ""
                              },
                              domProps: { value: _vm.barang_stok },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.barang_stok = $event.target.value
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "px-4 my-2" }, [
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
                                "w-full px-2 py-1 text-gray-700 bg-gray-50 rounded",
                              attrs: {
                                id: "barang_stok",
                                type: "text",
                                placeholder: "upah",
                                "aria-label": ""
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
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "px-4 my-2" }, [
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
                                "w-full px-2 py-1 text-gray-700 bg-gray-50 rounded",
                              attrs: {
                                id: "barang_hpp",
                                type: "text",
                                placeholder: "hpp",
                                "aria-label": ""
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
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "px-4 my-2" }, [
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
                                "w-full px-2 py-1 text-gray-700 bg-gray-50 rounded",
                              attrs: {
                                id: "barang_hjs",
                                type: "text",
                                placeholder: "hjs",
                                "aria-label": ""
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
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "px-4 my-2" }, [
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
                                "w-full px-2 py-1 text-gray-700 bg-gray-50 rounded",
                              attrs: {
                                id: "barang_hjg",
                                type: "text",
                                placeholder: "hjg",
                                "aria-label": ""
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
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "px-4 my-2" }, [
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
                                    attrs: { value: "", selected: "selected" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        -Pilih-\n                      "
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
                                        "\n                        " +
                                          _vm._s(tipe) +
                                          "\n                      "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "px-4 my-2" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "uppercase block text-sm text-gray-600",
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
                                  [
                                    _vm._v(
                                      "\n                        -Pilih-\n                      "
                                    )
                                  ]
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
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(stat) +
                                          "\n                      "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-4 flex items-center" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "bg-gray-50 px-4 border-2 border-dotted py-2 w-full"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "flex items-center justify-start"
                              },
                              [
                                _c("div", [
                                  _c("img", {
                                    staticClass: "w-1/3",
                                    attrs: {
                                      src: "/storage/" + _vm.photo,
                                      alt: _vm.barang_nama
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Photo Lama")])
                                ]),
                                _vm._v(" "),
                                _vm.url
                                  ? _c("div", [
                                      _c("img", {
                                        staticClass: "w-1/3",
                                        attrs: { src: _vm.url }
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Photo Baru")])
                                    ])
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "uppercase bg-yellow-500 flex justify-center px-2 items-center mt-3 py-2 rounded-lg border border-blue cursor-pointer hover:bg-yellow-600 w-1/3"
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "w-8 h-8 text-white",
                                      attrs: {
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-semibold text-white ml-2"
                                    },
                                    [_vm._v("Pilih file")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    ref: "file",
                                    staticClass: "hidden",
                                    attrs: { type: "file" },
                                    on: { change: _vm.onFileChange }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "text-red-500 font-bold text-sm"
                                },
                                [
                                  _vm._v(
                                    "Abaikan jika photo tidak ingin diganti"
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-6 px-4" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "px-4 py-1 text-white font-light tracking-wider bg-blue-500 hover:bg-blue-600 rounded",
                            on: {
                              click: function($event) {
                                return _vm.updateDataBarang(_vm.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t" +
                                _vm._s(
                                  _vm.isUpdating == true
                                    ? "Updating..."
                                    : "Update Data"
                                ) +
                                "\n\t\t\t\t\t"
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
                          [_vm._v("Batal\n\t\t\t\t\t\t\t")]
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

/***/ "./resources/js/pages/barang/BarangEdit.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/barang/BarangEdit.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangEdit_vue_vue_type_template_id_73c05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangEdit.vue?vue&type=template&id=73c05980&scoped=true& */ "./resources/js/pages/barang/BarangEdit.vue?vue&type=template&id=73c05980&scoped=true&");
/* harmony import */ var _BarangEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/barang/BarangEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BarangEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangEdit_vue_vue_type_template_id_73c05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangEdit_vue_vue_type_template_id_73c05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "73c05980",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/barang/BarangEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/barang/BarangEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/barang/BarangEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/barang/BarangEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/barang/BarangEdit.vue?vue&type=template&id=73c05980&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/barang/BarangEdit.vue?vue&type=template&id=73c05980&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangEdit_vue_vue_type_template_id_73c05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangEdit.vue?vue&type=template&id=73c05980&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/barang/BarangEdit.vue?vue&type=template&id=73c05980&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangEdit_vue_vue_type_template_id_73c05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangEdit_vue_vue_type_template_id_73c05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);