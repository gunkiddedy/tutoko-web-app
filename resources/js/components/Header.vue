<template>
  <div>
    <header class="w-full hidden sm:block sm:flex flex items-center bg-gray-100 py-2 px-6">
      <div class="w-1/2">
        <a href="/public">
          <span class="text-gray-500 font-semibold text-2xl">TUTOKO WEB APP</span>
        </a>
      </div>
      <div :data="isOpen" class="relative w-1/2 flex justify-end">
        <button @click="logout" class="relative w-12 h-12" v-if="isLoggedIn === 'true'">
          <i class="fas fa-sign-out-alt mr-3"></i>
        </button>
        <button @click="goToLogin" class="relative w-12 h-12" v-else>
          <i class="fas fa-sign-in-alt mr-3"></i>
        </button>
      </div>
    </header>

    <!-- Mobile Header & Nav -->
    <header :data="isOpen" class="w-full bg-sidebar py-5 px-6 sm:hidden">
      <div class="flex items-center justify-between">
        <a
          href="/public"
          class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >TUTOKO APP</a
        >
        <button @click="isOpen = !isOpen" class="text-white text-3xl focus:outline-none">
          <i v-show="!isOpen" class="fas fa-bars"></i>
          <i v-show="isOpen" class="fas fa-times"></i>
        </button>
      </div>

      <!-- Dropdown Nav -->
      <nav :class="isOpen ? 'flex' : 'hidden'" class="flex flex-col pt-4">
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
          :to="{ name: 'input', params: { id: 1 } }"
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
        >
          <i class="fas fa-arrow-circle-down mr-3"></i>
          Download Data
        </router-link>

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
          class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"
          v-if="isLoggedIn == 'true'"
        >
          <i class="fas fa-sign-out-alt mr-3"></i>
          Logout
        </button>
        <!--<button class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"><i class="fas fa-arrow-circle-up mr-3"></i> Call Our Deveeloper</button>-->
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isLoggedIn: false,
      username: "",
      desa_id: 1,
      kecamatan_id: 18,
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
  },
  methods: {
    goToLogin() {
      this.$router.push({
        name: "login",
      });
    },
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
              this.isLoggedIn = "false";
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
