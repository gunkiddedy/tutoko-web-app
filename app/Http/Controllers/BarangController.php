<?php

namespace App\Http\Controllers;
use App\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BarangController extends Controller
{

    public function getDataBarang()
    {
        $q = DB::table("barangs")->get();
        return response()->json($q);
    }
    public function getDataBarangById(Request $request, $id)
    {
        $q = Barang::find($id);
        return response()->json($q);
    }
    public function updateDataBarangById(Request $request, $id)
    {
        $q = Barang::find($id);
        $q->barang_nama = $request->get('barang_nama');
        $q->barang_satuan = $request->get('barang_satuan');
        $q->barang_stok = $request->get('barang_stok');
        $q->active = $request->get('active');
        $q->save();
        
        return response()->json('data successfuly updated');
    }

}
