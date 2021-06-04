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

//--BARANG--//
Route::get('barang', 'BarangController@getDataBarang');
Route::get('barang-non-mandiri', 'BarangController@getDataNonMandiri');
Route::get('get-barang/{id}', 'BarangController@getDataBarangById');
Route::post('update-barang/{id}', 'BarangController@updateDataBarangById');
Route::post('delete-photo/{id}', 'BarangController@deleteFileStorage');
Route::post('add-data-barang', 'BarangController@addDataBarang');

// --PEMBELIAN--//
Route::get('pembelian', 'PembelianController@getData');
Route::get('get-pembelian/{id}', 'PembelianController@getDataById');
Route::post('update-pembelian/{id}', 'PembelianController@updatePembelian');
Route::post('add-data-pembelian', 'PembelianController@addData');


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

Route::post('add-data', 'UmkmController@addData');
