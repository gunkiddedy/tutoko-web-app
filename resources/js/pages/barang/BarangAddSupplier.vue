<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-1 md:p-6 bg-white">
          <!-- Content goes here! 😁 -->
          <h1 class="text-lg text-gray-500 pb-1 font-semibold text-center mt-4">
            Tambah Data Barang Supplier
          </h1>
          <div class="w-full mt-6 pl-0 lg:pl-2">
            <div class="leading-loose">
              <div class="p-2 md:p-10 bg-white rounded shadow">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-sm text-gray-600" for="cus_name"
                      >Nama Barang</label
                    >
                    <input
                      class="w-full px-5 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold"
                      id="barang_nama"
                      type="text"
                      aria-label="Name"
                      v-model="barang_nama"
                    />
                  </div>
                  <div class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-sm text-gray-600" for="cus_email"
                      >Satuan</label
                    >
                    <input
                      class="w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold"
                      id="barang_satuan"
                      v-model="barang_satuan"
                      type="text"
                      placeholder="Satuan"
                      aria-label="Email"
                    />
                  </div>
                  <div v-if="barang_tipe == 'Mandiri'" class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-sm text-gray-600" for="cus_email"
                      >harga pokok produksi</label
                    >
                    <input
                      class="w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold"
                      id="barang_satuan"
                      v-model="hpp"
                      type="text"
                      placeholder="harga pokok produksi"
                      aria-label="Email"
                    />
                  </div>
                  <div v-if="barang_tipe == 'Mandiri'" class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-sm text-gray-600" for="cus_email"
                      >upah</label
                    >
                    <input
                      class="w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold"
                      id="barang_satuan"
                      v-model="upah"
                      type="text"
                      placeholder="upah"
                      aria-label="Email"
                    />
                  </div>
                  <div v-if="barang_tipe == 'Mandiri'" class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-sm text-gray-600" for="cus_email"
                      >harga jual standar</label
                    >
                    <input
                      class="w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold"
                      id="barang_satuan"
                      v-model="hjs"
                      type="text"
                      placeholder="harga jual standar"
                      aria-label="Email"
                    />
                  </div>
                  <div v-if="barang_tipe == 'Mandiri'" class="px-0 md:px-4 my-2">
                    <label class="uppercase block text-sm text-gray-600" for="cus_email"
                      >harga jual grosir</label
                    >
                    <input
                      class="w-full px-2 py-2  text-gray-700 bg-white rounded focus:bg-blue-50 uppercase border-2 border-blue-200 text-lg font-bold"
                      id="barang_satuan"
                      v-model="hjg"
                      type="text"
                      placeholder="harga jual grosir"
                      aria-label="Email"
                    />
                  </div>
                  <div class="button-plus-upload flex px-1 justify-between items-center my-6">
                    <div class>
                      <el-upload
                        action="#"
                        list-type="picture-card"
                        :on-preview="handlePreview"
                        :on-change="updateImageList"
                        :limit="1"
                        :on-exceed="handleExceed"
                        :on-remove="handleRemove"
                        :auto-upload="false"
                      >
                        <i class="el-icon-plus" />
                      </el-upload>
                      <el-dialog :visible.sync="dialogVisible" v-if="!status">
                        <img width="100%" :src="dialogImageUrl" alt />
                      </el-dialog>
                    </div>
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
      barang_nama: "",
      barang_satuan: "",
      barang_stok: "",
      barang_tipe: "Supplier",
      upah: 0,
      hpp: 0,
      hjs: 0,
      hjg: 0,
      tipes: ['Mandiri', 'Supplier'],
      status: ['Active', 'Inactive'],
	  imageList: [],
	  dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    cancel(){
      this.$router.go(-1);
    },
	updateImageList(file) {
      this.imageList.push(file.raw);
      console.log(this.imageList);
    },
    handleRemove(file) {
      this.imageList.splice(file, 1);
    },
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, imageList) {
      this.$message.warning(`maksimal 1 photo`);
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
      formData.append("upah", this.upah);
      formData.append("hpp", this.hpp);
      formData.append("hjs", this.hjs);
      formData.append("hjg", this.hjg);
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
