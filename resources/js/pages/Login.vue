<template>
  <div>
    <div class="bg-white font-family-karla h-screen" v-if="!isloading">
      <div class="w-full flex flex-wrap">
        <!-- Image Section -->
        <div class="w-3/5 shadow-2xl">
          <img class="object-cover w-full h-screen hidden md:block" src="/img/bglogin.jpg" />
        </div>
        <!-- Login Section -->
        <div class="w-full md:w-2/5 flex flex-col">
          <!--<div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
				<a href="#" class="bg-black text-white font-bold text-xl p-4">Logo</a>
				</div>-->

          <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p class="text-center text-3xl">Welcome.</p>
            <div v-if="errors.message" class="flex items-center relative">
              <span class="text-red-400 font-semibold text-sm mb-2">{{ errors.message }}</span>
            </div>
            <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="handleLogin">
              <div class="flex flex-col pt-4">
                <label for="email" class="text-lg">Email</label>
                <input type="email" v-model="user.email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div class="flex flex-col pt-4">
                <label for="password" class="text-lg">Password</label>
                <input v-model="user.password" type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <!--<input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />-->
              <div class="relative mt-8">
                <button @click="handleLogin" type="button" class="px-6 py-3 w-full rounded hover:bg-blue-800 bg-blue-900 text-white font-semibold leading-tight">
                  <svg v-if="isLoging" class="absolute animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isLoging ? "Processing..." : "Login" }}
                </button>
              </div>
            </form>
            <div class="text-center pt-12 pb-12">
              <p>Don't have an account? <a href="/public" class="underline font-semibold">Go to publik page!</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- loader spin-->
    <div v-if="isloading" class="mx-auto flex h-screen">
      <div class="flex justify-center items-center w-full">
        <loader />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: {},
      isLoging: false,
      isloading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.isloading = false;
    }, 700);
  },

  methods: {
    handleLogin() {
      this.isLoging = true;
      axios
        .post("/api/login", this.user)
        .then((response) => {
          if (response.data.user.role === "desa") {
            this.$router.push({
              name: "desa",
              params: {
                id: response.data.user.dfdesa_id,
              },
            });
          } else if (response.data.user.role === "kecamatan") {
            this.$router.push({
              name: "kecamatan",
              params: {
                id: response.data.user.dfkecamatan_id,
              },
            });
          } else if (response.data.user.role === "admin") {
            localStorage.setItem("isAdmin", "true");
            this.$router.push({
              name: "global",
            });
          }
          this.isLoging = false;
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", response.data.user.username);
          localStorage.setItem("desa_id", response.data.user.dfdesa_id);
          localStorage.setItem("kecamatan_id", response.data.user.dfkecamatan_id);
          localStorage.setItem("role", response.data.user.role);
        })
        .catch((error) => {
          this.errors = error;
          this.isLoging = false;
          console.log(this.errors);
        });
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
