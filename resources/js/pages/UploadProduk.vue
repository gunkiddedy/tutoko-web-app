<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6 bg-white">
          <div
            v-if="loadingPage"
            class="z-30 flex justify-around relative opacity-75 bg-black inset-0"
          >
            <loader />
          </div>
          <!-- Content goes here! 😁 -->
          <h1 class="text-lg mb-4 font-semibold">Upload Produk</h1>
          <button
            class="bg-gray-300 hover:bg-gray-400 px-3 py-1 text-white text-xs rounded-full"
            @click="$router.go(-1)"
          >
            <i class="fas fa-arrow-circle-left mr-3"></i> Back
          </button>
          <div
            class="bg-white shadow overflow-hidden sm:rounded-lg sm:w-full lg:w-2/3 mx-auto px-6 py-2"
          >
            <!--<h3 class="text-lg leading-6 font-medium text-gray-900">Form Upload Produk</h3>-->
            <form class="mt-8">
              <div class="flex items-center justify-between mb-6 px-4">
                <div class="w-full mr-4">
                  <select
                    name="dfkecamatan_id"
                    id="dfkecamatan_id"
                    v-model="select_kecamatan"
                    @change="loadDesa"
                    class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
                  >
                    <option class="text-gray-700" value="" selected="selected">
                      -Select Kecamatan-
                    </option>
                    <option
                      class="text-gray-700"
                      v-for="(kec, i) in kecamatans"
                      :value="kec.dfkecamatan_id"
                      :key="i"
                    >
                      {{ kec.dfkecamatan_nama }}
                    </option>
                  </select>
                </div>
                <div class="w-full">
                  <select
                    name="dfdesa_id"
                    id="dfdesa_id"
                    v-model="select_desa"
                    class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
                  >
                    <option class="text-gray-700" value="" selected="selected">
                      -Select Desa-
                    </option>
                    <option
                      class="text-gray-700"
                      v-for="(desa, i) in desas"
                      :key="i"
                      :value="desa.dfdesa_id"
                    >
                      {{ desa.dfdesa_nama }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="flex items-center justify-between mb-6 px-4">
                <div class="w-full mr-4">
                  <input
                    id="name"
                    v-model="product_owner"
                    class="appearance-none block w-full text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Nama Pemilik"
                  />
                </div>
                <div class="w-full">
                  <input
                    id="name"
                    v-model="product_name"
                    class="appearance-none block w-full text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Nama Produk"
                  />
                </div>
              </div>
              <div class="flex items-center justify-between mb-6 px-4">
                <div class="w-full mr-4">
                  <input
                    id="name"
                    v-model="product_phone"
                    class="appearance-none block w-full text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="No.Hp"
                  />
                </div>
                <div class="w-full">
                  <input
                    id="name"
                    v-model="product_email"
                    class="appearance-none block w-full text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="product-name mb-6 px-4">
                <input
                  id="name"
                  v-model="product_address"
                  class="appearance-none block w-full text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Alamat"
                />
              </div>
              <div class="product_description mb-6 px-4">
                <textarea
                  name="product_description"
                  id="product_description"
                  v-model="product_description"
                  placeholder="Deskripsi produk"
                  class="h-30 rounded-lg py-3 px-4 text-gray-700 border border-gray-300 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                ></textarea>
              </div>
              <div class="button-plus-upload flex px-4 justify-between items-center mb-6">
                <div class>
                  <el-upload
                    action="#"
                    list-type="picture-card"
                    :on-preview="handlePreview"
                    :on-change="updateImageList"
                    :limit="3"
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
              <span
                class="px-4 text-sm font-sf-pro"
                :class="{ 'text-green-400': status, 'text-red-400': !status }"
                >{{ status_msg }}</span
              >
              <div class="flex items-center justify-end mb-2 px-4 py-2">
                <button
                  :class="{ disabled: isUploadingProduct }"
                  class="flex items-center text-white border border-blue-500 bg-blue-500 hover:text-gray-100 hover:bg-blue-600 font-bold px-6 py-2 rounded focus:outline-none"
                  type="button"
                  @click="uploadProduct"
                >
                  <svg
                    v-if="isUploadingProduct"
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {{ isUploadingProduct ? "Uploading..." : "Upload Product" }}
                </button>
              </div>
            </form>
          </div>
        </main>
        <div v-if="loadingPage" class="opacity-25 fixed inset-0 z-30 bg-black"></div>
        <footer-component></footer-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingPage: true,
      dialogImageUrl: "",
      dialogVisible: false,
      isUploadingProduct: false,
      status_msg: "",
      status: "",
      imageList: [],
      dfkecamatan_id: "",
      dfdesa_id: "",
      product_owner: "",
      product_name: "",
      product_address: "",
      product_phone: "",
      product_email: "",
      product_description: "",
      // product_path: "",
      kecamatans: [],
      desas: [],
      select_kecamatan: "",
      select_desa: "",
    };
  },
  created() {
    this.loadKecamatan();
  },

  mounted() {
    setTimeout(() => {
      this.loadingPage = false;
    }, 700);
    if (
      localStorage.getItem("role") !== "admin" ||
      localStorage.getItem("isLoggedIn") !== "true"
    ) {
      this.$router.push("/public");
    }
  },

  methods: {
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
      this.$message.warning(`maksimal 3 photo`);
    },
    validateForm() {
      if (this.imageList.length < 0) {
        this.status = false;
        this.showNotification("Photo produk tidak boleh kosong!");
        return false;
      }
      if (!this.select_kecamatan) {
        this.status = false;
        this.showNotification("kecamatan tidak boleh kosong");
        return false;
      }
      if (!this.select_desa) {
        this.status = false;
        this.showNotification("desa tidak boleh kosong");
        return false;
      }
      if (!this.product_owner) {
        this.status = false;
        this.showNotification("nama pemilik tidak boleh kosong");
        return false;
      }
      if (!this.product_name) {
        this.status = false;
        this.showNotification("nama produk tidak boleh kosong");
        return false;
      }
      if (!this.product_address) {
        this.status = false;
        this.showNotification("alamat tidak boleh kosong");
        return false;
      }
      if (!this.product_phone) {
        this.status = false;
        this.showNotification("no hp tidak boleh kosong");
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
    uploadProduct(e) {
      e.preventDefault();
      if (!this.validateForm()) {
        return false;
      }
      this.isUploadingProduct = true;
      const formData = new FormData();
      formData.append("dfkecamatan_id", this.select_kecamatan);
      formData.append("dfdesa_id", this.select_desa);
      formData.append("product_owner", this.product_owner);
      formData.append("product_name", this.product_name);
      formData.append("product_address", this.product_address);
      formData.append("product_phone", this.product_phone);
      formData.append("product_email", this.product_email);
      formData.append("product_description", this.product_description);
      // formData.append("product_path", this.product_path);

      this.imageList.forEach((file) => {
        // if (file.type !== "image/jpg" || file.type !== "image/jpeg" || file.type !== "image/png") {
        //   this.status = false;
        //   this.showNotification("Only Image JPG, JPEG or PNG Are Allowed!");
        //   return false;
        // }
        // else {
        formData.append("images[]", file, file.name);
        // }
      });
      axios
        .post("/api/upload-photo-product", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          this.dfkecamatan_id = "";
          this.dfdesa_id = "";
          this.product_owner = "";
          this.product_name = "";
          this.product_address = "";
          this.product_phone = "";
          this.product_email = "";
          // this.product_path = "";
          this.product_description = "";
          this.status = true;
          this.showNotification("Product Successfully Added");
          this.isUploadingProduct = false;
          this.imageList = [];
          setTimeout(() => {
            this.$router.push({ name: "public" });
          }, 700);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadKecamatan() {
      axios
        .get("/api/get-kecamatans")
        .then((response) => {
          this.kecamatans = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadDesa() {
      axios
        .get("/api/get-desa-by-kecamatan-id", {
          params: {
            dfkecamatan_id: this.select_kecamatan,
          },
        })
        .then((response) => {
          this.desas = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
