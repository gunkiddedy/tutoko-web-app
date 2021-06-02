<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6 bg-white">
          <div
            v-if="loading"
            class="z-30 flex justify-around relative opacity-75 bg-black inset-0"
          >
            <loader />
          </div>
          <!-- Content goes here! 😁 -->
          <h1 class="text-lg mb-4 font-semibold">Data Master</h1>
          <div class="master-wraper grid grid-cols-4 gap-8">
            <div class="barang flex flex-col items-center">
              <img src="img/cloud.png" alt="" class="w-20">
              <div class="mt-2">Barang</div>
            </div>
            <div class="supplier flex flex-col items-center">
              <img src="img/chat.png" alt="" class="w-20">
              <div class="mt-2">Supplier</div>
            </div>
            <div class="barang">
              <img src="img/document.png" alt="" class="w-20">
            </div>
            <div class="barang">
              <img src="img/folder.png" alt="" class="w-20">
            </div>
            <div class="barang">
              <img src="img/settings.png" alt="" class="w-20">
            </div>
            <div class="pegawai flex flex-col items-center">
              <img src="img/user.png" alt="" class="w-20">
              <div class="mt-2">Pegawai</div>
            </div>
            <div class="barang">
              <img src="img/online-chat.png" alt="" class="w-20">
            </div>
            <div class="barang">
              <img src="img/camera.png" alt="" class="w-20">
            </div>
          </div>
        </main>

        <div
          v-if="showModalKriteria"
          class="opacity-25 fixed inset-0 z-30 bg-black"
        ></div>
        <div
          v-if="showModalKecamatan"
          class="opacity-25 fixed inset-0 z-30 bg-black"
        ></div>
        <div
          v-if="showModalKecamatanKriteria"
          class="opacity-25 fixed inset-0 z-30 bg-black"
        ></div>
        <div v-if="showModalGlobal" class="opacity-25 fixed inset-0 z-30 bg-black"></div>
        <div v-if="showModalUPD" class="opacity-25 fixed inset-0 z-30 bg-black"></div>
        <div v-if="showModalUPK" class="opacity-25 fixed inset-0 z-30 bg-black"></div>
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
      unduhData: false,
      unduhDataKecamatan: false,
      unduhDataKecamatanKriteria: false,
      unduhDataUPD: false,
      unduhDataUPK: false,
      unduhDataGlobal: false,

      loadingExcel: false,
      loadingExcelKecamatan: false,
      loadingExcelKecamatanKriteria: false,
      loadingExcelUPD: false,
      loadingExcelUPK: false,
      loadingExcelGlobal: false,

      loading: true,

      showModalKriteria: false,
      showModalKecamatan: false,
      showModalKecamatanKriteria: false,
      showModalUPD: false,
      showModalUPK: false,
      showModalGlobal: false,

      kecamatans: [],
      desas: [],
      kriterias: [],
      usahas: [],
      years: {
        1: 2018,
        2: 2019,
        3: 2020,
        4: 2021,
      },
      select_kecamatan: "",
      select_desa: "",
      select_kriteria: "",
      select_usaha_pokok: "",
      select_tahun: "",
    };
  },
  created() {
    this.loadKecamatan();
    this.loadKriteria();
    this.loadUsaha();
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 700);

    if (
      localStorage.getItem("isLoggedIn") === "false" ||
      localStorage.getItem("role") !== "admin"
    ) {
      this.$router.push("/public");
    }
  },
  methods: {
    exportExcelKecamatanKriteria(param1, param2) {
      this.unduhDataKecamatanKriteria = true;
      this.loadingExcelKecamatanKriteria = true;
      if (!param1 || !param2) {
        alert("semua harus dipilih!");
        this.unduhDataKecamatanKriteria = false;
        this.loadingExcelKecamatanKriteria = false;
        return false;
      }
      axios
        .get("/api/admin-export-kk/" + param1 + "/" + param2, {
          responseType: "blob",
        })
        .then((response) => {
          this.unduhDataKecamatanKriteria = false;
          this.loadingExcelKecamatanKriteria = false;
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "kriteria-per-kecamatan-" + param2 + ".xlsx");
          document.body.appendChild(link);
          link.click();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    exportExcelKecamatan(param1) {
      this.unduhDataKecamatan = true;
      this.loadingExcelKecamatan = true;
      if (!param1) {
        alert("kecamatan belum dipilih");
        this.unduhDataKecamatan = false;
        this.loadingExcelKecamatan = false;
        return false;
      }
      axios
        .get("/api/admin-export-k/" + param1, {
          responseType: "blob",
        })
        .then((response) => {
          this.unduhDataKecamatan = false;
          this.loadingExcelKecamatan = false;
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "per-kecamatan-" + param1 + ".xlsx");
          document.body.appendChild(link);
          link.click();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    exportExcelKDK(param1, param2, param3) {
      this.unduhData = true;
      this.loadingExcel = true;
      if (!param1 || !param2 || !param3) {
        alert("semua harus dipilih");
        this.unduhData = false;
        this.loadingExcel = false;
        return false;
      }
      axios
        .get("/api/admin-export-kdk/" + param1 + "/" + param2 + "/" + param3, {
          responseType: "blob",
        })
        .then((response) => {
          this.unduhData = false;
          this.loadingExcel = false;
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "kriteria-per-desa-" + param1 + ".xlsx");
          document.body.appendChild(link);
          link.click();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    exportExcelUPD(param1, param2, param3) {
      this.unduhDataUPD = true;
      this.loadingExcelUPD = true;
      if (!param1 || !param2 || !param3) {
        alert("semua harus dipilih");
        this.unduhDataUPD = false;
        this.loadingExcelUPD = false;
        return false;
      }
      axios
        .get("/api/admin-export-upd/" + param1 + "/" + param2 + "/" + param3, {
          responseType: "blob",
        })
        .then((response) => {
          this.unduhDataUPD = false;
          this.loadingExcelUPD = false;
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "usaha-pokok-per-desa-" + param3 + ".xlsx");
          document.body.appendChild(link);
          link.click();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    exportExcelUPK(param1, param2) {
      this.unduhDataUPK = true;
      this.loadingExcelUPK = true;
      if (!param1 || !param2) {
        alert("semua harus dipilih");
        this.unduhDataUPK = false;
        this.loadingExcelUPK = false;
        return false;
      }
      axios
        .get("/api/admin-export-upk/" + param1 + "/" + param2, {
          responseType: "blob",
        })
        .then((response) => {
          this.unduhDataUPK = false;
          this.loadingExcelUPK = false;
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "usaha-pokok-per-kecamatan-" + param2 + ".xlsx");
          document.body.appendChild(link);
          link.click();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    exportExcelGlobal(param) {
      this.unduhDataGlobal = true;
      this.loadingExcelGlobal = true;
      if (!param) {
        alert("tahun harus dipilih");
        this.unduhDataGlobal = false;
        this.loadingExcelGlobal = false;
        return false;
      }
      axios
        .get("/api/admin-export-global/" + param, {
          responseType: "blob",
        })
        .then((response) => {
          this.unduhDataGlobal = false;
          this.loadingExcelGlobal = false;
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "umkm-global-tahun" + param + ".xlsx");
          document.body.appendChild(link);
          link.click();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggleModalGlobal() {
      this.showModalGlobal = !this.showModalGlobal;
    },
    toggleModalUPK() {
      this.showModalUPK = !this.showModalUPK;
    },
    toggleModalUPD() {
      this.showModalUPD = !this.showModalUPD;
    },
    toggleModalKecamatanKriteria() {
      this.showModalKecamatanKriteria = !this.showModalKecamatanKriteria;
    },
    toggleModalKecamatan() {
      this.showModalKecamatan = !this.showModalKecamatan;
    },
    toggleModalKriteria() {
      this.showModalKriteria = !this.showModalKriteria;
    },
    loadUsaha() {
      axios
        .get("/api/get-usaha-pokok")
        .then((response) => {
          this.usahas = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadKriteria() {
      axios
        .get("/api/get-kriteria")
        .then((response) => {
          this.kriterias = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadKecamatan() {
      axios
        .get("/api/get-kecamatans")
        .then((response) => {
          this.kecamatans = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadDesa() {
      axios
        .get("/api/get-desa-by-kecamatan-id", {
          params: {
            dfkecamatan_id: this.select_kecamatan,
          },
        })
        .then((response) => {
          this.desas = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
