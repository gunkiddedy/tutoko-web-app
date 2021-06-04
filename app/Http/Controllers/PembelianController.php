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
    public function updatePembelian(Request $request, $id)
    {
        $this->validate($request,[
            'barang_nama' => 'required',
            'barang_satuan'=> 'required',
            'barang_stok' => 'required',
            'barang_tipe' => 'required',
        ]);
        
        $q = Pembelian::find($id);
        $q->barang_nama = $request->get('barang_nama');
        $q->barang_satuan = $request->get('barang_satuan');
        $q->barang_stok = $request->get('barang_stok');
        $q->barang_tipe = $request->get('barang_tipe');
        $q->active = $request->get('active');
        $q->save();

        return response()->json('data successfuly updated');
    }
    
    public function addData(Request $request)
    {

        return response()->json('data successfuly added');
    }

}
