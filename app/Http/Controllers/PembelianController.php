<?php

namespace App\Http\Controllers;
use App\Pembelian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PembelianController extends Controller
{

    public function getData()
    {
        $q = DB::table("detail_pembelian")->get();
        return response()->json($q);
    }
    public function getDataById(Request $request, $id)
    {
        $q = Pembelian::find($id);
        return response()->json($q);
    }
    public function getHargaBarangById($id)
    {
        $q = DB::table('pembelians')->where('barang_id', $id)->first();
        return response()->json($q);
    }
    public function updatePembelian(Request $request, $id)
    {
        $this->validate($request,[
            'supplier_id' => 'required',
            'barang_id'=> 'required',
            'tanggal' => 'required',
            'jumlah' => 'required',
            'harga_beli' => 'required',
            'payment'=> 'required',
            'harga_jual_standar' => 'required',
            'harga_jual_grosir' => 'required',
        ]);
        
        $q = Pembelian::find($id);
        $q->supplier_id = $request->get('supplier_id');
        $q->barang_id = $request->get('barang_id');
        $q->tanggal = $request->get('tanggal');
        $q->jumlah = $request->get('jumlah');
        $q->harga_beli = $request->get('harga_beli');
        $q->payment = $request->get('payment');
        $q->harga_jual_standar = $request->get('harga_jual_standar');
        $q->harga_jual_grosir = $request->get('harga_jual_grosir');
        // dd($request);
        $q->save();

        return response()->json('data successfuly updated');
    }
    public function addData(Request $request)
    {
        $q = new Pembelian;
        $q->supplier_id = $request->get('supplier_id');
        $q->barang_id = $request->get('barang_id');
        $q->tanggal = $request->get('tanggal');
        $q->jumlah = $request->get('jumlah');
        $q->harga_beli = $request->get('harga_beli');
        $q->payment = $request->get('payment');
        $q->harga_jual_standar = $request->get('harga_jual_standar');
        $q->harga_jual_grosir = $request->get('harga_jual_grosir');
        // dd($request);
        $q->save();
        
        return response()->json('data successfuly added');
    }

}
