<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <header-component></header-component>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6 bg-white">
          <!-- loader spin-->
          <div
            v-if="loading"
            class="z-30 flex justify-around relative opacity-75 bg-black inset-0"
          >
            <loader />
          </div>
          <!-- Content goes here! 😁 -->
          <h1 class="text-lg text-gray-500 pb-1 font-semibold">Edit Data</h1>
          <div class="w-full mt-6 pl-0 lg:pl-2">
            <div class="leading-loose">
              <div class="p-10 bg-white rounded shadow-xl">
                <p class="text-lg text-gray-800 font-medium pb-4">
                  Nama Usaha {{ nama_usaha }}
                </p>

                <div
                  class="grid grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2"
                >
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >nama usaha</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="nama_usaha"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >kelembagaan</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="kelembagaan"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >nama_pemilik</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="nama_pemilik"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name">nik</label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="nik"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >jenis_kelamin</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="jenis_kelamin"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email">siu</label>
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="siu"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name">npwp</label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="npwp"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email">tmu</label>
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="tmu"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >alamat</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="alamat"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name">desa</label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="desa"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email">tlp</label>
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="tlp"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >email</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="email"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >makanan olahan/industri pertanian</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="up1"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >kerajinan/industri non pertanian</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="up2"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >jasa swasta</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="up3"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >perdagangan</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="up4"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >usaha lainnya</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="up5"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >pertanian, peternakan, kehutanan, perikanan</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="up6"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >pertambangan dan penggalian</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="up7"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >industri pengolahan</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="up8"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >listrik, gas dan air</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="up9"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >bangunan</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="up10"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >perdagangan, hotel dan restoran</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="up11"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >bahan_baku</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="bahan_baku"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >tenaga kerja L (2016)</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="tk1_l"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >tenaga kerja P (2016)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="tk1_p"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >tenaga kerja L (2017)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="tk2_l"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >tenaga kerja P (2017)</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="tk2_p"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >kapasitas produksi/bulan(2016)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="kp1"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >kapasitas produksi/bulan(2017)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="kp2"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >omset /tahun (2016)</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="omset1"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >omset /tahun (2017)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="omset2"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >modal sendiri (2016)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="ms1"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >modal sendiri (2017)</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="ms2"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >bantuan pemerintah (2016)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="bp1"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >bantuan pemerintah (2017)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="bp2"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >pinjaman koperasi (2016)</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="pk1"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >pinjaman koperasi (2017)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="pk2"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >pinjaman perorangan (2016)</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="pp1"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_name"
                      >pinjaman perorangan (2017)</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      type="text"
                      aria-label="Name"
                      v-model="pp2"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Pinjaman Bank 2016</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="pb1"
                      type="text"
                      placeholder="Country"
                      aria-label="Email"
                    />
                  </div>
                  <div class="px-1 my-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Pinjaman Bank 2017</label
                    >
                    <input
                      class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      v-model="pb2"
                      type="text"
                      placeholder="SIU"
                      aria-label="Email"
                    />
                  </div>
                </div>

                <div class="mt-6">
                  <button
                    @click="updateDataUmkmById(id)"
                    class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  >
                    {{ isUpdating == true ? "Updating..." : "Update" }}
                  </button>
                </div>
              </div>
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
  props: ["id"],
  data() {
    return {
      desa_id: "",
      loading: true,
      isUpdating: false,
      nama_usaha: "",
      kelembagaan: "",
      nama_pemilik: "",
      nik: "",
      jenis_kelamin: "",
      siu: "",
      npwp: "",
      tmu: "",
      alamat: "",
      desa: "",
      tlp: "",
      email: "",
      up1: "",
      up2: "",
      up3: "",
      up4: "",
      up5: "",
      up6: "",
      up7: "",
      up8: "",
      up9: "",
      up10: "",
      up11: "",
      bahan_baku: "",
      tk1_l: "",
      tk1_p: "",
      tk2_l: "",
      tk2_p: "",
      kp1: "",
      kp2: "",
      omset1: "",
      omset2: "",
      ms1: "",
      ms2: "",
      bp1: "",
      bp2: "",
      pk1: "",
      pk2: "",
      pp1: "",
      pp2: "",
      pb1: "",
      pb2: "",
    };
  },
  created() {
    this.getDataDesaById(this.id);
  },
  mounted() {
    this.desa_id = localStorage.getItem("desa_id");

    // if (this.role !== "admin" || this.isLoggedIn === "false") {
    //   this.$router.push("/public");
    // }
  },
  methods: {
    getDataDesaById(param) {
      axios
        .get("/api/get-umkm-desa-by-id/" + param)
        .then((response) => {
          this.loading = false;
          this.nama_usaha = response.data.nama_usaha;
          this.kelembagaan = response.data.kelembagaan;
          this.nama_pemilik = response.data.nama_pemilik;
          this.nik = response.data.nik;
          this.jenis_kelamin = response.data.jenis_kelamin;
          this.siu = response.data.siu;
          this.npwp = response.data.npwp;
          this.tmu = response.data.tmu;
          this.alamat = response.data.alamat;
          this.desa = response.data.desa;
          this.tlp = response.data.tlp;
          this.email = response.data.email;
          this.up1 = response.data.up1;
          this.up2 = response.data.up2;
          this.up3 = response.data.up3;
          this.up4 = response.data.up4;
          this.up5 = response.data.up5;
          this.up6 = response.data.up6;
          this.up7 = response.data.up7;
          this.up8 = response.data.up8;
          this.up9 = response.data.up9;
          this.up10 = response.data.up10;
          this.up11 = response.data.up11;
          this.bahan_baku = response.data.bahan_baku;
          this.tk1_l = response.data.tk1_l;
          this.tk1_p = response.data.tk1_p;
          this.tk2_l = response.data.tk2_l;
          this.tk2_p = response.data.tk2_p;
          this.kp1 = response.data.kp1;
          this.kp2 = response.data.kp2;
          this.omset1 = response.data.omset1;
          this.omset2 = response.data.omset2;
          this.ms1 = response.data.ms1;
          this.ms2 = response.data.ms2;
          this.bp1 = response.data.bp1;
          this.bp2 = response.data.bp2;
          this.pk1 = response.data.pk1;
          this.pk2 = response.data.pk2;
          this.pp1 = response.data.pp1;
          this.pp2 = response.data.pp2;
          this.pb1 = response.data.pb1;
          this.pb2 = response.data.pb2;
          //console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateDataUmkmById(param) {
      this.isUpdating = true;
      axios
        .post("/api/update-umkm-desa/" + param, {
          nama_pemilik: this.nama_pemilik,
          nama_usaha: this.nama_usaha,
          kelembagaan: this.kelembagaan,
          nik: this.nik,
          jenis_kelamin: this.jenis_kelamin,
          siu: this.siu,
          npwp: this.npwp,
          tmu: this.tmu,
          alamat: this.alamat,
          desa: this.desa,
          tlp: this.tlp,
          email: this.email,
          up1: this.up1,
          up2: this.up2,
          up3: this.up3,
          up4: this.up4,
          up5: this.up5,
          up6: this.up6,
          up7: this.up7,
          up8: this.up8,
          up9: this.up9,
          up10: this.up10,
          up11: this.up11,
          bahan_baku: this.bahan_baku,
          tk1_l: this.tk1_l,
          tk1_p: this.tk1_p,
          tk2_l: this.tk2_l,
          tk2_p: this.tk2_p,
          kp1: this.kp1,
          kp2: this.kp2,
          omset1: this.omset1,
          omset2: this.omset2,
          ms1: this.ms1,
          ms2: this.ms2,
          bp1: this.bp1,
          bp2: this.bp2,
          pk1: this.pk1,
          pk2: this.pk2,
          pp1: this.pp1,
          pp2: this.pp2,
          pb1: this.pb1,
          pb2: this.pb2,
        })
        .then((response) => {
          this.isUpdating = false;
          this.$router.go(-1);
          //this.$router.push({
          //name: "desa",
          //params: {
          //id: this.desa_id,
          //},
          //});
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
