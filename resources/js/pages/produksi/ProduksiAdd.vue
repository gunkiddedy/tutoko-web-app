<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-1 md:p-6 bg-white">
          <!-- Content goes here! 😁 -->
          <h1 class="text-lg text-gray-500 pb-1 font-semibold">Tambah Data Produksi</h1>
          <div class="w-full mt-6 pl-0 lg:pl-2">
            <div class="leading-loose">
              <div class="p-2 md:p-10 bg-white rounded shadow">
                <div
                  class="grid grid-cols-1 md:grid-cols-2"
                >
                  <div class="px-0 md:px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Nama Barang</label
                    >
                    <select
                        v-model="form.barang_id"
                        class="w-full px-5 py-2 rounded text-gray-500 focus:outline-none focus:shadow-inner border-2 border-blue-200 bg-white appearance-none uppercase text-lg font-bold"
                      >
                      <option class="text-gray-700" value="" selected="selected">
                        -Pilih Barang-
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

                  <div class="px-0 md:px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Nama Pegawai</label
                    >
                    <select
                        v-model="form.pegawai_id"
                        class="w-full px-5 py-2 rounded text-gray-500 focus:outline-none focus:shadow-inner border-2 border-blue-200 bg-white appearance-none uppercase text-lg font-bold"
                      >
                      <option class="text-gray-700" value="" selected="selected">
                        -Pilih Pegawai-
                      </option>
                      <option
                        class="text-gray-700"
                        v-for="(pegawai, i) in pegawais"
                        :value="pegawai.id"
                        :key="i"
                      >
                        {{ pegawai.pegawai_nama }}
                      </option>
                    </select>
                  </div>

                  <div class="px-0 md:px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_name"
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
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Harga Pokok Produksi</label
                    >
                    <input
                      class="w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-white rounded uppercase text-lg font-bold"
                      id="barang_satuan"
                      v-model="form.hpp"
                      type="number"
                      min="0"
                      placeholder="Harga Pokok Produksi"
                    />
                  </div>

                  <div class="px-0 md:px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Upah Produksi</label
                    >
                    <input
                      class="w-full px-4 py-2 text-gray-700 border-2 border-blue-200 bg-white rounded uppercase text-lg font-bold"
                      id="barang_satuan"
                      v-model="form.upah"
                      type="number"
                      min="0"
                      placeholder="Upah produksi"
                    />
                  </div>
                  
                  <div class="px-0 md:px-4 my-2">
                    <label class="block text-lg text-gray-600" for="cus_email"
                      >Tanggal Produksi</label
                    >
                    <date-picker
                      v-model="form.produksi_tanggal" 
                      value-type="format" 
                      placeholder="Tanggal Produksi" 
                      format="DD-MM-YYYY"></date-picker>
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
                    @click="saveData"
                    class="px-6 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-600 rounded"
                  >
                    {{ isSaving == true ? "Processing..." : "Simpan Data" }}
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
      isSaving: false,
      status_msg: "",
      status: '',

      barangs: null,
      pegawais: null,

      form: {
        barang_id: '',
        pegawai_id: '',
        produksi_tanggal: '',
        produksi_jumlah: '',
        hpp: '',
        upah: '',
      },
    }
  },
  mounted(){
    this.getPegawais();
    this.getBarangs();
  },
  methods: {
    cancel(){
      this.$router.push('/produksi');
    },
    saveData(e) {
      e.preventDefault();
      this.isSaving = true;

      if (!this.validateForm()) {
        this.isSaving = false;
        return false;
      }

      const formData = new FormData();
      formData.append("barang_id", this.form.barang_id);
      formData.append("pegawai_id", this.form.pegawai_id);

      if(this.form.produksi_tanggal == ''){
        let todayDate = new Date().toISOString().slice(0, 10);
        formData.append("produksi_tanggal", todayDate);
      }else{
        let date = this.form.produksi_tanggal.toLocaleString('en-GB').split('-');
        let fixDate = date[2] + '-' + date[1] + '-' + date[0];
        formData.append("produksi_tanggal", fixDate);
      }

      formData.append("produksi_jumlah", this.form.produksi_jumlah);
      formData.append("hpp", this.form.hpp);
      formData.append("upah", this.form.upah);

      axios.post("/api/add-data-produksi", formData)
        .then((response) => {
          console.log(response);
          this.showNotification("Data Successfully Added");
          this.isSaving = false;
          this.$router.push('produksi');
        })
        .catch((error) => {
          this.isSaving = false;
          this.status_msg = error;
          console.log(error);
        });
    },
    getPegawais(){
      axios.get("/api/pegawai/")
        .then((response) => {
          this.pegawais = response.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBarangs(){
      axios.get("/api/barang-mandiri/")
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
