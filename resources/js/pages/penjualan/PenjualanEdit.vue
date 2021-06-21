<template>
  	<div class="bg-gray-100 font-family-karla flex">
    	<sidebar-component></sidebar-component>
    	<div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      		<header-component></header-component>
      		<div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        		<main class="w-full flex-grow p-6 bg-white">
          			<!-- Content goes here! 😁 -->
          			<h1 class="text-lg text-gray-500 pb-1 font-semibold">Tambah Data Pembelian</h1>
          			<div class="w-full mt-6 pl-0 lg:pl-2">
            			<div class="leading-loose">
              				<div class="p-10 bg-white rounded shadow">
                				<div class="grid grid-cols-1">
                  					<div class="px-4 my-2 grid grid-cols-2 gap-4">
										<div class="">
											<label class="block text-base text-gray-400" for="cus_email"
												>Nama Barang</label>
											<input 
												readonly type="text" name="" id="" 
												:value="`${barangNama} - Stok (${barangStok})`" 
												class="font-bold uppercase text-xl w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded">
										</div>
										<div class="">
											<label class="block text-base text-gray-400" for="cus_name"
												>Jumlah Penjualan</label>
											<input
												readonly
												class="w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded font-bold text-xl"
												id="jumlah"
												type="number"
												aria-label="jumlah"
												placeholder="Masukkan jumlah pembelian"
												v-model="penjualan.jumlah"/>
										</div>
                  					</div>
                  					<div class="px-4 my-2 grid grid-cols-2 gap-4">
										<div class="">
											<label class="block text-base text-gray-400" for="cus_email">
												Harga Deal
											</label>
											<input
												readonly
												class="font-bold w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded text-xl"
												id="barang_satuan"
												v-model="penjualan.harga_jual"
												type="number"
												placeholder="Masukkan harga jual"
												aria-label="Email"/>
										</div>
										<div>
											<label class="block text-base text-gray-400" for="cus_email">
												Terbayar
											</label>
											<input
												class="font-bold w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded text-xl"
												id="barang_stok"
												v-model="penjualan.payment"
												type="number"
												placeholder="Jumlah yang dibayarkan"
												aria-label=""/>
										</div>
                  					</div>
                  					<div class="px-4 my-2 grid grid-cols-2 gap-4">
										<div class="py-2 text-xl">
											<label class="block text-base text-gray-400" for="cus_email">
												Tanggal Penjualan
											</label>
											<input
												readonly
												class="font-bold w-full px-4 py-2 text-gray-700 bg-indigo-50 rounded text-xl"
												id="barang_satuan"
												:value="moment(penjualan.tanggal).format('LL')"
												type="text"
												aria-label="Email"/>
											<!-- <date-picker
												class=""
												v-model="penjualan.tanggal" 
												value-type="format" 
												placeholder="Tanggal Pembelian" 
												format="DD-MM-YYYY">
											</date-picker> -->
										</div>
                  					</div>
                  					<div v-if="showInfoPembeli" class="px-4 my-2 grid grid-cols-3 gap-4">
										<div class="">
											<label class="block text-base text-gray-400" for="cus_email">
												Nama Pembeli</label>
											<input
												class="font-bold w-full px-4 py-2 text-xl text-gray-700 bg-indigo-50 rounded"
												id="barang_stok"
												v-model="penjualan.nama_pembeli"
												type="text"
												placeholder=""
												aria-label=""/>
										</div>
										<div class="">
											<label class="block text-base text-gray-400" for="cus_email">
												Tlp. Pembeli
											</label>
											<input
												class="font-bold w-full px-4 py-2 text-xl text-gray-700 bg-indigo-50 rounded"
												id="barang_stok"
												v-model="penjualan.phone_pembeli"
												type="text"
												placeholder=""
												aria-label=""/>
										</div>
										<div class="">
											<label class="block text-base text-gray-400" for="cus_email">
												ALamat pembeli
											</label>
											<input
												class="font-bold w-full px-4 py-2 text-xl text-gray-700 bg-indigo-50 rounded"
												id="barang_stok"
												v-model="penjualan.alamat_pembeli"
												type="text"
												placeholder=""
												aria-label=""/>
										</div>
									</div>
									<div class="px-4 my-2 grid grid-cols-2 gap-4">
										<div>
											<label class="block text-base text-gray-400" for="cus_email">
												Total Harga</label>
											<div class="total-harga font-bold text-2xl text-gray-900">
												{{totalHarga}}
											</div>
										</div>
										<div>
											<label class="block text-base text-gray-400" for="cus_email">
												Kurang Bayar</label>
											<div class="hutang font-bold text-2xl text-red-500">
												{{totalHutang}}
											</div>
										</div>
									</div>
                				</div><!-- grid -->
								<div class="mt-2">
									<span
										class="px-4 text-sm font-sf-pro"
										:class="{ 'text-green-400': status, 'text-red-400': !status }"
										>{{ status_msg }}</span
									>
								</div>
								<div class="mt-6 px-4 flex items-center">
									<button
										@click="showInfoPembeli = !showInfoPembeli" 
										class="bg-gray-200 block rounded px-6 py-1 focus:outline-none hover:bg-gray-300 mr-4">
										Catat Pembelis
									</button>
									<button
										@click="updatePenjualan(id)"
										class="px-6 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-600 rounded">
										{{ isUpdating == true ? "Processing..." : "Update" }}
									</button>
								</div>
              				</div>
            			</div>
          			</div>
        		</main>
        		<footer-component></footer-component>
      		</div>
    	</div>
    	<!-- <span hidden>{{checkStok}}</span> -->
  	</div>
