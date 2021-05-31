<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6 bg-white">
          <h1 class="text-lg text-indigo-400 pb-1 font-semibold uppercase">UMKM Kecamatan {{ namaKecamatan }}</h1>
          <button class="bg-gray-300 hover:bg-gray-400 px-3 py-1 text-white text-xs rounded-full" v-if="role === 'admin'" @click="$router.go(-1)"><i class="fas fa-arrow-circle-left mr-3"></i> Back</button>
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
                :columns="columns"
                :line-numbers="true"
              >
                <template slot="table-row" slot-scope="props">
                  <span v-if="props.column.field == 'action'">
                    <button class="bg-indigo-500 rounded border border-indigo-600 hover:bg-indigo-600 px-2 py-0 text-white font-semibold mx-1" @click="viewData(props.row.id_des)"><i class="fas fa-eye mr-2"></i>View</button>
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
  props: ["id"],
  data() {
    return {
      loading: true,
      unduhData: false,
      isLoggedIn: "false",
      kecamatan_id: "",
      role: "",
      isLoading: false,
      namaKecamatan: "",
      columns: [
        {
          label: "Action",
          field: "action",
          sortable: false,
          width: "100px",
        },
        {
          label: "ID",
          field: "id_des",
          sortable: false,
          width: "auto",
        },
        {
          label: "Desa",
          field: "desa",
          sortable: true,
          width: "auto",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "Total UMKM",
          field: "total_umkm",
          sortable: false,
          width: "auto",
        },
        {
          label: "Mikro",
          field: "u_mikro",
          sortable: false,
          width: "auto",
        },
        {
          label: "Kecil",
          field: "u_kecil",
          sortable: false,
          width: "auto",
        },
        {
          label: "Menengah",
          field: "u_menengah",
          sortable: false,
          width: "auto",
        },
        {
          label: "T.Kerja L",
          field: "tkl",
          sortable: false,
          width: "auto",
        },
        {
          label: "T.Kerja P",
          field: "tkp",
          sortable: false,
          width: "auto",
        },
        {
          label: "Modal",
          field: "modal",
          sortable: false,
          width: "auto",
        },
        {
          label: "Omset",
          field: "omset",
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

  mounted() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    this.kecamatan_id = localStorage.getItem("kecamatan_id");
    this.role = localStorage.getItem("role");
    this.getRecords();
  },

  methods: {
    viewData(param) {
      //alert(param);
      this.$router.push({
        name: "desa",
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
      let param;
      if (this.role === "kecamatan") {
        param = this.kecamatan_id;
      } else if (this.role === "admin") {
        param = this.id;
      } else {
        param = this.role;
      }
      axios
        .get("/api/global-kecamatan/" + param, { params: this.serverParams })
        .then((response) => {
          this.loading = false;
          this.namaKecamatan = response.data.data[0].kecamatan;
          this.totalRecords = response.data.length;
          this.rows = response.data.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
