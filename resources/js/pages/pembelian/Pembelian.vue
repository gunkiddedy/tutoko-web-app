<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6 bg-white">
          <div class="flex items-center justify-between">
            <h1 class="text-lg pb-1 font-semibold text-indigo-400 uppercase">
            Daftar Pembelian
          </h1>
            <button @click="tambahData" class="bg-blue-500 hover:bg-blue-600 w-auto text-white px-4 py-2 rounded">
              <i class="fas fa-plus mr-1"></i>Tambah Data</button>
          </div>
          
          <!-- loader spin-->
          <div
            v-if="loading"
            class="z-30 flex justify-around relative opacity-75 bg-black inset-0"
          >
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
                :columns="columns"
              >
                <template slot="table-row" slot-scope="props">
                  <span v-if="props.column.field == 'harga_beli_custom'">
										{{ toRupiah(props.row.harga_beli) }}
									</span>
                  <span v-if="props.column.field == 'harga_jual_standar_custom'">
										{{ toRupiah(props.row.harga_jual_standar) }}
									</span>
                  <span v-if="props.column.field == 'harga_jual_grosir_custom'">
										{{ toRupiah(props.row.harga_jual_grosir) }}
									</span>
                  <span v-if="props.column.field == 'payment_custom'">
										{{ toRupiah(props.row.payment) }}
									</span>
                  <span v-if="props.column.field == 'tagihan_custom'">
										<span :class="{'text-red-400 font-bold' : props.row.tagihan > 0, 'text-green-400 font-bold': props.row.tagihan == 0}">
											{{ toRupiah(props.row.tagihan) }}
										</span>
									</span>
                  <span v-if="props.column.field == 'tanggal_custom'">
                    {{moment(props.row.tanggal).format('LL')}}
                  </span>
                  <span v-if="props.column.field == 'action'">
                    <button
                      class="bg-indigo-500 rounded border border-indigo-600 hover:bg-indigo-600 px-2 py-0 text-white font-semibold mx-1"
                      @click="editData(props.row.id)"
                    >
                      <i class="fas fa-pen mr-2"></i>Edit
                    </button>
                  </span>
                  <span v-else>
                    {{ props.formattedRow[props.column.field] }}
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
import _ from "lodash";
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
          width: "130px",
        },
        {
          label: "Tanggal Beli",
          field: "tanggal_custom",
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
          label: "Nama Supplier",
          field: "supplier_nama",
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
          label: "Jumlah Beli",
          field: "jumlah",
          sortable: false,
          width: "auto",
        },
        {
          label: "Harga Beli",
          field: "harga_beli_custom",
          sortable: false,
          width: "auto",
        },
        {
          label: "Jual Standar",
          field: "harga_jual_standar_custom",
          sortable: false,
          width: "auto",
        },
        {
          label: "Jual Grosir",
          field: "harga_jual_grosir_custom",
          sortable: false,
          width: "auto",
        },
        {
          label: "Jumlah Bayar",
          field: "payment_custom",
          sortable: false,
          width: "auto",
        },
        {
          label: "Tagihan (Hutang)",
          field: "tagihan_custom",
          sortable: false,
          width: "auto",
        }
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
    toRupiah(param){
			let fix = param.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.");
			return fix;
		},
    editData(param) {
      this.$router.push({
        name: "pembelian-edit",
        params: {
          id: param,
        },
      });
    },
    tambahData(){
      this.$router.push({
        name: "pembelian-add",
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
          },
        ],
      });
      this.getRecords();
    },
    onColumnFilter(params) {
      // this.$set(this.columns[foundIndex].filterOptions, 'filterValue', value);
      this.updateParams(params);
      this.getRecords();
    },
    getRecords() {
      axios
        .get("/api/pembelian/", { params: this.serverParams })
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
