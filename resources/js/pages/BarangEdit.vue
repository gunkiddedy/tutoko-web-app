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
              <div class="p-10 bg-white rounded shadow-xl">
                <div
                  class="grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2"
                >
                  <div class="px-1 my-2">
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
                  <div class="px-1 my-2">
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
                  <div class="px-1 my-2">
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
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name">Status</label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="active"
                      type="text"
                      aria-label="Name"
                      v-model="active"
                    />
                  </div>
                </div>

                <div class="mt-6">
                  <button
                    @click="updateDataBarang(id)"
                    class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  >
                    {{ isUpdating == true ? "Updating..." : "Update" }}
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
      active: "",
    };
  },
  mounted() {
    this.getDataBarang(this.id);
  },
  methods: {
    getDataBarang(param) {
      axios
        .get("/api/get-barang/" + param)
        .then((response) => {
          this.loading = false;
          this.barang_nama = response.data.barang_nama;
          this.barang_satuan = response.data.barang_satuan;
          this.barang_stok = response.data.barang_stok;
          this.active = response.data.active;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateDataBarang(param) {
      this.isUpdating = true;
      axios
        .post("/api/update-barang/" + param, {
          barang_nama: this.barang_nama,
          barang_satuan: this.barang_satuan,
          barang_stok: this.barang_stok,
          active: this.active,
        })
        .then((response) => {
          this.isUpdating = false;
          this.$router.go(-1);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
