<template>
    <div class="bg-gray-100 font-family-karla flex">
        <!-- <sidebar-component></sidebar-component> -->
        <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
            <header-component></header-component>
            <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main class="w-full flex-grow p-6 bg-white">
                    <div class="flex items-center justify-between border-b-2 border-gray-300">
                        <h1 class="text-lg pb-1 font-semibold text-indigo-400 uppercase">Laporan Penjualan</h1>
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
                                @click="getData" 
                                class="bg-blue-400 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:ring-2 rounded-md text-white text-base font-bold noPrint">Tampilkan</button>
                            
                            <button
                                onclick="window.print();"
                                class="noPrint bg-red-400 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:ring-2 rounded-md text-white text-base font-bold">Cetak</button>
                            
                            <router-link class="bg-yellow-400 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:ring-2 rounded-md text-white text-base font-bold noPrint" to="/laporan">Kembali ke beranda laporan</router-link>
                        </div>
                    </div>

                    <!-- show data -->
                    <div class="show-data mt-12">
                        <!-- {{ dataGaji }} -->
                        <table class="table-auto border-collapse border border-gray-400 w-full text-sm">
                            <thead class="text-center">
                                <tr class="uppercase">
                                    <th class="border border-gray-300 p-2">NO.</th>
                                    <th class="border border-gray-300 p-2">Barang</th>
                                    <th class="border border-gray-300 p-2">stok</th>
                                    <th class="border border-gray-300 p-2">satuan</th>
                                    <th class="border border-gray-300 p-2">tipe</th>
                                    <th class="border border-gray-300 p-2">terjual</th>
                                    <th class="border border-gray-300 p-2">harga</th>
                                    <th class="border border-gray-300 p-2">pembayaran</th>
                                    <th class="border border-gray-300 p-2">buyer</th>
                                    <th class="border border-gray-300 p-2">buyer phone</th>
                                    <th class="border border-gray-300 p-2">buyer addres</th>
                                    <th class="border border-gray-300 p-2">tgl jual</th>
                                </tr>
                            </thead>
                            <tbody class="text-center" v-if="dataPenjualan.length">
                                <tr v-for="(data, index) in dataPenjualan" :key="index">
                                    <td class="border border-gray-300 p-2">{{ index+1 }}</td>
                                    <td class="border border-gray-300 p-2">{{ data.barang_nama }}</td>
                                    <td class="border border-gray-300 p-2">{{ data.barang_stok }}</td>
                                    <td class="border border-gray-300 p-2">{{ data.barang_satuan }}</td>
                                    <td class="border border-gray-300 p-2">{{ data.barang_tipe }}</td>
                                    <td class="border border-gray-300 p-2">{{ data.jumlah }}</td>
                                    <td class="border border-gray-300 p-2">{{ toRupiah(data.harga_jual) }}</td>
                                    <td class="border border-gray-300 p-2">{{ toRupiah(data.payment) }}</td>
                                    <td class="border border-gray-300 p-2">{{ data.nama_pembeli }}</td>
                                    <td class="border border-gray-300 p-2">{{ data.phone_pembeli }}</td>
                                    <td class="border border-gray-300 p-2">{{ data.alamat_pembeli }}</td>
                                    <td class="border border-gray-300 p-2">{{ moment(data.tanggal).format('L') }}</td>
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
            noData: 'tidak ada data',
            tgl_awal: '',
            tgl_akhir: '',
            dataPenjualan: [],
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
        getData(){
            let date1 = this.tgl_awal.toLocaleString('en-GB').split('-');
            let date2 = this.tgl_akhir.toLocaleString('en-GB').split('-');
            let fixDate1 = date1[2] + '-' + date1[1] + '-' + date1[0];
            let fixDate2 = date2[2] + '-' + date2[1] + '-' + date2[0];

            axios.get("/api/penjualan/" + fixDate1 + '/' + fixDate2)
                .then((response) => {
                    if(response.data.length)
                        this.dataPenjualan = response.data;
                    else
                        this.dataPenjualan = 'tidak ada data';
                    console.log(response.data);
                }).catch((err) => {
                    console.log(err);
                });
        },
    }
}
</script>