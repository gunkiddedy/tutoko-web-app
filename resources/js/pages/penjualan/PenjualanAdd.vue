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
                  class="grid grid-cols-1"
                >
                  <div class="px-4 my-2 grid grid-cols-2 gap-4">
                    <div class="">
                      <label class="block text-lg text-pink-600" for="cus_email"
                        >Nama Barang</label
                      >
                      <input 
                        readonly type="text" name="" id="" 
                        :value="barangs.barang_nama" 
                        class="font-bold uppercase w-full px-4 py-1 text-gray-700 bg-indigo-50 rounded">
                    </div>
                    <div class="">
                      <label class="block text-lg text-pink-600" for="cus_name"
                        >Jumlah Penjualan</label
                      >
                      <input
                        class="w-full px-4 py-1 text-gray-700 bg-indigo-50 rounded font-bold"
                        id="jumlah"
                        type="number"
                        aria-label="jumlah"
                        placeholder="Masukkan jumlah pembelian"
                        v-model="form.jumlah"
                      />
                    </div>
                  </div>

                  <div class="px-4 my-2 grid grid-cols-3 gap-4">
                    <div class="">
                      <label class="block text-lg text-pink-600" for="cus_email"
                        >Harga Standard</label
                      >
                      <input 
                        type="number" name="" id="" 
                        :value="hargas.harga_jual_standar" 
                        class="font-bold w-full px-4 py-1 text-gray-700 bg-indigo-50 rounded">
                    </div>
                    <div class="">
                      <label class="block text-lg text-pink-600" for="cus_email"
                        >Harga Grosir</label
                      >
                      <input 
                        type="number" name="" id="" 
                        :value="hargas.harga_jual_grosir" 
                        class="font-bold w-full px-4 py-1 text-gray-700 bg-indigo-50 rounded">
                    </div>
                    <div class="">
                      <label class="block text-lg text-pink-600" for="cus_email"
                        >Harga Nego</label
                      >
                      <input
                        class="font-bold w-full px-4 py-1 text-gray-700 bg-indigo-50 rounded"
                        id="barang_satuan"
                        v-model="form.harga_jual"
                        type="number"
                        placeholder="Masukkan harga jual"
                        aria-label="Email"
                      />
                    </div>
                  </div>

                  <div class="px-4 my-2">
                    <label class="block text-lg text-pink-600" for="cus_email"
                      >Terbayar</label
                    >
                    <input
                      class="font-bold w-full px-4 py-1 text-gray-700 bg-indigo-50 rounded"
                      id="barang_stok"
                      v-model="form.payment"
                      type="number"
                      placeholder="Jumlah yang dibayarkan"
                      aria-label=""
                    />
                  </div>
                  
                  <div class="px-4 my-2">
                    <label class="block text-lg text-pink-600" for="cus_email"
                      >Tanggal Penjualan</label
                    >
                    <date-picker
                      v-model="form.tanggal" 
                      value-type="format" 
                      placeholder="Tanggal Pembelian" 
                      format="DD-MM-YYYY"></date-picker>
                  </div>

                  <div class="px-4 my-2 grid grid-cols-3 gap-4">
                    <div class="" v-if="showInfoPembeli">
                      <label class="block text-lg text-pink-600" for="cus_email"
                        >Nama Pembeli</label
                      >
                      <input
                        class="font-bold w-full px-4 py-1 text-gray-700 bg-indigo-50 rounded"
                        id="barang_stok"
                        v-model="form.nama_pembeli"
                        type="text"
                        placeholder=""
                        aria-label=""
                      />
                    </div>

                    <div class="" v-if="showInfoPembeli">
                      <label class="block text-lg text-pink-600" for="cus_email"
                        >Tlp. Pembeli</label
                      >
                      <input
                        class="font-bold w-full px-4 py-1 text-gray-700 bg-indigo-50 rounded"
                        id="barang_stok"
                        v-model="form.phone_pembeli"
                        type="text"
                        placeholder=""
                        aria-label=""
                      />
                    </div>

                    <div class="" v-if="showInfoPembeli">
                      <label class="block text-lg text-pink-600" for="cus_email"
                        >ALamat pembeli</label
                      >
                      <input
                        class="font-bold w-full px-4 py-1 text-gray-700 bg-indigo-50 rounded"
                        id="barang_stok"
                        v-model="form.alamat_pembeli"
                        type="text"
                        placeholder=""
                        aria-label=""
                      />
                    </div>
                  </div>

                  <div class="px-4 my-2 grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-lg text-pink-600" for="cus_email"
                        >Total Harga</label
                      >
                      <div class="total-harga font-bold text-2xl text-gray-900">
                        {{totalHarga}}
                      </div>
                    </div>
                    <div>
                      <label class="block text-lg text-pink-600" for="cus_email"
                        >Kurang Bayar</label
                      >
                      <div class="hutang font-bold text-2xl text-red-500">
                        {{totalHutang}}
                      </div>
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
                <div class="mt-6 px-4 flex items-center">
                  <button
                      @click="showInfoPembeli = !showInfoPembeli" 
                      class="bg-gray-200 block rounded px-6 py-1 focus:outline-none hover:bg-gray-300 mr-4">
                      Catat Pembeli
                    </button>
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
  props: ['id'],
  data() {
    return {
      showInfoPembeli: false,

      isSaving: false,
      status_msg: "",
      status: '',

      barangs: null,
      hargas: null,
      
      selectedHarga: 0,

      form: {
        barang_id: '',
        supplier_id: '',
        tanggal: '',
        jumlah: 0,
        harga_jual: 0,
        payment: 0,
        nama_pembeli: '-',
        phone_pembeli: '-',
        alamat_pembeli: '-',
      },
    }
  },
  computed: {
    totalHarga: function () {
      let totalH = this.form.jumlah * this.form.harga_jual;

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
      // return this.form.jumlah * this.form.harga_jual
    },
    totalHutang: function() {
      let totalHarga = this.form.jumlah * this.form.harga_jual;
      let totalU = this.form.payment - totalHarga;

      if(totalU){
        if(this.form.payment > totalHarga)
          return 0
        else{
          let number = totalU;
          let	reverse = number.toString().split('').reverse().join('');
          let ribuan 	= reverse.match(/\d{1,3}/g);
          ribuan	= ribuan.join('.').split('').reverse().join('');
          return ribuan;
        }
      }
      else {
        return totalU
      }
      // return this.form.payment - (this.form.jumlah * this.form.harga_jual)
    }
  },
  mounted(){
    this.getBarang(this.id);
    this.getHargaBarang(this.id);
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      this.isSaving = true;

      if (!this.validateForm()) {
        this.isSaving = false;
        return false;
      }

      const formData = new FormData();
      formData.append("barang_id", this.form.barang_id);

      if(this.form.tanggal == ''){
        let todayDate = new Date().toISOString().slice(0, 10);
        formData.append("tanggal", todayDate);
      }else{
        let date = this.form.tanggal.toLocaleString('en-GB').split('-');
        let fixDate = date[2] + '-' + date[1] + '-' + date[0];
        formData.append("tanggal", fixDate);
      }

      formData.append("jumlah", this.form.jumlah);
      formData.append("harga_jual", this.form.harga_jual);
      formData.append("payment", this.form.payment);
      formData.append("nama_pembeli", this.form.nama_pembeli);
      formData.append("phone_pembeli", this.form.phone_pembeli);
      formData.append("alamat_pembeli", this.form.alamat_pembeli);

      axios.post("/api/add-data-penjualan", formData)
        .then((response) => {
          console.log(response);
          this.showNotification("Data Successfully Added");
          this.isSaving = false;
          this.$router.push('penjualan');
        })
        .catch((error) => {
          this.isSaving = false;
          this.status_msg = error;
          console.log(error);
        });
    },
    getHargaBarang(param){
      axios.get("/api/get-harga-barang/" + param)
        .then((response) => {
          this.hargas = response.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBarang(param){
      axios.get("/api/get-barang/"+param)
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
