<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6 bg-white">
          <h1 class="text-lg text-indigo-400 pb-1 font-semibold uppercase">
            UMKM Desa {{ namaDesa }}
          </h1>
          <button
            class="bg-gray-300 hover:bg-gray-400 px-3 py-1 text-white text-xs rounded-full"
            v-if="role === 'admin'"
            @click="$router.go(-1)"
          >
            <i class="fas fa-arrow-circle-left mr-3"></i> Back
          </button>
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
                <div slot="table-actions">
                  <button
                    @click="exportExcel()"
                    class="bg-indigo-500 hover:bg-indigo-600 px-3 py-1 text-white text-xs rounded-full mr-2"
                  >
                    <i class="fas fa-arrow-circle-down mr-3"></i>Download
                  </button>
                </div>
                <template
                  slot="table-row"
                  slot-scope="props"
                  v-if="role === 'desa' || role === 'admin'"
                >
                  <span v-if="props.column.field == 'action'">
                    <button
                      class="bg-indigo-500 rounded border border-indigo-600 hover:bg-indigo-600 px-2 py-0 text-white font-semibold mx-1"
                      @click="editData(props.row.id)"
                    >
                      <i class="fas fa-pen mr-2"></i>Edit
                    </button>
                    <button
                      class="bg-gray-500 rounded border border-gray-600 hover:bg-gray-600 px-2 py-0 text-white font-semibold mr-1"
                      @click="deleteData(props.row.id)"
                    >
                      <i class="fas fa-times mr-2"></i>Hapus
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
  props: ["id"],
  data() {
    return {
      loading: true,
      unduhData: false,
      isLoggedIn: "false",
      desa_id: "",
      isLoading: false,
      namaDesa: "",
      role: "",
      columns: [
        {
          label: "Action",
          field: "action",
          sortable: false,
          width: "160px",
        },
        {
          label: "nama_usaha",
          field: "nama_usaha",
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            // filterValue: "",
            // filterDropdownItems: [],
            // filterFn: function(data, filterString) {
            //     return data === filterString;
            // },
            trigger: "enter",
          },
        },
        {
          label: "kelembagaan",
          field: "kelembagaan",
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            // filterValue: "",
            filterDropdownItems: [
              "PT",
              "CV",
              "Koperasi",
              "FA",
              "UD",
              "P. Perseorangan Lainnya",
              "Non Badan Hukum",
            ],
            // filterFn: function(data, filterString) {
            //     return data === filterString;
            // },
            trigger: "keyup",
          },
        },
        {
          label: "nama_pemilik",
          field: "nama_pemilik",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "nik",
          field: "nik",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "jenis_kelamin",
          field: "jenis_kelamin",
          width: "300px",
          sortable: true,
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "disabilitas",
          field: "disabilitas",
          width: "300px",
          sortable: true,
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "siu",
          field: "siu",
          sortable: true,
          width: "150px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "npwp",
          field: "npwp",
          sortable: true,
          width: "150px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "tahun mulai usaha",
          field: "tmu",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "alamat",
          field: "alamat",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "desa",
          field: "desa",
          sortable: false,
          width: "200px",
          filterable: false,
        },

        {
          label: "no.tlp",
          field: "tlp",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "email",
          field: "email",
          sortable: true,
          width: "200px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "makanan olahan/industri pertanian",
          field: "up1",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "kerajinan/industri non pertanian",
          field: "up2",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "jasa swasta",
          field: "up3",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "perdagangan",
          field: "up4",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "usaha lainnya",
          field: "up5",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "pertanian, peternakan, kehutanan, perikanan",
          field: "up6",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "pertambangan dan penggalian",
          field: "up7",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "industri pengolahan",
          field: "up8",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "listrik, gas dan air",
          field: "up9",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "bangunan",
          field: "up10",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "perdagangan, hotel dan restoran",
          field: "up11",
          sortable: true,
          filterable: true,
          width: "300px",
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "bahan baku",
          field: "bahan_baku",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "tenaga kerja L (2016)",
          field: "tk1_l",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "tenaga kerja P (2016)",
          field: "tk1_p",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "tenaga kerja L (2017)",
          field: "tk2_l",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "tenaga kerja P (2017)",
          field: "tk2_p",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "kapasitas produksi/bulan(2016)",
          field: "kp1",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "kapasitas produksi/bulan(2017)",
          field: "kp2",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "omset /tahun (2016)",
          field: "omset1",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "omset /tahun (2017)",
          field: "omset2",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "modal sendiri (2016)",
          field: "ms1",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "modal sendiri (2017)",
          field: "ms2",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "bantuan pemerintah (2016)",
          field: "bp1",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "bantuan pemerintah (2017)",
          field: "bp2",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "pinjaman koperasi (2016)",
          field: "pk1",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "pinjaman koperasi (2017)",
          field: "pk2",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "pinjaman perorangan (2016)",
          field: "pp1",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "pinjaman perorangan (2017)",
          field: "pp2",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "pinjaman bank (2016)",
          field: "pb1",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "pinjaman bank (2017)",
          field: "pb2",
          type: "number",
          sortable: true,
          width: "300px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            trigger: "enter",
          },
        },
        {
          label: "kriteria",
          field: "kriteria",
          sortable: true,
          width: "150px",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "Filter",
            filterDropdownItems: [
              "Usaha Mikro",
              "Undefined",
              "Usaha Kecil",
              "Usaha Menengah",
            ],
            trigger: "keyup",
          },
        },
        {
          label: "Action",
          field: "action",
          sortable: false,
          width: "160px",
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
    this.desa_id = localStorage.getItem("desa_id");
    this.role = localStorage.getItem("role");
    // this.getRecords();
    if (this.role === "") {
      this.$router.push("/public");
    }
  },

  methods: {
    editData(param) {
      this.$router.push({
        name: "edit",
        params: {
          id: param,
        },
      });
    },
    deleteData(param) {
      //alert(param);
      this.$swal({
        title: "Anda Yakin?",
        text: "Data yang dihapus tidak bisa dikembalikan lagi!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus ini!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post("/api/delete-umkm-desa/" + param)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          this.$swal("Success!", "Data berhasil dihapus.", "success");
          this.getRecords();
        } else if (result.isDismissed) {
          this.$swal("Canceled!", "Proses Dibatalkan!", "info");
        }
      });
    },
    goToAddData() {
      this.$router.push({
        name: "add-page",
        params: {
          id: this.id,
        },
      });
    },
    exportExcel() {
      this.unduhData = true;
      this.loading = true;
      let param;
      if (this.role === "desa") {
        param = this.desa_id;
      } else if (this.role === "admin") {
        param = this.id;
      }
      axios
        .get("/api/export-umkm-desa/" + param, {
          responseType: "blob",
        })
        .then((response) => {
          this.unduhData = false;
          this.loading = false;
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "umkm-desa-" + param + ".xlsx");
          document.body.appendChild(link);
          link.click();
          console.log(response.data);
          console.log("success download excel");
        })
        .catch((error) => {
          console.log(error);
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
      if (this.role === "desa") {
        param = this.desa_id;
      } else {
        param = this.id;
      }
      axios
        .get("/api/ukms/" + param, { params: this.serverParams })
        .then((response) => {
          this.loading = false;
          this.namaDesa = response.data.data[0].desa;
          this.totalRecords = response.data.total;
          this.rows = response.data.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // dateFormat(date) {
    //     return moment(new Date(date)).format('DD/MM/YYYY');
    // },
  },
};
</script>

<style scoped></style>
