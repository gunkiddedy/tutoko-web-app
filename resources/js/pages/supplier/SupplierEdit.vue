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
						Edit Data Supplier
					</h1>
          			<div class="w-full mt-6 pl-0 lg:pl-2">
            			<div class="leading-loose">
              				<div class="p-10 bg-white rounded shadow">
                				<div class="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
									<div class="px-4 my-2">
										<label class="block text-sm text-gray-600" for="cus_name">Nama Supplier</label>
										<input
											class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
											id="supplier_nama"
											type="text"
											aria-label="Name"
											v-model="supplier_nama"/>
									</div>
                				</div>
                				<div class="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
									<div class="px-4 my-2">
										<label class="block text-sm text-gray-600" for="cus_email">Phone</label>
										<input
											class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
											id="supplier_phone"
											v-model="supplier_phone"
											type="text"
											placeholder="Phone"
											aria-label="Email"/>
									</div>
                  					<div class="px-4 my-2">
										<label class="block text-sm text-gray-600" for="cus_email">Alamat</label>
										<input
											class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
											id="supplier_alamat"
											v-model="supplier_alamat"
											type="text"
											placeholder="Alamat"
											aria-label=""/>
									</div>
								</div>
								<div class="mt-6 px-4">
									<button
										@click="updateDataSupplier(id)"
										class="px-4 py-1 text-white font-light tracking-wider bg-blue-500 hover:bg-blue-600 rounded"
									>{{ isUpdating == true ? "Updating..." : "Update Data" }}</button>
									<button
										@click="cancel"
										class="ml-4 px-6 py-1 text-white font-light tracking-wider bg-red-400 hover:bg-red-600 rounded">Batal
									</button>
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
			loading: true,
			isUpdating: false,

			supplier_nama: "",
			supplier_phone: "",
			supplier_alamat: "",
		};
  	},
	mounted() {
		this.getDataSupplier(this.id);
	},
  	methods: {
		cancel(){
			this.$router.push('/supplier');
		},
    	getDataSupplier(param) {
			axios.get("/api/get-supplier/" + param)
			.then((response) => {
				this.loading = false;
				this.supplier_nama = response.data.supplier_nama;
				this.supplier_phone = response.data.supplier_phone;
				this.supplier_alamat = response.data.supplier_alamat;
			})
			.catch((err) => {
				console.log(err);
			});
    	},
    	updateDataSupplier(param) {
			this.isUpdating = true;
			const formData = new FormData();
			formData.append("supplier_nama", this.supplier_nama);
			formData.append("supplier_phone", this.supplier_phone);
			formData.append("supplier_alamat", this.supplier_alamat);
      		axios.post(`/api/update-supplier/${param}`, formData)
			.then((response) => {
				this.isUpdating = false;
				this.$router.push({
					name: "supplier",
				});
				console.log(response);
			})
			.catch((error) => {
				this.isUpdating = false;
				console.log(error);
			});
    	},
  	},
};
</script>
<style scoped></style>
