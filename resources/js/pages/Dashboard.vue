<template>
  	<div class="bg-gray-100 font-family-karla flex">
    	<sidebar-component></sidebar-component>
    	<div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      		<header-component></header-component>
      		<div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        		<main class="w-full flex-grow p-6 bg-white">
          			<div class="flex items-center justify-between">
            			<h1 class="text-lg pb-1 font-semibold text-indigo-400 uppercase">
            				Master Data Barang
						</h1>
          			</div>
					<!-- loader spin-->
					<!-- <div v-if="loading" class="z-30 flex justify-around relative opacity-75 bg-black inset-0">
						<loader />
					</div> -->

					<div class="stok bg-gray-200 w-full p-0">
						
					</div>

                    <div class="wrap flex lg:flex-row flex-col space-y-8 lg:space-x-8 lg:space-y-0 items-center mt-8">
                        <!-- mandiri -->
                        <router-link to="/barang-mandiri" class="px-12 py-3 rounded-full shadow text-center bg-blue-200 lg:w-max w-full text-xl font-bold">
                            Barang Mandiri
                        </router-link>

                        <!-- supplier -->
                        <router-link to="/barang-supplier" class="px-12 py-3 rounded-full shadow text-center bg-yellow-200 lg:w-max w-full text-xl font-bold">
                            Barang Supplier
                        </router-link>
                    </div>
          			
        		</main>
        		<!-- <div v-if="loading" class="opacity-25 fixed inset-0 z-30 bg-black"></div> -->
        		<footer-component></footer-component>
      		</div>
    	</div>
  	</div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			role: "",
			isAdmin: false,
			isLoading: false,            
		};
	},
	mounted() {
		this.isLoggedIn = localStorage.getItem("isLoggedIn");
		this.username = localStorage.getItem("username");
		this.role = localStorage.getItem("role");
		this.isAdmin = localStorage.getItem("isAdmin");
	},
  	methods: {
		
  	},
};
</script>