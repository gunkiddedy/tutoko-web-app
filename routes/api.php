<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('products', 'PublicController@index');
Route::get('product-detail/{id}', 'PublicController@productDetail');
Route::get('total-products', 'PublicController@totalProducts');

Route::get('ukms/{desa_id}', 'DesaController@getUmkmDesa');
Route::get('global-kecamatan/{id}', 'DesaController@getGlobalDataUmkmKecamatan');
Route::get('get-umkm-desa-by-id/{id}', 'DesaController@getDataUmkmById');
Route::post('update-umkm-desa/{id}', 'DesaController@updateDataUmkmById');
Route::post('delete-umkm-desa/{id}', 'DesaController@deleteDataUmkmById');

Route::get('export-umkm-desa/{desa_id}', 'ExportController@exportDesa');

Route::post('logout', 'AuthController@logout');
Route::post('login', 'AuthController@login')->name('login');

// ADMIN TUTOKO WEB APP
// --SUPPLIER--//
Route::get('supplier', 'SupplierController@getData');
Route::get('get-supplier/{id}', 'SupplierController@getDataById');

//--BARANG--//
Route::get('barang', 'BarangController@getDataBarang');
Route::get('barang-non-mandiri', 'BarangController@getDataNonMandiri');
Route::get('barang-mandiri', 'BarangController@getDataMandiri');
Route::get('get-barang/{id}', 'BarangController@getDataBarangById');
Route::post('update-barang/{id}', 'BarangController@updateDataBarangById');
Route::post('delete-photo/{id}', 'BarangController@deleteFileStorage');
Route::post('add-data-barang', 'BarangController@addDataBarang');

//--PEGAWAI--//
Route::get('pegawai', 'PegawaiController@getDataPegawai');
Route::get('get-pegawai/{id}', 'PegawaiController@getDataPegawaiById');
Route::post('update-pegawai/{id}', 'PegawaiController@updateDataPegawaiById');
Route::post('add-data-pegawai', 'PegawaiController@addDataPegawai');

//--SUPPLIER--//
Route::get('supplier', 'SupplierController@getDataSupplier');
Route::get('get-supplier/{id}', 'SupplierController@getDataSupplierById');
Route::post('update-supplier/{id}', 'SupplierController@updateDataSupplierById');
Route::post('add-data-supplier', 'SupplierController@addDataSupplier');

// --PEMBELIAN--//
Route::get('pembelian', 'PembelianController@getData');
Route::get('get-pembelian/{id}', 'PembelianController@getDataById');
Route::get('get-harga-barang/{id}', 'PembelianController@getHargaBarangById');
Route::post('update-pembelian/{id}', 'PembelianController@updatePembelian');
Route::post('add-data', 'PembelianController@addData');

// --PRODUKSI--//
Route::get('produksi', 'ProduksiController@getData');
Route::get('get-produksi/{id}', 'ProduksiController@getDataById');
Route::post('update-produksi/{id}', 'ProduksiController@updateProduksi');
Route::post('add-data-produksi', 'ProduksiController@addData');


// --PENJUALAN--//
Route::get('penjualan', 'PenjualanController@getData');
Route::get('get-penjualan/{id}', 'PenjualanController@getDataById');
Route::post('update-penjualan/{id}', 'PenjualanController@updatePenjualan');
Route::post('add-data-penjualan', 'PenjualanController@addData');

Route::post('upload-photo-product', 'AdminController@uploadProduct');
Route::get('admin-export-kdk/{kcmtn}/{desa}/{kriteria}', 'ExportController@exportKDK'); //kriteria per desa --cl
Route::get('admin-export-upd/{kcmtn}/{desa}/{up}', 'ExportController@exportUPD'); //usaha pokok per desa
Route::get('admin-export-k/{kcmtn}', 'ExportController@exportKecamatan'); //per kecamatan
Route::get('admin-export-kk/{kcmtn}/{kriteria}', 'ExportController@exportKK'); //kriteria per kecamatan
Route::get('admin-export-upk/{kcmtn}/{up}', 'ExportController@exportUPK'); //usaha pokok per kecamatan
Route::get('admin-export-global/{tahun}', 'ExportController@exportGlobal');
// Route::get('global-umkm', 'DesaController@getGlobalDataUmkm');


// get kecamatan and desa (dependent dropdown)
Route::get('get-usaha-pokok', 'DesaController@getUsahaPokok');
Route::get('get-lembaga', 'DesaController@getKelembagaan');
Route::get('get-kriteria', 'DesaController@getKriteria');
Route::get('get-kecamatans', 'DesaController@getKecamatan');
Route::get('get-desa-by-kecamatan-id', 'DesaController@getDesa');

// Route::post('add-data', 'UmkmController@addData');
