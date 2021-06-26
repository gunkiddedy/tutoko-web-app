<template>
  	<div class="bg-gray-100 font-family-karla flex">
    	<sidebar-component></sidebar-component>
    	<div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      		<header-component></header-component>
      		<div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        		<main class="w-full flex-grow p-1 md:p-6 bg-white">
          			<h1 class="text-lg text-gray-500 pb-1 font-semibold">
						  Tambah Data Produksi
					</h1>
          			<div class="w-full mt-6 pl-0 lg:pl-2 leading-loose">
						<div class="p-2 md:p-10 bg-white rounded shadow">
							<div class="grid grid-cols-1">
								<div class="px-0 md:px-4 my-2">
									<label 
										class="block text-lg text-gray-600" for="cus_email">
										Tanggal Produksi</label>
										<date-picker
											v-model="tanggal" 
											value-type="format" 
											placeholder="Tanggal Produksi" 
											format="DD-MM-YYYY">
										</date-picker>
								</div>
								<div class="list-pgw px-0 md:px-4 my-2">
									<label 
										class="block text-lg text-gray-600" for="cus_email">
										Pegawai {{setJams}}</label>
									<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
										<div class="btn-grup" v-for="(pgw,i) in pegawais" :key="i">
											<div class="flex items-center">
												<span 
													class="w-1/2 px-4 text-xl uppercase font-bold border border-gray-300 hover:bg-gray-200 py-2 bg-gray-100 text-blue-400">
													<span>{{pgw.pegawai_nama}}</span>
												</span>
												<select
													v-model="setJams[i]"
													class="w-1/2 px-5 py-2 text-gray-500 focus:outline-none focus:shadow-inner border border-blue-200 bg-white appearance-none uppercase text-lg font-bold">
													<option :value="0" selected>
														Libur
													</option>
													<option
														class="text-gray-700"
														v-for="(day, i) in days"
														:value="day"
														selected
														:key="i">
														{{ day }} Hari
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<!-- <div class="px-0 md:px-4 my-2">
									<label 
										class="block text-lg text-gray-600" for="cus_email">Nama Pegawai</label>
									<select
										v-model="form.pegawai_id"
										class="w-full px-5 py-2 rounded text-gray-500 focus:outline-none focus:shadow-inner border-2 border-blue-200 bg-white appearance-none uppercase text-lg font-bold">
										<option class="text-gray-700" value="" selected="selected">
											-Pilih Pegawai-
										</option>
										<option
											class="text-gray-700"
											v-for="(pegawai, i) in pegawais"
											:value="pegawai.id"
											:key="i">
											{{ pegawai.pegawai_nama }}
										</option>
									</select>
								</div> -->
							</div><!-- grid -->
							<div class="mt-6 px-0 md:px-4">
								<button
									@click="saveData"
									class="px-6 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-600 rounded"
								>{{ isSaving==true ? "Processing..." : "Simpan Data" }}
								</button>
								<button
									@click="cancel"
									class="ml-4 px-6 py-1 text-white font-light tracking-wider bg-red-400 hover:bg-red-600 rounded">Batal</button>
							</div>
						</div>
          			</div>
        		</main>
        		<footer-component></footer-component>
      		</div>
    	</div>
  	</div>
</template>

<script>
export default {
  	props: ["id"],
  	data() {
    	return {
			isSaving: false,
			pegawais: null,
			days: [1, 0.5],
			setJams: [],
			tanggal: '',
    	}
  	},
	mounted(){
		this.getPegawais();
	},
  	methods: {
		getPegawais(){
			axios.get("/api/pegawai/")
			.then((response) => {
				this.pegawais = response.data;
				response.data.map(() => {
					this.setJams.push(0);
				});
			})
			.catch((err) => {
				console.log(err);
			});
		},
		cancel(){
			this.$router.push('/absensi');
		},
    	saveData(e) {
      		e.preventDefault();
			const formData = new FormData();
			formData.append("pegawai_jam", this.setJams);
			if(this.tanggal == ''){
				let todayDate = new Date().toISOString().slice(0, 10);
				formData.append("tanggal", todayDate);
			}else{
				let date = this.tanggal.toLocaleString('en-GB').split('-');
				let fixDate = date[2] + '-' + date[1] + '-' + date[0];
				formData.append("tanggal", fixDate);
			}
      		axios.post("/api/add-data-absensi", formData)
        	.then((response) => {
				console.log(response);
				this.isSaving = false;
				this.$router.push('absensi');
			})
			.catch((error) => {
				this.isSaving = false;
				console.log(error);
			});
    	},
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
