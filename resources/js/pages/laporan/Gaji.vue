<template>
    <div class="bg-gray-100 font-family-karla flex">
        <sidebar-component></sidebar-component>
        <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
            <header-component></header-component>
            <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main class="w-full flex-grow p-6 bg-white">
                    <div class="flex items-center justify-between border-b-2 border-gray-300">
                        <h1 class="text-lg pb-1 font-semibold text-indigo-400 uppercase">Laporan Gaji</h1>
                    </div>

                    <!-- grup date and button -->
                    <div class="grup-date mt-12 flex space-x-4">
                        <div class="date flex flex-col">
                            <span>Tanggal Awal</span>
                            <date-picker
                                v-model="tgl_awal"
                                value-type="format" 
                                placeholder="Tanggal awal" 
                                format="DD-MM-YYYY"></date-picker>
                        </div>

                        <div class="date flex flex-col">
                            <span>Tanggal Akhir</span>
                            <date-picker
                                v-model="tgl_akhir"
                                value-type="format" 
                                placeholder="Tanggal akhir" 
                                format="DD-MM-YYYY"></date-picker>
                        </div>

                        <div class="flex items-center space-x-4 pt-5">
                            <button
                                @click="getHarga" 
                                class="bg-blue-400 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:ring-2 rounded-md text-white text-base font-bold noPrint">Tampilkan</button>
                            
                            <button
                                onclick="window.print();"
                                class="noPrint bg-blue-400 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:ring-2 rounded-md text-white text-base font-bold">Cetak</button>
                        </div>
                    </div>

                    <!-- show data -->
                    <div class="show-data mt-12">
                        <!-- {{ dataGaji }} -->
                        <table class="table-auto border-collapse border border-gray-400 w-full">
                            <thead class="text-center">
                                <tr>
                                    <th class="border border-gray-300 p-2">NO.</th>
                                    <th class="border border-gray-300 p-2">NAMA PEGAWAI</th>
                                    <th class="border border-gray-300 p-2">TOTAL GAJI</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr v-for="(data, index) in dataGaji" :key="index">
                                    <td class="border border-gray-300 p-2">{{ index+1 }}</td>
                                    <td class="border border-gray-300 p-2 text-left">{{ data.nama_pegawai }}</td>
                                    <td class="border border-gray-300 p-2 font-bold">{{ toRupiah(data.total) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tgl_awal: '',
            tgl_akhir: '',
            dataGaji: null,
        }
    },
    methods: {
        toRupiah(param){
            if(param != null) {
                let fix = param.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.");
                return fix;
            }
            else {
                return 0;
            }
		},
        getHarga(){
            let date1 = this.tgl_awal.toLocaleString('en-GB').split('-');
            let date2 = this.tgl_akhir.toLocaleString('en-GB').split('-');
            let fixDate1 = date1[2] + '-' + date1[1] + '-' + date1[0];
            let fixDate2 = date2[2] + '-' + date2[1] + '-' + date2[0];

            axios.get("/api/gaji/" + fixDate1 + '/' + fixDate2)
                .then((response) => {
                    if(response.data.length)
                        this.dataGaji = response.data;
                    else
                        this.dataGaji = 'tidak ada data';
                    console.log(response.data);
                }).catch((err) => {
                    console.log(err);
                });
        },
    }
}
</script>