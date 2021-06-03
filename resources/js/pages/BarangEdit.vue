<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6 bg-white">
          <!-- loader spin-->
          <div
            v-if="loading"
            class="z-30 flex justify-around relative opacity-75 bg-black inset-0"
          >
            <loader />
          </div>
          <!-- Content goes here! 😁 -->
          <h1 class="text-lg text-gray-500 pb-1 font-semibold">Edit Data Barang</h1>
          <div class="w-full mt-6 pl-0 lg:pl-2">
            <div class="leading-loose">
              <div class="p-10 bg-white rounded shadow">
                <div
                  class="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1"
                >
                  <div class="px-4 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >Nama Barang</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="barang_nama"
                      type="text"
                      aria-label="Name"
                      v-model="barang_nama"
                    />
                  </div>
                </div>
                <div
                  class="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1"
                >
                  <div class="px-4 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Satuan</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="barang_satuan"
                      v-model="barang_satuan"
                      type="text"
                      placeholder="Satuan"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-4 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Stok</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="barang_stok"
                      v-model="barang_stok"
                      type="text"
                      placeholder="Stok"
                      aria-label=""
                    />
                  </div>
                  <div class="px-4 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Jenis Barang</label
                    >
                    <!-- <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="barang_stok"
                      v-model="barang_tipe"
                      type="text"
                      placeholder="Jenis"
                      aria-label=""
                    /> -->
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
                  <div class="px-4 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name">Status</label>
                    <select
                        v-model="active"
                        class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                      <option class="text-gray-700" value="" selected="selected">
                        -Pilih-
                      </option>
                      <option
                        class="text-gray-700"
                        v-for="(stat, i) in status"
                        :value="stat"
                        :key="i"
                      >
                        {{ stat }}
                      </option>
                    </select>
                  </div>
                  <div class="px-4 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name">Photo</label>
                    <img v-if="photo" class="w-9/12" :src="'/storage/' + photo" :alt="barang_nama">
                    <a href="#" @click="deletePhoto(id)">Hapus Photo</a>
                  </div>
                  <!-- <div class="button-plus-upload flex px-4 justify-between items-center my-4">
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
                  </div> -->
                  <div class="flex items-center my-4">
						<div v-if="url" class="title w-40 min font-semibold text-md sm:block hidden">*Bukti Transfer</div>
						<div class="value w-full sm:w-1/2 px-2 flex justify-end">
							<div class="bg-gray-100 mx-auto">
								<img v-if="url" :src="url" class="object-contain w-full border-dashed border-2 border-gray-300 rounded-lg"/>
							</div>
						</div>
					</div>
          <div class="value w-full sm:w-1/2">
							<label class="bg-yellow-500 flex justify-center px-2 items-center py-2 rounded-lg border border-blue cursor-pointer hover:bg-yellow-600">
									<svg class="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
									</svg>
									<span class="font-semibold text-white ml-2" >Pilih file</span>
									<input 
										type='file' 
                    class="hidden" 
                    @change="onFileChange"
                    ref="file" />
                  <!-- <input 
                    type="file" 
                    id="file" 
                    ref="image" 
                    class="custom-file-input" 
                    @change="onFileChange" /> -->
							</label>
						</div>
                </div>

                <div class="mt-6">
                  <button
                    @click="updateDataBarang(id)"
                    class="px-4 py-1 text-white font-light tracking-wider bg-blue-500 hover:bg-blue-600 rounded"
                  >
                    {{ isUpdating == true ? "Updating..." : "Update Data" }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div v-if="loading" class="opacity-25 fixed inset-0 z-30 bg-black"></div>
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
      barang_nama: "",
      barang_satuan: "",
      barang_stok: "",
      barang_tipe: "",
      active: "",
      photo: "",
      image: null,
      tipes: ['Mandiri', 'Supplier'],
      status: ['Active', 'Inactive'],
      url: "",
      imageList: [],
    };
  },
  mounted() {
    this.getDataBarang(this.id);
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.imageList.push(file);
      this.url = URL.createObjectURL(file);
      console.log(this.photo);
    },
    getDataBarang(param) {
      axios
        .get("/api/get-barang/" + param)
        .then((response) => {
          this.loading = false;
          this.barang_nama = response.data.barang_nama;
          this.barang_satuan = response.data.barang_satuan;
          this.barang_stok = response.data.barang_stok;
          this.barang_tipe = response.data.barang_tipe;
          this.photo = response.data.photo;
          this.active = response.data.active;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deletePhoto(param){
      axios.post("/api/delete-photo/"+param)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateDataBarang(param) {
      this.isUpdating = true;
      const formData = new FormData();
      formData.append("barang_nama", this.barang_nama);
      formData.append("barang_satuan", this.barang_satuan);
      formData.append("barang_stok", this.barang_stok);
      formData.append("barang_tipe", this.barang_tipe);
      formData.append("active", this.active);
      // console.log(this.imageList);
	    this.imageList.forEach((file) => {
        formData.append("photo", file, file.name);
      });
      axios
        .post(`/api/update-barang/${param}`, formData)
        .then((response) => {
          this.isUpdating = false;
          this.$router.push({
            name: "barang",
          });
          console.log(response);
        })
        .catch((error) => {
          this.isUpdating = false;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