</template>

<script>
export default {
  	props: ['id'],
  	data() {
		return {
			showInfoPembeli: false,

			isUpdating: false,
			status_msg: "",
			status: '',

			barangNama: null,
			barangStok: 0,
			harga: {
				standar: 0,
				grosir: 0,
			},
		
			selectedHarga: 0,

			penjualan: {
				barang_id: '',
				tanggal: '',
				jumlah: 0,
				harga_jual: 0,
				payment: 0,
				nama_pembeli: '-',
				phone_pembeli: '-',
				alamat_pembeli: '-',
			},
		}
  	},
  	computed: {
    	// checkStok(){
		// 	let stok = this.barangStok;
		// 	if(this.penjualan.jumlah > stok){
		// 		alert('stok tidak cukup');
		// 		this.penjualan.jumlah = stok;
		// 	}
		// },
		totalHarga: function () {
			let totalH = this.penjualan.jumlah * this.penjualan.harga_jual;
			if(totalH){
				let number = totalH;
				let	reverse = number.toString().split('').reverse().join('');
				let ribuan 	= reverse.match(/\d{1,3}/g);
				ribuan	= ribuan.join('.').split('').reverse().join('');
				return ribuan;
			}
			else {
				return totalH
			}
			// return this.penjualan.jumlah * this.penjualan.harga_jual
		},
		totalHutang: function() {
			let totalHarga = this.penjualan.jumlah * this.penjualan.harga_jual;
			let totalU = this.penjualan.payment - totalHarga;
			if(totalU){
				if(this.penjualan.payment > totalHarga)
					return 0
				else{
					let number = totalU;
					let	reverse = number.toString().split('').reverse().join('');
					let ribuan 	= reverse.match(/\d{1,3}/g);
					ribuan	= ribuan.join('.').split('').reverse().join('');
					return ribuan;
				}
			}
			else {
				return totalU
			}
			// return this.penjualan.payment - (this.penjualan.jumlah * this.penjualan.harga_jual)
		}
  	},
	mounted(){
		this.getPenjualan(this.id);
	},
  	methods: {
		updatePenjualan(param) {
			this.isUpdating = true;
			const formData = new FormData();
			formData.append("barang_id", this.penjualan.barang_id);
			formData.append("tanggal", this.penjualan.tanggal);
			formData.append("jumlah", this.penjualan.jumlah);
			formData.append("harga_jual", this.penjualan.harga_jual);
			formData.append("payment", this.penjualan.payment);
			formData.append("nama_pembeli", this.penjualan.nama_pembeli);
			formData.append("phone_pembeli", this.penjualan.phone_pembeli);
			formData.append("alamat_pembeli", this.penjualan.alamat_pembeli);

			axios.post(`/api/update-penjualan/${param}`, formData)
			.then((response) => {
				this.isUpdating = false;
				this.$router.push({
					name: "penjualan",
				});
				console.log(response);
			})
			.catch((error) => {
				this.isUpdating = false;
				console.log(error);
			});
		},
		getPenjualan(param) {
			axios.get("/api/get-penjualan/" + param)
				.then((response) => {
					console.log('penjualan',response)
					this.loading = false;
					this.getNamaBarang(response.data.barang_id);
					this.getHargaBarang(response.data.barang_id);
					this.penjualan.barang_id = response.data.barang_id;
					this.penjualan.tanggal = response.data.tanggal;
					this.penjualan.jumlah = response.data.jumlah;
					this.penjualan.harga_jual = response.data.harga_jual;
					this.penjualan.payment = response.data.payment;
					this.penjualan.nama_pembeli = response.data.nama_pembeli;
					this.penjualan.phone_pembeli = response.data.phone_pembeli;
					this.penjualan.alamat_pembeli = response.data.alamat_pembeli;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		setHarga(param){
			this.penjualan.harga_jual = param;
		},
		getHargaBarang(param){
			axios.get("/api/get-harga-barang/" + param)
				.then((response) => {
				this.harga.standar = response.data.harga_jual_standar;
				this.harga.grosir = response.data.harga_jual_grosir;
				// this.penjualan.harga_jual = response.data.harga_jual_standar;
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
		},
		getNamaBarang(param){
			axios.get("/api/get-barang/"+param)
			.then((response) => {
				this.barangNama = response.data.barang_nama;
				this.barangStok = response.data.barang_stok;
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
		},
		validateForm() {
			if (!this.penjualan.barang_id) {
				this.status = false;
				this.showNotification("nama barang tidak boleh kosong");
				return false;
			}
			if (!this.penjualan.jumlah) {
				this.status = false;
				this.showNotification("jumlah tidak boleh kosong");
				return false;
			}
			if (!this.penjualan.harga_jual) {
				this.status = false;
				this.showNotification("harga jual tidak boleh kosong");
				return false;
			}
			if (!this.penjualan.payment) {
				this.status = false;
				this.showNotification("pembayaran tidak boleh kosong");
				return false;
			}
			return true;
		},
		showNotification(message) {
			this.status_msg = message;
			setTimeout(() => {
				this.status_msg = "";
			}, 3000);
		}
  	},
};
</script>

<style scoped>
.mx-datepicker {
    position: relative;
    display: inline-block;
    width: 100%;
}

.mx-input {
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 6px 30px;
    padding-left: 10px;
    font-size: 14px;
    line-height: 1.4;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}
</style>