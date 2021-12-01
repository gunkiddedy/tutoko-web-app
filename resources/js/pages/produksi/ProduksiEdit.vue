<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-1 md:p-6 bg-white">
          <!-- Content goes here! 😁 -->
          <h1 class="text-lg text-gray-500 pb-1 font-semibold">Edit Data Produksi</h1>
          <div class="w-full mt-6 pl-0 lg:pl-2">
            <div class="leading-loose">
              <div class="p-2 md:p-10 bg-white rounded shadow">
                <div
                  class="grid grid-cols-1 md:grid-cols-2"
                >
                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-lg text-gray-600" for="cus_email"
                      >Nama Barang</label
                    >
                    <input 
                        readonly type="text" name="" id="" 
                        :value="`${produksi.barang_nama}`"
                        class="font-bold uppercase text-xl w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded">
                  </div>

                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-lg text-gray-600" for="cus_email"
                      >Nama Pegawai</label
                    >
                    <input 
                        readonly 
                        type="text" 
                        name="" 
                        id="" 
                        :value="`${produksi.pegawai_nama}`"
                        class="font-bold uppercase text-xl w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded">
                  </div>

                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-lg text-gray-600" for="cus_name"
                      >Jumlah Produksi</label
                    >
                    <input
                      class="w-full px-4 py-2 focus:bg-blue-50 text-gray-700 rounded border-2 border-blue-200 bg-white uppercase text-lg font-bold"
                      id="jumlah"
                      type="number"
                      min="0"
                      placeholder="Jumlah produksi"
                      v-model="form.produksi_jumlah"
                    />
                  </div>

                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-lg text-gray-600" for="cus_email"
                      >Tanggal Produksi</label
                    >
                    <date-picker
                      v-model="form.produksi_tanggal" 
                      value-type="format" 
                      placeholder="Tanggal Produksi" 
                      format="YYYY-MM-DD"></date-picker>
                  </div>

                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-lg text-gray-600" for="cus_email"
                      >Harga Pokok Produksi</label
                    >
                    <input
                      readonly
                      class="w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-gray-50 rounded uppercase text-lg font-bold"
                      id="barang_satuan"
                      v-model="form.hpp"
                      type="number"
                      min="0"
                      placeholder="Harga Pokok Produksi"
                    />
                  </div>

                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-lg text-gray-600" for="cus_email"
                      >Upah Produksi</label
                    >
                    <input
                      readonly
                      class="w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-gray-50 rounded uppercase text-lg font-bold"
                      id="barang_satuan"
                      v-model="form.upah"
                      type="number"
                      min="0"
                      placeholder="Upah produksi"
                    />
                  </div>

                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-lg text-gray-600" for="cus_email"
                      >harga jual standar</label
                    >
                    <input
                      readonly
                      class="w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-gray-50 rounded uppercase text-lg font-bold"
                      id="barang_satuan"
                      v-model="form.hjs"
                      type="number"
                      min="0"
                      placeholder="hjs"
                    />
                  </div>

                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-lg text-gray-600" for="cus_email"
                      >harga jual grosir</label
                    >
                    <input
                      readonly
                      class="w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-gray-50 rounded uppercase text-lg font-bold"
                      id="barang_satuan"
                      v-model="form.hjg"
                      type="number"
                      min="0"
                      placeholder="hjg"
                    />
                  </div>                  
                </div><!-- grid -->

                <div class="mt-2">
                  <span
                    class="px-4 text-sm font-sf-pro"
                    :class="{ 'text-green-400': status, 'text-red-400': !status }"
                    >{{ status_msg }}</span
                  >
                </div>
                <div class="mt-6 px-0 md:px-4">
                  <button
                    @click="updateProduksi(id)"
                    class="px-6 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-600 rounded"
                  >
                    {{ isUpdating == true ? "Processing..." : "Update" }}
                  </button>
                  <button
                    @click="cancel"
                    class="ml-4 px-6 py-1 text-white font-light tracking-wider bg-red-400 hover:bg-red-600 rounded">Batal
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
      isUpdating: false,
      status_msg: "",
      status: '',

      produksi: '',
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
        hjg: 0,
      },
    }
  },
  created() {
    console.log('created');
    // this.getProduksi(this.id);
    this.getProduksiDetail();
  },
  mounted(){
    console.log('mounted');
    // this.getProduksiDetail();
    // this.getPegawais();
  },
  methods: {
    cancel(){
      this.$router.go(-1);
    },
    updateProduksi(param) {
      this.isUpdating = true;
      const formData = new FormData();
      formData.append("barang_id", this.form.barang_id);
      formData.append("pegawai_id", this.form.pegawai_id);
      formData.append("produksi_tanggal", this.form.produksi_tanggal);
      formData.append("produksi_jumlah", this.form.produksi_jumlah);
      formData.append("hpp", this.form.hpp);
      formData.append("upah", this.form.upah);
      formData.append("hjs", this.form.hjs);
      formData.append("hjg", this.form.hjg);      
      axios
        .post(`/api/update-produksi/${param}`, formData)
        .then((response) => {
          this.isUpdating = false;
          this.$router.push({
            name: "produksi",
          });
          console.log(response);
        })
        .catch((error) => {
          this.isUpdating = false;
          console.log(error);
        });
    },
    getProduksiDetail() {
      axios.get('/api/produksi-detail/' + this.id)
      .then((res) => {
        this.produksi = res.data[0];
        this.form.barang_id = res.data[0].barang_id;
        this.form.pegawai_id = res.data[0].pegawai_id;
        this.form.produksi_jumlah = res.data[0].produksi_jumlah;
        this.form.produksi_tanggal = res.data[0].produksi_tanggal;
        this.form.produksi_jumlah = res.data[0].produksi_jumlah;
        this.form.hpp = res.data[0].hpp;
        this.form.upah = res.data[0].upah;
        this.form.hjs = res.data[0].hjs;
        this.form.hjg = res.data[0].hjg;
        console.log(res.data[0]);
      })
    },
    validateForm() {
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
