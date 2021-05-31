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
          <h1 class="text-lg text-gray-500 pb-1 font-semibold">
            Add Data kc-{{ kecamatan_id }}-{{ desa_id }}
          </h1>
          <div class="w-full mt-6 pl-0 lg:pl-2">
            <div class="leading-loose">
              <div class="p-10 bg-white rounded-lg shadow-xl">
                <form class="my-6">
                  <div class="grid lg:grid-cols-3 md:grid-cols-2">
                    <div class="px-1 my-2" v-if="isAdmin === 'true'">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >Kecamatan</label
                      >
                      <select
                        name="dfkecamatan_id"
                        id="dfkecamatan_id"
                        v-model="select_kecamatan"
                        @change="loadDesa"
                        class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                        <option class="text-gray-700" value="" selected="selected">
                          -Select Kecamatan-
                        </option>
                        <option
                          class="text-gray-700"
                          v-for="(kec, i) in kecamatans"
                          :value="kec.dfkecamatan_id"
                          :key="i"
                        >
                          {{ kec.dfkecamatan_nama }}
                        </option>
                      </select>
                    </div>
                    <div class="px-1 my-2" v-if="isAdmin === 'true'">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >Desa</label
                      >
                      <select
                        name="dfdesa_id"
                        id="dfdesa_id"
                        v-model="select_desa"
                        class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                        <option class="text-gray-700" value="" selected="selected">
                          -Select Desa-
                        </option>
                        <option
                          class="text-gray-700"
                          v-for="(desa, i) in desas"
                          :key="i"
                          :value="desa.dfdesa_id"
                        >
                          {{ desa.dfdesa_nama }}
                        </option>
                      </select>
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >Kelembagaan</label
                      >
                      <select
                        v-model="select_lembaga"
                        class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                        <option class="text-gray-700" value="" selected="selected">
                          -Select Kelembagaan-
                        </option>
                        <option
                          class="text-gray-700"
                          v-for="(lmbg, i) in lembagas"
                          :value="lmbg.lembaga"
                          :key="i"
                        >
                          {{ lmbg.lembaga }}
                        </option>
                      </select>
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >Jenis Usaha</label
                      >
                      <select
                        v-model="select_usaha_pokok"
                        class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                        <option class="text-gray-700" value="" selected="selected">
                          -Select Usaha Pokok-
                        </option>
                        <option
                          class="text-gray-700"
                          v-for="(up, i) in usahas"
                          :value="up.field"
                          :key="i"
                        >
                          {{ up.usaha }}
                        </option>
                      </select>
                    </div>
                    <!-- show up dependent on usaha pokok -->
                    <div class="px-1 my-2" v-if="isUP1 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >makanan olahan/industri pertanian</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="up1"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP2 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >kerajinan/industri non pertanian</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="up2"
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP3 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >jasa swasta</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="up3"
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP4 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >perdagangan</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="up4"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP5 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >usaha lainnya</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="up5"
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP6 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >pertanian, peternakan, kehutanan, perikanan</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="up6"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP7 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >pertambangan dan penggalian</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="up7"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP8 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >industri pengolahan</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="up8"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP9 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >listrik, gas dan air</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="up9"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP10 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >bangunan</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="up10"
                      />
                    </div>
                    <div class="px-1 my-2" v-if="isUP11 == select_usaha_pokok">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >perdagangan, hotel dan restoran</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="up11"
                      />
                    </div>
                    <!-- -->
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >nama usaha</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="nama_usaha"
                      />
                    </div>
                    <!--<div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >kelembagaan</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="kelembagaan"
                        type="text"
                        aria-label="Email"
                      />
                    </div>-->
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >nama_pemilik</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="nama_pemilik"
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >nik</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        aria-label="Name"
                        v-model="nik"
                        v-int
                        type="text"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >jenis_kelamin</label
                      >
                      <select
                        required="required"
                        name="gender"
                        id="gender"
                        v-model="select_gender"
                        class="w-full px-5 py-1 rounded-lg text-gray-500 focus:outline-none focus:shadow-inner border-2 border-gray-200 bg-white appearance-none"
                      >
                        <option class="text-gray-700" value="" selected="selected">
                          -Jenis Kelamin-
                        </option>
                        <option
                          class="text-gray-700"
                          v-for="(gender, i) in genders"
                          :value="gender.substring(0, 1)"
                          :key="i"
                        >
                          {{ gender }}
                        </option>
                      </select>
                      <!--<input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="jenis_kelamin"
                        type="text"
                        aria-label="Email"
                      />-->
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >Disabilitas</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="disabilitas"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >siu</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="siu"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >npwp</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        aria-label="Name"
                        v-model="npwp"
                        v-int
                        type="text"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >tmu</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="tmu"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >alamat</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="alamat"
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >desa</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        type="text"
                        aria-label="Name"
                        v-model="desa"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >tlp</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="tlp"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >email</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="email"
                        type="email"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >bahan_baku</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="bahan_baku"
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >tenaga kerja L (2016)</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        aria-label="Name"
                        v-model="tk1_l"
                        v-int
                        type="text"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >tenaga kerja P (2016)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="tk1_p"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >tenaga kerja L (2017)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="tk2_l"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >tenaga kerja P (2017)</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        aria-label="Name"
                        v-model="tk2_p"
                        v-int
                        type="text"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >kapasitas produksi/bulan(2016)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="kp1"
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >kapasitas produksi/bulan(2017)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="kp2"
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >omset /tahun (2016)</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        aria-label="Name"
                        v-model="omset1"
                        v-int
                        type="text"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >omset /tahun (2017)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="omset2"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >modal sendiri (2016)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="ms1"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >modal sendiri (2017)</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        aria-label="Name"
                        v-model="ms2"
                        v-int
                        type="text"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >bantuan pemerintah (2016)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="bp1"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >bantuan pemerintah (2017)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="bp2"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >pinjaman koperasi (2016)</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        aria-label="Name"
                        v-model="pk1"
                        v-int
                        type="text"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >pinjaman koperasi (2017)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="pk2"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >pinjaman perorangan (2016)</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="pp1"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_name"
                        >pinjaman perorangan (2017)</label
                      >
                      <input
                        class="rounded-lg w-full px-5 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_name"
                        aria-label="Name"
                        v-model="pp2"
                        v-int
                        type="text"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >Pinjaman Bank 2016</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="pb1"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                    </div>
                    <div class="px-1 my-2">
                      <label class="block text-sm text-gray-600" for="cus_email"
                        >Pinjaman Bank 2017</label
                      >
                      <input
                        class="rounded-lg w-full px-2 py-1 text-gray-700 focus:outline-none border-2 border-gray-200 bg-white focus:shadow-inner"
                        id="cus_email"
                        v-model="pb2"
                        v-int
                        type="text"
                        aria-label="Email"
                      />
                      <input type="hidden" name="input_by" v-model="input_by" />
                    </div>
                  </div>
                </form>

                <div>
                  <span
                    class="px-4 text-sm font-sf-pro"
                    :class="{ 'text-green-400': status, 'text-red-400': !status }"
                    >{{ status_msg }}</span
                  >
                </div>

                <div class="mt-6 flex justify-end">
                  <button
                    @click="addData"
                    class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded-lg"
                  >
                    {{ isSubmit == true ? "Processing..." : "Submit" }}
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
      nama_usaha: "",
      kelembagaan: "",
      nama_pemilik: "",
      nik: "",
      jenis_kelamin: "",
      disabilitas: 0,
      siu: 0,
      npwp: 0,
      tmu: 0,
      alamat: "",
      desa: "",
      tlp: "",
      email: "",
      up1: "0",
      up2: "0",
      up3: "0",
      up4: "0",
      up5: "0",
      up6: "0",
      up7: "0",
      up8: "0",
      up9: "0",
      up10: "0",
      up11: "0",
      isUP1: "up1",
      isUP2: "up2",
      isUP3: "up3",
      isUP4: "up4",
      isUP5: "up5",
      isUP6: "up6",
      isUP7: "up7",
      isUP8: "up8",
      isUP9: "up9",
      isUP10: "up10",
      isUP11: "up11",
      bahan_baku: "",
      tk1_l: 0,
      tk1_p: 0,
      tk2_l: 0,
      tk2_p: 0,
      kp1: 0,
      kp2: 0,
      omset1: 0,
      omset2: 0,
      ms1: 0,
      ms2: 0,
      bp1: 0,
      bp2: 0,
      pk1: 0,
      pk2: 0,
      pp1: 0,
      pp2: 0,
      pb1: 0,
      pb2: 0,
      input_by: "",
      dfkecamatan_id: "",
      dfdesa_id: "",

      kecamatans: [],
      desas: [],
      usahas: [],
      lembagas: [],
      genders: {
        1: "Laki-laki",
        2: "Perempuan",
      },
      select_gender: "",
      select_lembaga: "",
      select_kecamatan: "",
      select_desa: "",
      select_usaha_pokok: "",

      isLoggedIn: false,
      username: "",
      kecamatan_id: "",
      role: "",
      isAdmin: false,
      desa_id: "",

      loading: true,
      isSubmit: false,
      status_msg: "",
      status: "",
    };
  },
  created() {
    this.loadKecamatan();
    this.loadUsaha();
    this.loadLembaga();
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    this.username = localStorage.getItem("username");
    this.kecamatan_id = localStorage.getItem("kecamatan_id");
    this.desa_id = localStorage.getItem("desa_id");
    this.role = localStorage.getItem("role");
    this.isAdmin = localStorage.getItem("isAdmin");

    // if (this.role !== "desa" || this.role !== "admin") {
    //   this.$router.push("/public");
    // }

    setTimeout(() => {
      this.loading = false;
    }, 400);
  },
  methods: {
    validateForm() {
      if (!this.nama_usaha) {
        this.status = false;
        this.showNotification("nama_usaha tidak boleh kosong");
        return false;
      }
      // if (!this.dfkecamatan_id) {
      //   this.status = false;
      //   this.showNotification("kecamatan tidak boleh kosong");
      //   return false;
      // }
      // if (!this.dfdesa_id) {
      //   this.status = false;
      //   this.showNotification("desa tidak boleh kosong");
      //   return false;
      // }
      return true;
    },
    showNotification(message) {
      this.status_msg = message;
      setTimeout(() => {
        this.status_msg = "";
      }, 3000);
    },
    addData(e) {
      e.preventDefault();

      let param1;
      let param2;

      if (this.role == "desa") {
        param1 = this.kecamatan_id;
        param2 = this.desa_id;
      } else if (this.role == "admin") {
        if (!this.select_kecamatan || !this.select_desa) {
          this.status = false;
          this.showNotification("kecamatan atau desa tidak boleh kosong");
          return false;
        }
        param1 = this.select_kecamatan;
        param2 = this.select_desa;
      }

      if (!this.validateForm()) {
        return false;
      }
      this.isSubmit = true;
      const formData = new FormData();
      formData.append("dfkecamatan_id", param1);
      formData.append("dfdesa_id", param2);
      formData.append("kelembagaan", this.select_lembaga);
      formData.append("nama_usaha", this.nama_usaha);
      formData.append("nama_pemilik", this.nama_pemilik);
      formData.append("nik", this.nik);
      formData.append("jenis_kelamin", this.select_gender);
      formData.append("disabilitas", this.disabilitas);
      formData.append("siu", this.siu);
      formData.append("npwp", this.npwp);
      formData.append("tmu", this.tmu);
      formData.append("alamat", this.alamat);
      formData.append("desa", this.desa);
      formData.append("tlp", this.tlp);
      formData.append("email", this.email);
      formData.append("up1", this.up1);
      formData.append("up2", this.up2);
      formData.append("up3", this.up3);
      formData.append("up4", this.up4);
      formData.append("up5", this.up5);
      formData.append("up6", this.up6);
      formData.append("up7", this.up7);
      formData.append("up8", this.up8);
      formData.append("up9", this.up9);
      formData.append("up10", this.up10);
      formData.append("up11", this.up11);
      // formData.append("up1", this.rincian_usaha);
      // formData.append("up2", this.rincian_usaha);
      // formData.append("up3", this.rincian_usaha);
      // formData.append("up4", this.rincian_usaha);
      // formData.append("up5", this.rincian_usaha);
      // formData.append("up6", this.rincian_usaha);
      // formData.append("up7", this.rincian_usaha);
      // formData.append("up8", this.rincian_usaha);
      // formData.append("up9", this.rincian_usaha);
      // formData.append("up10", this.rincian_usaha);
      // formData.append("up11", this.rincian_usaha);

      formData.append("bahan_baku", this.bahan_baku);
      formData.append("tk1_l", this.tk1_l);
      formData.append("tk1_p", this.tk1_p);
      formData.append("tk2_l", this.tk2_l);
      formData.append("tk2_p", this.tk2_p);
      formData.append("kp1", this.kp1);
      formData.append("kp2", this.kp2);
      formData.append("omset1", this.omset1);
      formData.append("omset2", this.omset2);
      formData.append("ms1", this.ms1);
      formData.append("ms2", this.ms2);
      formData.append("bp1", this.bp1);
      formData.append("bp2", this.bp2);
      formData.append("pk1", this.pk1);
      formData.append("pk2", this.pk2);
      formData.append("pp1", this.pp1);
      formData.append("pp2", this.pp2);
      formData.append("pb1", this.pb1);
      formData.append("pb2", this.pb2);
      formData.append("input_by", this.role);
      axios
        .post("/api/add-data", formData)
        .then((response) => {
          console.log(response);
          this.status = true;
          this.showNotification("Data Successfully Added");
          this.isSubmit = false;
          this.$router.go(-1);
        })
        .catch((error) => {
          this.status_msg = error;
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
    loadLembaga() {
      axios
        .get("/api/get-lembaga")
        .then((response) => {
          this.lembagas = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
