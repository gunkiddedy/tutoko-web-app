<template>
  <aside
    class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl"
    v-if="isLoggedIn === 'true'"
  >
    <div class="p-4">
      <!--<a href="/public" class="text-white text-lg block font-semibold uppercase hover:text-gray-300 mx-auto">UMKM GK</a>-->
      <div
        class="realtive w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 hover:border-gray-200 focus:border-gray-200 focus:outline-none mb-1 mx-auto"
      >
        <router-link :to="{ name: 'public' }">
          <img src="/img/cantik.jpg" />
        </router-link>
      </div>
      <!--<router-link :to="{ name: 'input', params: { id: 1 } }" v-if="role === 'desa' || role === 'admin'">
        <button class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"><i class="fas fa-plus mr-3"></i> New Data</button>
      </router-link>-->
      <button
        class="w-full bg-white cta-btn text-xs font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"
      >
        <i class="fas fa-user mr-3"></i> Petugas {{ role }}
      </button>
    </div>
    <nav class="text-white text-base font-semibold pt-3">
      <!--<router-link :to="{ name: 'public' }" class="flex items-center text-white py-4 pl-6 nav-item">
        <i class="fas fa-tachometer-alt mr-3"></i>
        Home
      </router-link>-->
      <router-link
        :to="{ name: 'desa', params: { id: desa_id } }"
        v-if="role === 'desa' && isLoggedIn == 'true'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-home mr-3"></i>
        Home
      </router-link>

      <router-link
        :to="{ name: 'kecamatan', params: { id: kecamatan_id } }"
        v-if="role === 'kecamatan' && isLoggedIn == 'true'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-home mr-3"></i>
        Home
      </router-link>

      <router-link
        :to="{ name: 'global' }"
        v-if="isAdmin === 'true' && role === 'admin' && isLoggedIn == 'true'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-home mr-3"></i>
        Home
      </router-link>

      <router-link
        :to="{ name: 'input', params: { id: desa_id } }"
        v-if="role === 'desa' || role === 'admin'"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
      >
        <i class="fas fa-plus mr-3"></i> Add Data</router-link
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
    <button
      @click="logout"
      class="absolute w-full upgrade-btn bottom-0 text-white flex items-center justify-center py-4"
      v-if="isLoggedIn == 'true'"
    >
      <i class="fas fa-sign-out-alt mr-3"></i>
      Logout
    </button>
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
