<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow px-32 py-8 bg-white">
          <!-- Content goes here! 😁 -->
          <h1 class="text-lg mb-4 font-semibold">Product Detail</h1>
          <button
            class="bg-gray-300 hover:bg-gray-400 px-3 py-1 text-white text-xs rounded-full"
            @click="$router.go(-1)"
          >
            <i class="fas fa-arrow-circle-left mr-3"></i> Back
          </button>

          <!-- loader spin-->
          <div
            v-if="loading"
            class="z-30 flex justify-around relative opacity-75 bg-black inset-0"
          >
            <loader />
          </div>
          <div class="w-full mr-6 flex mt-8">
            <!-- LEFT SIDE-->
            <div class="product-image w-full mr-6">
              <!-- IMG ZOOM-->
              <div
                v-if="images.length"
                class="img-zoom bg-white bg-cover rounded shadow px-4 py-4 h-106"
              >
                <img
                  :src="'/storage/' + images[indexImage].product_path"
                  alt="img-zoom"
                  class="rounded object-cover w-full opacity-75 h-full hover:opacity-100"
                />
              </div>
              <div
                v-else
                class="img-zoom bg-white bg-cover rounded shadow px-4 py-4 h-106"
              >
                <svg
                  class="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <!-- THUMBNAIL-->
              <div class="thumbnail flex items-center justify-between mt-4">
                <!--<div>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>-->
                <div v-if="images.length" class="flex justify-start items-center">
                  <div
                    class="shadow rounded-lg bg-white w-20 h-auto px-1 py-1 mr-2"
                    v-for="(image, i) in images"
                    :key="i.id"
                  >
                    <img
                      @mouseover="switchImage(i)"
                      :src="'/storage/' + image.product_path"
                      alt="img-thumb"
                      class="rounded object-cover w-full h-16 cursor-pointer hover:opacity-75"
                    />
                  </div>
                </div>
                <div v-else class="flex justify-start items-center">
                  <div class="shadow rounded-lg bg-white w-20 h-auto px-1 py-1 mr-2">
                    <img src="/img/img-empty.svg" alt="" class="w-full" />
                  </div>
                </div>
                <!--<div>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>-->
              </div>
            </div>
            <!-- RIGHT SIDE-->
            <div
              class="desc-product sm:w-full lg:w-2/3 bg-white font-semibold rounded shadow px-4 py-4 h-106"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                  <p class="text-lg leading-tight mr-2 uppercase font-semibold">
                    {{ product.product_name }}
                  </p>
                </div>
              </div>
              <div class="border-t border-gray-300 my-2"></div>
              <div class="flex flex-col text-sm leading-tight w-7/12">
                <table>
                  <tr>
                    <td><span class="text-gray-400">Nama Pemilik </span></td>
                    <td>
                      <span class="text-gray-400">{{ product.product_owner }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="text-gray-400">Alamat </span></td>
                    <td>
                      <span class="text-gray-400">{{ product.product_address }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="text-gray-400">No.Telepon </span></td>
                    <td>
                      <span class="text-gray-400">{{ product.product_phone }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="text-gray-400">Email </span></td>
                    <td>
                      <span class="text-gray-400">{{ product.product_email }}</span>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="border-t border-gray-300 my-2"></div>
              <div>
                <span class="text-xs text-gray-400">Deskripsi Produk</span>
              </div>
              <div>
                <span class="w-full text-gray-400 text-xs leading-none font-serif">{{
                  product.product_description
                }}</span>
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
      product: {},
      images: [],
      indexImage: 0,
      isLoggedIn: false,
      role: "",
      loading: true,
    };
  },
  created() {
    this.loadProductDetail();
  },

  mounted() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    this.role = localStorage.getItem("role");
    // if (this.isLoggedIn === "false" || this.role === "") {
    //   this.$router.push("/public");
    // }
  },
  methods: {
    switchImage(param) {
      setTimeout(() => {
        this.indexImage = param;
      }, 100);
    },
    loadProductDetail() {
      let product_id = this.id;
      let url = "/api/product-detail/" + product_id;
      axios
        .get(url)
        .then((response) => {
          this.loading = false;
          this.product = response.data.product;
          this.images = response.data.images;
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
