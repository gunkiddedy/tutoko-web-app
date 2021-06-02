<template>
  <aside
    class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl"
    v-if="isLoggedIn === 'true'"
  >
    <div class="p-4">
      <div
        class="realtive w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 hover:border-gray-200 focus:border-gray-200 focus:outline-none mb-1 mx-auto"
      >
        <router-link :to="{ name: 'home' }">
          <img src="/img/document.png" />
        </router-link>
      </div>
      <!-- <button
        class="w-full bg-white cta-btn text-xs font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"
      >
        <i class="fas fa-user mr-3"></i> Petugas {{ role }}
      </button> -->
    </div>
    <nav class="text-white text-base font-semibold pt-3">

      <router-link
        :to="{ name: 'barang' }"
        v-if="isAdmin === 'true' && role === 'admin' && isLoggedIn == 'true'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-home mr-3"></i>
        Daftar Barang
      </router-link>

      <router-link
        :to="{ name: 'invoice-masuk' }"
        v-if="role === 'admin'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-bug mr-3"></i> Invoice Masuk</router-link
      >
      <router-link
        :to="{ name: 'invoice-keluar'}"
        v-if="role === 'desa' || role === 'admin'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-bullhorn mr-3"></i> Invoice Keluar</router-link
      >
      <router-link
        :to="{ name: 'penjualan'}"
        v-if="role === 'desa' || role === 'admin'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-chart-bar mr-3"></i> Penjualan</router-link
      >
      <router-link
        :to="{ name: 'pembelian'}"
        v-if="role === 'desa' || role === 'admin'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-book mr-3"></i> Pembelian</router-link
      >
      <router-link
        :to="{ name: 'produksi'}"
        v-if="role === 'desa' || role === 'admin'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-clipboard-check mr-3"></i> Produksi</router-link
      >
      <router-link
        :to="{ name: 'pegawai'}"
        v-if="role === 'desa' || role === 'admin'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-user mr-3"></i> Pegawai</router-link
      >
      <router-link
        :to="{ name: 'supplier'}"
        v-if="role === 'desa' || role === 'admin'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-bus mr-3"></i> Supplier</router-link
      >

      <router-link
        :to="{ name: 'upload-produk' }"
        v-if="isAdmin === 'true' && role === 'admin' && isLoggedIn == 'true'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-arrow-circle-up mr-3"></i> Upload Produk
      </router-link>

      <router-link
        :to="{ name: 'download' }"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        v-if="role === 'admin'"
      >
        <i class="fas fa-filter mr-3"></i>
        Filter Data
      </router-link>
    </nav>
    <router-link
      :to="{ name: 'login' }"
      class="absolute w-full upgrade-btn bottom-0 text-white flex items-center justify-center py-4"
      v-if="isLoggedIn == 'false'"
    >
      <i class="fas fa-sign-in-alt mr-3"></i>
      Login
    </router-link>
    <!-- <button
      @click="logout"
      class="absolute w-full upgrade-btn bottom-0 text-white flex items-center justify-center py-4"
      v-if="isLoggedIn == 'true'"
    >
      <i class="fas fa-sign-out-alt mr-3"></i>
      Logout
    </button> -->
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      username: "",
      desa_id: "",
      kecamatan_id: "",
      role: "",
      isAdmin: false,
    };
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    this.username = localStorage.getItem("username");
    this.desa_id = localStorage.getItem("desa_id");
    this.kecamatan_id = localStorage.getItem("kecamatan_id");
    this.role = localStorage.getItem("role");
    this.isAdmin = localStorage.getItem("isAdmin");
    if (this.role === "admin") {
      this.desa_id = 1;
      this.kecamatan_id = 18;
    }
  },
  methods: {
    logout() {
      this.$swal({
        title: "Oops...!",
        text: "Anda yakin akan logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post("/api/logout")
            .then((res) => {
              this.$router.push({
                name: "login",
              });
              localStorage.setItem("isLoggedIn", "false");
              localStorage.removeItem("username");
              localStorage.removeItem("desa_id");
              localStorage.removeItem("kecamatan_id");
              localStorage.removeItem("role");
              localStorage.removeItem("isAdmin");
              this.isloggedIn = "false";
            })
            .catch((err) => {
              console.log(err);
            });
          // this.$swal("Success!", "Anda berhasil logout", "success");
        }
        // else if (result.isDismissed) {
        //   this.$swal("Canceled!", "Logout Dibatalkan!", "info");
        // }
      });
    },
  },
};
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  background-color: #1947ee;
  color: #ffffff;
  cursor: pointer;
  /*border-radius: 0.5rem;*/
}
</style>
