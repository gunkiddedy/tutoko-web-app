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
          <h1 class="text-lg mb-4 font-semibold">Filter Data UMKM</h1>
          <button
            class="bg-gray-300 hover:bg-gray-400 px-3 py-1 text-white text-xs rounded-full"
            @click="$router.go(-1)"
          >
            <i class="fas fa-arrow-circle-left mr-3"></i> Back
          </button>

          <!--<h1 class="text-lg text-gray-500 pb-1 font-semibold">Download berdasarkan parameter</h1>-->
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div
            class="bg-white shadow overflow-hidden sm:rounded-lg sm:w-full lg:w-1/2 mx-auto mt-6"
          >
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Form Download</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Download berdasarkan parameter.
              </p>
            </div>
            <div class="border-t border-gray-200">
              <div class="bg-white px-4 py-2 grid grid-cols-2">
                <div class="mx-2 text-left text-sm font-medium text-gray-500">
                  Per Kecamatan
                </div>
                <div class="mt-1 text-sm text-gray-900">
                  <button
                    @click="toggleModalKecamatan"
                    class="bg-indigo-500 rounded-full text-white px-4 py-1 hover:bg-indigo-600"
                  >
                    Filter
                  </button>
                </div>
              </div>

              <div class="bg-white px-4 py-2 grid grid-cols-2">
                <div class="mx-2 text-left text-sm font-medium text-gray-500">
                  Kriteria Per Desa
                </div>
                <div class="mt-1 text-sm text-gray-900">
                  <button
                    @click="toggleModalKriteria"
                    class="bg-indigo-500 rounded-full text-white px-4 py-1 hover:bg-indigo-600"
                  >
                    Filter
                  </button>
                </div>
              </div>

              <div class="bg-white px-4 py-2 grid grid-cols-2">
                <div class="mx-2 text-left text-sm font-medium text-gray-500">
                  Kriteria Per Kecamatan
                </div>
                <div class="mt-1 text-sm text-gray-900">
                  <button
                    @click="toggleModalKecamatanKriteria"
                    class="bg-indigo-500 rounded-full text-white px-4 py-1 hover:bg-indigo-600"
                  >
                    Filter
                  </button>
                </div>
              </div>

              <div class="bg-white px-4 py-2 grid grid-cols-2">
                <div class="mx-2 text-left text-sm font-medium text-gray-500">
                  Usaha Pokok Per Desa
                </div>
                <div class="mt-1 text-sm text-gray-900">
                  <button
                    @click="toggleModalUPD"
                    class="bg-indigo-500 rounded-full text-white px-4 py-1 hover:bg-indigo-600"
                  >
                    Filter
                  </button>
                </div>
              </div>

              <div class="bg-white px-4 py-2 grid grid-cols-2">
                <div class="mx-2 text-left text-sm font-medium text-gray-500">
                  Usaha Pokok Per Kecamatan
                </div>
                <div class="mt-1 text-sm text-gray-900">
                  <button
                    @click="toggleModalUPK"
                    class="bg-indigo-500 rounded-full text-white px-4 py-1 hover:bg-indigo-600"
                  >
                    Filter
                  </button>
                </div>
              </div>

              <div class="bg-white px-4 py-2 grid grid-cols-2">
                <div class="mx-2 text-left text-sm font-medium text-gray-500">
                  UMKM GLOBAL
                </div>
                <div class="mt-1 text-sm text-gray-900">
                  <button
                    @click="toggleModalGlobal"
                    class="bg-indigo-500 rounded-full text-white px-4 py-1 hover:bg-indigo-600"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <!-- modal kriteria per desa-->
            <div
              v-if="showModalKriteria"
              class="overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none justify-center items-center flex"
            >
              <div class="leading-loose lg:w-1/2 sm:w-1/2">
                <div class="p-10 bg-white rounded-lg shadow-xl">
                  <div
                    v-if="loadingExcel"
                    class="z-50 flex justify-around relative opacity-75 bg-black inset-0"
                  >
                    <loader />
                  </div>
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name"
                      >Kecamatan</label
                    >
                    <select
                      required="required"
                      name="dfkecamatan_id"
                      id="dfkecamatan_id"
                      v-model="select_kecamatan"
                      @change="loadDesa"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
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
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name">Desa</label>
                    <select
                      required="required"
                      name="dfdesa_id"
                      id="dfdesa_id"
                      v-model="select_desa"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
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
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name">Kriteria</label>
                    <select
                      required="required"
                      v-model="select_kriteria"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
                    >
                      <option class="text-gray-700" value="" selected="selected">
                        -Select Kriteria-
                      </option>
                      <option
                        class="text-gray-700"
                        v-for="(krit, i) in kriterias"
                        :value="krit.kriteria"
                        :key="i"
                      >
                        {{ krit.kriteria }}
                      </option>
                    </select>
                  </div>
                  <!--<div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name">Usaha Pokok</label>
                    <select v-model="select_usaha_pokok" class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none">
                      <option class="text-gray-700" value="" selected="selected">-Select Usaha Pokok-</option>
                      <option class="text-gray-700" v-for="(up, i) in usahas" :value="up.field" :key="i">
                        {{ up.usaha }}
                      </option>
                    </select>
                  </div>-->
                  <div class="mt-6 flex w-full items-center justify-end">
                    <button
                      @click="toggleModalKriteria"
                      class="px-3 py-1 text-sm text-white bg-gray-500 rounded-full"
                    >
                      <i class="fas fa-times mr-2"></i> Close
                    </button>
                    <button
                      @click="
                        exportExcelKDK(select_kecamatan, select_desa, select_kriteria)
                      "
                      class="ml-4 px-3 py-1 text-sm text-white bg-indigo-600 rounded-full"
                    >
                      <i class="fas fa-arrow-circle-down mr-2"></i>
                      {{ unduhData ? "Loading..." : "Download" }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal per kecamatan-->
            <div
              v-if="showModalKecamatan"
              class="overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none justify-center items-center flex"
            >
              <div class="leading-loose lg:w-1/2 sm:w-1/2">
                <div class="p-10 bg-white rounded-lg shadow-xl">
                  <div
                    v-if="loadingExcelKecamatan"
                    class="z-50 flex justify-around relative opacity-75 bg-black inset-0"
                  >
                    <loader />
                  </div>
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name"
                      >Kecamatan</label
                    >
                    <select
                      required="required"
                      name="dfkecamatan_id"
                      id="dfkecamatan_id"
                      v-model="select_kecamatan"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
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
                  <div class="mt-6 flex w-full items-center justify-end">
                    <button
                      @click="toggleModalKecamatan"
                      class="px-3 py-1 text-sm text-white bg-gray-500 rounded-full"
                    >
                      <i class="fas fa-times mr-2"></i> Close
                    </button>
                    <button
                      @click="exportExcelKecamatan(select_kecamatan)"
                      class="ml-4 px-3 py-1 text-sm text-white bg-indigo-600 rounded-full"
                    >
                      <i class="fas fa-arrow-circle-down mr-2"></i>
                      {{ unduhDataKecamatan ? "Loading..." : "Download" }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal kriteria per kecamatan-->
            <div
              v-if="showModalKecamatanKriteria"
              class="overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none justify-center items-center flex"
            >
              <div class="leading-loose lg:w-1/2 sm:w-1/2">
                <div class="p-10 bg-white rounded-lg shadow-xl">
                  <div
                    v-if="loadingExcelKecamatanKriteria"
                    class="z-50 flex justify-around relative opacity-75 bg-black inset-0"
                  >
                    <loader />
                  </div>
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name"
                      >Kecamatan</label
                    >
                    <select
                      required="required"
                      name="dfkecamatan_id"
                      id="dfkecamatan_id"
                      v-model="select_kecamatan"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
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
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name">Kriteria</label>
                    <select
                      required="required"
                      v-model="select_kriteria"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
                    >
                      <option class="text-gray-700" value="" selected="selected">
                        -Select Kriteria-
                      </option>
                      <option
                        class="text-gray-700"
                        v-for="(krit, i) in kriterias"
                        :value="krit.kriteria"
                        :key="i"
                      >
                        {{ krit.kriteria }}
                      </option>
                    </select>
                  </div>
                  <div class="mt-6 flex w-full items-center justify-end">
                    <button
                      @click="toggleModalKecamatanKriteria"
                      class="px-3 py-1 text-sm text-white bg-gray-500 rounded-full"
                    >
                      <i class="fas fa-times mr-2"></i> Close
                    </button>
                    <button
                      @click="
                        exportExcelKecamatanKriteria(select_kecamatan, select_kriteria)
                      "
                      class="ml-4 px-3 py-1 text-sm text-white bg-indigo-600 rounded-full"
                    >
                      <i class="fas fa-arrow-circle-down mr-2"></i>
                      {{ unduhDataKecamatanKriteria ? "Loading..." : "Download" }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal UPD-->
            <div
              v-if="showModalUPD"
              class="overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none justify-center items-center flex"
            >
              <div class="leading-loose lg:w-1/2 sm:w-1/2">
                <div class="p-10 bg-white rounded-lg shadow-xl">
                  <div
                    v-if="loadingExcelUPD"
                    class="z-50 flex justify-around relative opacity-75 bg-black inset-0"
                  >
                    <loader />
                  </div>
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name"
                      >Kecamatan</label
                    >
                    <select
                      required="required"
                      name="dfkecamatan_id"
                      id="dfkecamatan_id"
                      v-model="select_kecamatan"
                      @change="loadDesa"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
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
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name">Desa</label>
                    <select
                      required="required"
                      name="dfdesa_id"
                      id="dfdesa_id"
                      v-model="select_desa"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
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
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name"
                      >Usaha Pokok</label
                    >
                    <select
                      v-model="select_usaha_pokok"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
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
                  <div class="mt-6 flex w-full items-center justify-end">
                    <button
                      @click="toggleModalUPD"
                      class="px-3 py-1 text-sm text-white bg-gray-500 rounded-full"
                    >
                      <i class="fas fa-times mr-2"></i> Close
                    </button>
                    <button
                      @click="
                        exportExcelUPD(select_kecamatan, select_desa, select_usaha_pokok)
                      "
                      class="ml-4 px-3 py-1 text-sm text-white bg-indigo-600 rounded-full"
                    >
                      <i class="fas fa-arrow-circle-down mr-2"></i>
                      {{ unduhDataUPD ? "Loading..." : "Download" }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal UPK-->
            <div
              v-if="showModalUPK"
              class="overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none justify-center items-center flex"
            >
              <div class="leading-loose lg:w-1/2 sm:w-1/2">
                <div class="p-10 bg-white rounded-lg shadow-xl">
                  <div
                    v-if="loadingExcelUPK"
                    class="z-50 flex justify-around relative opacity-75 bg-black inset-0"
                  >
                    <loader />
                  </div>
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name"
                      >Kecamatan</label
                    >
                    <select
                      required="required"
                      name="dfkecamatan_id"
                      id="dfkecamatan_id"
                      v-model="select_kecamatan"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
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
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name"
                      >Usaha Pokok</label
                    >
                    <select
                      v-model="select_usaha_pokok"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
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
                  <div class="mt-6 flex w-full items-center justify-end">
                    <button
                      @click="toggleModalUPK"
                      class="px-3 py-1 text-sm text-white bg-gray-500 rounded-full"
                    >
                      <i class="fas fa-times mr-2"></i> Close
                    </button>
                    <button
                      @click="exportExcelUPK(select_kecamatan, select_usaha_pokok)"
                      class="ml-4 px-3 py-1 text-sm text-white bg-indigo-600 rounded-full"
                    >
                      <i class="fas fa-arrow-circle-down mr-2"></i>
                      {{ unduhDataUPK ? "Loading..." : "Download" }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal GLOBAL-->
            <div
              v-if="showModalGlobal"
              class="overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none justify-center items-center flex"
            >
              <div class="leading-loose lg:w-1/2 sm:w-1/2">
                <div class="p-10 bg-white rounded-lg shadow-xl">
                  <div
                    v-if="loadingExcelGlobal"
                    class="z-50 flex justify-around relative opacity-75 bg-black inset-0"
                  >
                    <loader />
                  </div>
                  <div class="py-2 my-1">
                    <label class="block text-sm text-gray-600" for="name"
                      >Tahun - {{ select_tahun }}</label
                    >
                    <select
                      required="required"
                      name="tahun"
                      id="tahun"
                      v-model="select_tahun"
                      class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded-lg text-gray-500 leading-tight focus:outline-none"
                    >
                      <option class="text-gray-700" value="" selected="selected">
                        -Select Tahun-
                      </option>
                      <option
                        class="text-gray-700"
                        v-for="(year, i) in years"
                        :value="year"
                        :key="i"
                      >
                        {{ year }}
                      </option>
                    </select>
                  </div>
                  <div class="mt-6 flex w-full items-center justify-end">
                    <button
                      @click="toggleModalGlobal"
                      class="px-3 py-1 text-sm text-white bg-gray-500 rounded-full"
                    >
                      <i class="fas fa-times mr-2"></i> Close
                    </button>
                    <button
                      @click="exportExcelGlobal(select_tahun)"
                      class="ml-4 px-3 py-1 text-sm text-white bg-indigo-600 rounded-full"
                    >
                      <i class="fas fa-arrow-circle-down mr-2"></i>
                      {{ unduhDataGlobal ? "Loading..." : "Download" }}
                    </button>
                  </div>
                </div>
              </div>
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
