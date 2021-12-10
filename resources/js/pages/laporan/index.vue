<template>
    <div class="bg-gray-100 font-family-karla flex">
        <sidebar-component></sidebar-component>
        <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
            <header-component></header-component>
            <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main class="w-full flex-grow p-6 bg-white">
                    <div class="flex items-center justify-between">
                        <h1 class="text-lg pb-1 font-semibold text-indigo-400 uppercase">Daftar Laporan</h1>
                    </div>
                    <!-- loader spin-->
                    <div v-if="loading" class="z-30 flex justify-around relative opacity-75 bg-black inset-0">
                        <loader />
                    </div>
                    <div class="wrap flex lg:flex-row flex-col space-y-8 lg:space-x-8 lg:space-y-0 items-center mt-8">
                        <router-link to="/barang-mandiri" class="px-12 py-3 rounded-full shadow text-center bg-blue-200 lg:w-max w-full text-xl font-bold">
                            Produksi
                        </router-link>

                        <router-link to="/barang-mandiri" class="px-12 py-3 rounded-full shadow text-center bg-blue-200 lg:w-max w-full text-xl font-bold">
                            Penjualan
                        </router-link>

                        <router-link to="/barang-mandiri" class="px-12 py-3 rounded-full shadow text-center bg-blue-200 lg:w-max w-full text-xl font-bold">
                            Pembelian
                        </router-link>

                        <!-- mandiri -->
                        <router-link to="/barang-mandiri" class="px-12 py-3 rounded-full shadow text-center bg-blue-200 lg:w-max w-full text-xl font-bold">
                            Absensi
                        </router-link>

                        <!-- supplier -->
                        <router-link to="/barang-supplier" class="px-12 py-3 rounded-full shadow text-center bg-yellow-200 lg:w-max w-full text-xl font-bold">
                            Gaji
                        </router-link>
                    </div>
                </main>
                <div v-if="loading" class="opacity-25 fixed inset-0 z-30 bg-black"></div>
                <footer-component></footer-component>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
export default {
    data() {
        return {
            loading: false,
            isLoggedIn: false,
            username: "",
            role: "",
            isAdmin: false,
            isLoading: false,
        };
    },
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mountend');
        this.isLoggedIn = localStorage.getItem("isLoggedIn");
        this.username = localStorage.getItem("username");
        this.role = localStorage.getItem("role");
        this.isAdmin = localStorage.getItem("isAdmin");
    },
    methods: {
    
    },
};
</script>
