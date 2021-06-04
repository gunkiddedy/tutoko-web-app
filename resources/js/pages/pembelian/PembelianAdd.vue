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
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Nama Barang</label
                    >
                    <select
                        v-model="barang_id"
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
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Nama Supplier</label
                    >
                    <select
                        v-model="supplier_id"
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
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >Jumlah Pembelian</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-50 rounded"
                      id="jumlah"
                      type="number"
                      aria-label="jumlah"
                      v-model="jumlah"
                    />
                  </div>
                  <div class="px-4 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Harga Beli</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-50 rounded"
                      id="barang_satuan"
                      v-model="harga_beli"
                      type="number"
                      placeholder="Satuan"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-4 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Terbayar</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-50 rounded"
                      id="barang_stok"
                      v-model="payment"
                      type="text"
                      placeholder="Jumlah yang dibayarkan"
                      aria-label=""
                    />
                  </div>
                  <div class="px-4 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Jenis Barang</label
                    >
                    <select
                        v-model="barang_tipe"
                        class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                      <option class="text-gray-700" value="" selected="selected">
                        -Pilih-
                      </option>
                      <option
                        class="text-gray-700"
                        v-for="(tipe, i) in tipes"
                        :value="tipe"
                        :key="i"
                      >
                        {{ tipe }}
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <span
                    class="px-4 text-sm font-sf-pro"
                    :class="{ 'text-green-400': status, 'text-red-400': !status }"
                    >{{ status_msg }}</span
                  >
                </div>
                <div class="mt-6">
                  <button
                    @click="saveDataBarang"
                    class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
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
      barangs: null,
      suppliers: null,
      barang_id: '',
      supplier_id: '',
    }
  },
  mounted(){
    this.getSuppliers();
    this.getBarangs();
  },
  methods: {
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
      if (!this.barang_nama) {
        this.status = false;
        this.showNotification("nama barang tidak boleh kosong");
        return false;
      }
      if (!this.barang_satuan) {
        this.status = false;
        this.showNotification("satuan tidak boleh kosong");
        return false;
      }
      return true;
    },
    showNotification(message) {
      this.status_msg = message;
      setTimeout(() => {
        this.status_msg = "";
      }, 3000);
    },
    saveDataBarang(e) {
      e.preventDefault();
      if (!this.validateForm()) {
        this.isSaving = false;
        return false;
      }
      this.isSaving = true;
      const formData = new FormData();
      formData.append("barang_nama", this.barang_nama);
      formData.append("barang_satuan", this.barang_satuan);
      formData.append("barang_stok", this.barang_stok);
      formData.append("barang_tipe", this.barang_tipe);
	    this.imageList.forEach((file) => {
        formData.append("photo", file, file.name);
      });
      axios.post("/api/add-data-barang", formData)
        .then((response) => {
          console.log(response);
          this.showNotification("Data Successfully Added");
          this.isSaving = false;
          this.$router.go(-1);
        })
        .catch((error) => {
          this.status_msg = error;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
