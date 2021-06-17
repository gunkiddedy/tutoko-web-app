<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6 bg-white">
          <!-- Content goes here! 😁 -->
          <h1 class="text-lg text-gray-500 pb-1 font-semibold">Tambah Data Pembelian</h1>
          <div class="w-full mt-6 pl-0 lg:pl-2">
            <div class="leading-loose">
              <div class="p-10 bg-white rounded shadow">
                <div
                  class="grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2"
                >
                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Nama Barang</label
                    >
                    <!-- <select
                      class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                      <option
												selected
												disabled
                        class="text-gray-700"
                        v-for="(barang, i) in barangs"
                        :value="barang.id"
                        :key="i"
                      >
                        {{ barang.barang_nama }}
                      </option>
                    </select> -->
                    <input 
												readonly type="text" name="" id="" 
												:value="`${barangNama}`"
												class="font-bold uppercase text-xl w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded">
                  </div>

                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Nama Supplier</label
                    >
                    <select
                        v-model="form.supplier_id"
                        class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                      <option class="text-gray-700" value="" selected="selected">
                        -Pilih-
                      </option>
                      <option
                        class="text-gray-700"
                        v-for="(supplier, i) in suppliers"
                        :value="supplier.id"
                        :key="i"
                      >
                        {{ supplier.supplier_nama }}
                      </option>
                    </select>
                  </div>

                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_name"
                      >Jumlah Pembelian</label
                    >
                    <input
                      readonly
                      class="w-full px-5 py-1 text-gray-700 bg-gray-50 rounded"
                      id="jumlah"
                      type="number"
                      aria-label="jumlah"
                      placeholder="Masukkan jumlah pembelian"
                      v-model="form.jumlah"
                    />
                  </div>

                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Harga Beli</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-50 rounded"
                      id="barang_satuan"
                      v-model="form.harga_beli"
                      type="number"
                      placeholder="Masukkan harga beli"
                      aria-label="Email"
                    />
                  </div>

                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Terbayar</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-50 rounded"
                      id="barang_stok"
                      v-model="form.payment"
                      type="number"
                      placeholder="Jumlah yang dibayarkan"
                      aria-label=""
                    />
                  </div>
                  
                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Tanggal Pembelian {{ form.tanggal }}</label
                    >
                    <date-picker
                      v-model="form.tanggal" 
                      value-type="format" 
                      placeholder="Tanggal Pembelian" 
                      format="YYYY-MM-DD"></date-picker>
                  </div>

                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Harga Jual Standar</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-50 rounded"
                      id="barang_stok"
                      v-model="form.harga_jual_standar"
                      type="number"
                      placeholder="Jumlah yang dibayarkan"
                      aria-label=""
                    />
                  </div>

                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Harga Jual Grosir</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-50 rounded"
                      id="barang_stok"
                      v-model="form.harga_jual_grosir"
                      type="number"
                      placeholder="Jumlah yang dibayarkan"
                      aria-label=""
                    />
                  </div>

                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Total Harga</label
                    >
                    <div class="total-harga font-bold text-2xl text-gray-900">
                      {{totalHarga}}
                    </div>
                  </div>

                  <div class="px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Kurang Bayar</label
                    >
                    <div class="hutang font-bold text-2xl text-red-500">
                      {{totalHutang}}
                    </div>
                  </div>

                </div><!-- grid -->

                <div class="mt-2">
                  <span
                    class="px-4 text-sm font-sf-pro"
                    :class="{ 'text-green-400': status, 'text-red-400': !status }"
                    >{{ status_msg }}</span
                  >
                </div>
                <div class="mt-6 px-4">
                  <button
                    @click="updatePembelian(id)"
                    class="px-6 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-600 rounded"
                  >
                    {{ isUpdating == true ? "Processing..." : "Update" }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer-component></footer-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      loading: true,
      isUpdating: false,
			status_msg: "",
      status: '',
			form: {
        barang_id: '',
        supplier_id: '',
        tanggal: '',
        jumlah: 0,
        harga_beli: 0,
        payment: 0,
        harga_jual_standar: 0,
        harga_jual_grosir: 0
      },

      suppliers: [],
      barangNama: null,
    };
  },
	computed: {
    totalHarga: function () {
      let totalH = this.form.jumlah * this.form.harga_beli;

      if(totalH){
        let number = totalH;
        let	reverse = number.toString().split('').reverse().join('');
        let ribuan 	= reverse.match(/\d{1,3}/g);
        ribuan	= ribuan.join('.').split('').reverse().join('');
        return ribuan;
      }
      else {
        return totalH
      }
      // return this.form.jumlah * this.form.harga_beli
    },
    totalHutang: function() {
      let totalU = this.form.payment - (this.form.jumlah * this.form.harga_beli);

      if(totalU){
        let number = totalU;
        let	reverse = number.toString().split('').reverse().join('');
        let ribuan 	= reverse.match(/\d{1,3}/g);
        ribuan	= ribuan.join('.').split('').reverse().join('');
        return '-' + ribuan;
      }
      else {
        return totalU
      }
      // return this.form.payment - (this.form.jumlah * this.form.harga_beli)
    }
  },
  mounted() {
    this.getPembelian(this.id);
    this.getSuppliers();
    // this.getBarangs();
  },
  methods: {
    getSuppliers(){
      axios
        .get("/api/supplier/")
        .then((response) => {
          this.suppliers = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBarangs(param){
      axios
        .get("/api/get-barang/" + param)
        .then((response) => {
          this.barangNama = response.data.barang_nama;
          console.log('getbarang', response)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPembelian(param) {
      axios
        .get("/api/get-pembelian/" + param)
        .then((response) => {
          this.getBarangs(response.data.barang_id)
          this.loading = false;
          this.form.supplier_id = response.data.supplier_id;
          this.form.barang_id = response.data.barang_id;
          this.form.tanggal = response.data.tanggal;
          this.form.jumlah = response.data.jumlah;
          this.form.harga_beli = response.data.harga_beli;
          this.form.payment = response.data.payment;
          this.form.harga_jual_standar = response.data.harga_jual_standar;
          this.form.harga_jual_grosir = response.data.harga_jual_grosir;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updatePembelian(param) {
      this.isUpdating = true;
      const formData = new FormData(); 
      formData.append("supplier_id", this.form.supplier_id);
      formData.append("barang_id", this.form.barang_id);
      formData.append("tanggal", this.form.tanggal);
			formData.append("tanggal", this.form.tanggal);
      formData.append("jumlah", this.form.jumlah);
      formData.append("harga_beli", this.form.harga_beli);
      formData.append("payment", this.form.payment);
      formData.append("harga_jual_standar", this.form.harga_jual_standar);
      formData.append("harga_jual_grosir", this.form.harga_jual_grosir);
      axios
        .post(`/api/update-pembelian/${param}`, formData)
        .then((response) => {
          this.isUpdating = false;
          this.$router.push({
            name: "pembelian",
          });
          console.log(response);
        })
        .catch((error) => {
          this.isUpdating = false;
          console.log(error);
        });
    },
		validateForm() {
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
    showNotification(message) {
      this.status_msg = message;
      setTimeout(() => {
        this.status_msg = "";
      }, 3000);
    }
  },
};
</script>

<style scoped></style>
