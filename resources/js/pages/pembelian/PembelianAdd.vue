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
                    <select
                        v-model="form.barang_id"
                        class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                      <option class="text-gray-700" value="" selected="selected">
                        -Pilih-
                      </option>
                      <option
                        class="text-gray-700"
                        v-for="(barang, i) in barangs"
                        :value="barang.id"
                        :key="i"
                      >
                        {{ barang.barang_nama }}
                      </option>
                    </select>
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
                      >Tanggal Pembelian</label
                    >
                    <date-picker
                      v-model="form.tanggal" 
                      value-type="format" 
                      placeholder="Tanggal Pembelian" 
                      format="DD-MM-YYYY"></date-picker>
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
                    @click="saveData"
                    class="px-6 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-600 rounded"
                  >
                    {{ isSaving == true ? "Processing..." : "Submit" }}
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
      },
    }
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
  mounted(){
    this.getSuppliers();
    this.getBarangs();
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      this.isSaving = true;

      if (!this.validateForm()) {
        this.isSaving = false;
        return false;
      }

      let date = this.form.tanggal.toLocaleString('en-GB').split('-');
			let fixDate = date[1]+'-'+date[0]+'-'+date[2];

      const formData = new FormData();
      formData.append("supplier_id", this.form.supplier_id);
      formData.append("barang_id", this.form.barang_id);

      if(this.form.tanggal == ''){
        let todayDate = new Date().toISOString().slice(0, 10);
        formData.append("tanggal", todayDate);
      }else{
        formData.append("tanggal", fixDate);
      }

      formData.append("jumlah", this.form.jumlah);
      formData.append("harga_beli", this.form.harga_beli);
      formData.append("payment", this.form.payment);
      formData.append("harga_jual_standar", this.form.harga_jual_standar);
      formData.append("harga_jual_grosir", this.form.harga_jual_grosir);

      axios.post("/api/add-data", formData)
        .then((response) => {
          console.log(response);
          this.showNotification("Data Successfully Added");
          this.isSaving = false;
          this.$router.push('pembelian');
        })
        .catch((error) => {
          this.isSaving = false;
          this.status_msg = error;
          console.log(error);
        });
    },
    getSuppliers(){
      axios.get("/api/supplier/")
        .then((response) => {
          this.suppliers = response.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBarangs(){
      axios.get("/api/barang-non-mandiri/")
        .then((response) => {
          this.barangs = response.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
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

<style scoped>
.mx-datepicker {
    position: relative;
    display: inline-block;
    width: 100%;
}

.mx-input {
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 6px 30px;
    padding-left: 10px;
    font-size: 14px;
    line-height: 1.4;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}
</style>
