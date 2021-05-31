<template>
  <div>
    <header class="w-full flex items-center bg-gray-100 py-2 px-6 hidden sm:flex">
      <div class="w-1/2">
        <a href="/public">
          <span class="text-gray-500 font-semibold text-2xl">UMKM GUNUNGKIDUL</span>
        </a>
      </div>
      <div :data="isOpen" class="relative w-1/2 flex justify-end">
        <!--<button @click="isOpen = !isOpen" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
          <img src="/img/cantik.jpg" />
        </button>-->
        <button @click="logout" class="relative w-12 h-12" v-if="isLoggedIn === 'true'">
          <i class="fas fa-sign-out-alt mr-3"></i>
        </button>
        <button @click="goToLogin" class="relative w-12 h-12" v-else>
          <i class="fas fa-sign-in-alt mr-3"></i>
        </button>

        <!--<button v-show="isOpen" @click="isOpen = false" class="h-full w-full fixed inset-0 cursor-default"></button>
        <div v-show="isOpen" class="z-10 absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
          <a href="#" class="block px-4 py-2 account-link hover:text-white">Account</a>
          <a href="#" class="block px-4 py-2 account-link hover:text-white">Support</a>
          <a href="#" class="block px-4 py-2 account-link hover:text-white">Sign Out</a>
        </div>-->
      </div>
    </header>

    <!-- Mobile Header & Nav -->
    <header :data="isOpen" class="w-full bg-sidebar py-5 px-6 sm:hidden">
      <div class="flex items-center justify-between">
        <a
          href="/public"
          class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >UMKM GK</a
        >
        <button @click="isOpen = !isOpen" class="text-white text-3xl focus:outline-none">
          <i v-show="!isOpen" class="fas fa-bars"></i>
          <i v-show="isOpen" class="fas fa-times"></i>
        </button>
      </div>

      <!-- Dropdown Nav -->
      <nav :class="isOpen ? 'flex' : 'hidden'" class="flex flex-col pt-4">
        <!--<a href="index.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
          <i class="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a href="blank.html" class="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
          <i class="fas fa-sticky-note mr-3"></i>
          Blank Page
        </a>
        <a href="tables.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
          <i class="fas fa-table mr-3"></i>
          Tables
        </a>
        <a href="forms.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
          <i class="fas fa-align-left mr-3"></i>
          Forms
        </a>
        <a href="tabs.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
          <i class="fas fa-tablet-alt mr-3"></i>
          Tabbed Content
        </a>
        <a href="calendar.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
          <i class="fas fa-calendar mr-3"></i>
          Calendar
        </a>
        <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
          <i class="fas fa-cogs mr-3"></i>
          Support
        </a>
        <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
          <i class="fas fa-user mr-3"></i>
          My Account
        </a>
        <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
          <i class="fas fa-sign-out-alt mr-3"></i>
          Sign Out
        </a>-->
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
