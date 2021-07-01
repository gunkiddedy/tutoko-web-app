<template>
  	<div class="bg-gray-100 font-family-karla flex">
    	<sidebar-component></sidebar-component>
    	<div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      		<header-component></header-component>
      		<div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        		<main class="w-full flex-grow p-6 bg-white">
          			<div class="flex items-center justify-between">
            			<h1 class="text-lg pb-1 font-semibold text-indigo-400 uppercase">
            				Daftar Barang
						</h1>
            			<button @click="tambahData" class="bg-blue-500 hover:bg-blue-600 w-auto text-white px-4 py-2 rounded">
              				<i class="fas fa-plus mr-1"></i>
							<span>Tambah Data</span>
						</button>
          			</div>
					<!-- loader spin-->
					<div v-if="loading" class="z-30 flex justify-around relative opacity-75 bg-black inset-0">
						<loader />
					</div>
          			<div class="w-full mt-2">
						<div class="bg-white overflow-auto">
							<vue-good-table
								mode="pages"
								@on-page-change="onPageChange"
								@on-sort-change="onSortChange"
								@on-column-filter="onColumnFilter"
								@on-per-page-change="onPerPageChange"
								:lineNumbers="false"
								:totalRows="totalRecords"
								:isLoading.sync="isLoading"
								:pagination-options="{
								enabled: true,
								perPageDropdown: [10],
								nextLabel: 'next',
								prevLabel: 'prev',
								setCurrentPage: 1,
								perPage: 10,
								dropdownAllowAll: false,
								rowsPerPageLabel: 'per halaman',
								allLabel: 'Semua',
								ofLabel: 'dari',
								}"
								:rows="rows"
								:columns="columns">
								<template slot="table-row" slot-scope="props">
									<span v-if="props.column.field == 'action'">
										<button
											class="bg-indigo-500 rounded border border-indigo-600 hover:bg-indigo-600 px-2 py-0 text-white font-semibold mx-1"
											@click="editData(props.row.id)"><i class="fas fa-pen mr-2"></i>Edit
										</button>
										<button
											v-if="props.row.barang_tipe == 'Mandiri'"
											class="bg-green-500 rounded border border-green-600 hover:bg-green-600 px-2 py-0 text-white font-semibold mx-1 ml-1"
											@click="jualBarang(props.row.id)"><i class="fas fa-truck mr-2"></i>Jual
										</button>
									</span>
									<span v-else>
										{{ props.formattedRow[props.column.field] }}
									</span>
									<span v-if="props.column.field == 'active_custom'">
										<span
											:class="{
												'bg-green-400': props.row.active == 'Active',
												'bg-gray-400': props.row.active == 'Inactive',
											}" 
											class="px-3 text-white font-bold py-0 leading-loose flex items-center justify-center">
											{{ props.row.active }}
										</span>
									</span>
									<span v-if="props.column.field == 'photo_custom'">
										<a :href="'storage/' + props.row.photo" target="_blank">
											<img class="w-12" :src="'storage/' + props.row.photo" :alt="props.row.barang_nama">
										</a>
									</span>
								</template>
							</vue-good-table>
						</div>
          			</div>
        		</main>
        		<div v-if="loading" class="opacity-25 fixed inset-0 z-30 bg-black"></div>
        		<footer-component></footer-component>
      		</div>
    	</div>
  	</div>
</template>

<script>
export default {
	data() {
		return {
			loading: true,
			isLoggedIn: false,
			username: "",
			role: "",
			isAdmin: false,
			isLoading: false,
			columns: [
				{
					label: "Action",
					field: "action",
					sortable: false,
					width: "auto",
				},
				{
					label: "Photo",
					field: "photo_custom",
					sortable: false,
					width: "auto",
				},
				{
					label: "Nama Barang",
					field: "barang_nama",
					sortable: false,
					width: "auto",
					filterable: true,
					filterOptions: {
						enabled: true,
						placeholder: "Filter",
						trigger: "enter",
					},
				},
				{
					label: "Jenis",
					field: "barang_tipe",
					sortable: false,
					width: "auto",
					filterable: true,
					filterOptions: {
						enabled: true,
						placeholder: "Filter",
						filterDropdownItems: [
						"Mandiri",
						"Supplier",
						],
						trigger: "keyup",
					},
				},
				{
					label: "Satuan",
					field: "barang_satuan",
					sortable: false,
					width: "auto",
				},
				{
					label: "Stok",
					field: "barang_stok",
					sortable: false,
					width: "auto",
				},
				{
					label: "Status",
					field: "active_custom",
					sortable: false,
					width: "auto",
				},
			],
			rows: [],
			totalRecords: 0,
			serverParams: {
				columnFilters: {},
				sort: {
					field: "",
					type: "desc",
				},
				page: 1,
				perPage: 10,
			},
		};
	},
  	created() {
    	this.getRecords();
  	},
	mounted() {
		this.isLoggedIn = localStorage.getItem("isLoggedIn");
		this.username = localStorage.getItem("username");
		this.role = localStorage.getItem("role");
		this.isAdmin = localStorage.getItem("isAdmin");
	},
  	methods: {
		tambahData(){
			this.$router.push({
				name: "barang-add",
			});
		},
		editData(param) {
			this.$router.push({
				name: "barang-edit",
				params: {
				id: param,
				},
			});
		},
		jualBarang(param){
			this.$router.push({
				name: "penjualan-add",
				params: {
				id: param,
				},
			});
		},
		updateParams(newProps) {
			this.serverParams = Object.assign({}, this.serverParams, newProps);
		},
		onPageChange(params) {
			this.updateParams({ page: params.currentPage });
			this.getRecords();
		},
		onPerPageChange(params) {
			this.updateParams({ perPage: params.currentPerPage });
			this.getRecords();
		},
		onSortChange(params) {
			this.updateParams({
				sort: [
				{
					field: params[0].field,
					type: params[0].type,
				},],
			});
			this.getRecords();
		},
		onColumnFilter(params) {
			// this.$set(this.columns[foundIndex].filterOptions, 'filterValue', value);
			this.updateParams(params);
			this.getRecords();
		},
		getRecords() {
			axios.get("/api/barang/", { params: this.serverParams })
				.then((response) => {
					this.loading = false;
					this.totalRecords = response.data.length;
					this.rows = response.data;
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		},
  	},
};
</script>