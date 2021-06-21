<template>
  	<div class="bg-gray-100 font-family-karla flex">
    	<sidebar-component></sidebar-component>
    	<div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      		<header-component></header-component>
      		<div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        		<main class="w-full flex-grow p-6 bg-white">
					<div
						v-if="loading"
						class="z-30 flex justify-around relative opacity-75 bg-black inset-0">
						<loader />
					</div>
					<h1 class="text-lg text-gray-500 pb-1 font-semibold">
						Add Data Pegawai
					</h1>
          			<div class="w-full mt-6 pl-0 lg:pl-2">
            			<div class="leading-loose">
              				<div class="p-10 bg-white rounded shadow">
                				<div class="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
									<div class="px-4 my-2">
										<label class="block text-sm text-gray-600" for="cus_name">Nama Pegawai</label>
										<input
											class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
											id="pegawai_nama"
											type="text"
											aria-label="Name"
											v-model="pegawai_nama"/>
									</div>
                				</div>
                				<div class="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
									<div class="px-4 my-2">
										<label class="block text-sm text-gray-600" for="cus_email">Phone</label>
										<input
											class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
											id="pegawai_phone"
											v-model="pegawai_phone"
											type="text"
											placeholder="Phone"
											aria-label="Email"/>
									</div>
                  					<div class="px-4 my-2">
										<label class="block text-sm text-gray-600" for="cus_email">Alamat</label>
										<input
											class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
											id="pegawai_alamat"
											v-model="pegawai_alamat"
											type="text"
											placeholder="Alamat"
											aria-label=""/>
									</div>
								</div>
								<div class="mt-6 px-4">
									<button
										@click="saveDataPegawai"
										class="px-4 py-1 text-white font-light tracking-wider bg-blue-500 hover:bg-blue-600 rounded"
									>{{ isSaving == true ? "Saving..." : "Simpan Data" }}</button>
								</div>
              				</div>
            			</div>
          			</div>
        		</main>
				<div v-if="loading" class="opacity-25 fixed inset-0 z-30 bg-black"
				></div>
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
			status_msg: "",
			pegawai_nama: "",
			pegawai_phone: "",
			pegawai_alamat: "",
		};
  	},
  	methods: {
    	validateForm() {
			if (!this.pegawai_nama) {
				this.status = false;
				this.showNotification("nama tidak boleh kosong");
				return false;
			}
			if (!this.pegawai_phone) {
				this.status = false;
				this.showNotification("phone tidak boleh kosong");
				return false;
			}
      		return true;
    	},
    	showNotification(message) {
			this.status_msg = message;
			setTimeout(() => {
				this.status_msg = "";
			}, 3000);
		},
    	saveDataPegawai(e) {
      		e.preventDefault();
			if (!this.validateForm()) {
				this.isSaving = false;
				return false;
			}
      		this.isSaving = true;
			const formData = new FormData();
			formData.append("pegawai_nama", this.pegawai_nama);
			formData.append("pegawai_phone", this.pegawai_phone);
			formData.append("pegawai_alamat", this.pegawai_alamat);
      		axios.post("/api/add-data-pegawai", formData)
			.then((response) => {
				console.log(response);
				this.showNotification("Data Successfully Added");
				this.isSaving = false;
				this.$router.go(-1);
			})
			.catch((error) => {
				this.status_msg = error;
				console.log(error);
			});
    },
  },
};
</script>

<style scoped></style>
