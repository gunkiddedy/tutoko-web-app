<?php

namespace App\Http\Controllers;
use App\Produksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProduksiController extends Controller
{

    public function getData()
    {
        $q = DB::table("detail_produksi")->orderBy('id', 'desc')->limit(100)->get();
        return response()->json($q);
    }
    public function getDataProduksiById(Request $request, $id)
    {
        $q = DB::table('detail_produksi')->where('id', $id)->get();
        return response()->json($q);
    }
    public function getDataById(Request $request, $id)
    {
        $q = Produksi::find($id);
        return response()->json($q);
    }
    public function updateProduksi(Request $request, $id)
    {
        $this->validate($request,[
            'barang_id',
            'pegawai_id',
            'produksi_tanggal',
            'produksi_jumlah',
            'hpp',
            'upah',
            'hjs',
            'hjg',
        ]);
        
        $q = Produksi::find($id);
        $q->barang_id = $request->get('barang_id');
        $q->pegawai_id = $request->get('pegawai_id');
        $q->produksi_tanggal = $request->get('produksi_tanggal');
        $q->produksi_jumlah = $request->get('produksi_jumlah');
        $q->hpp = $request->get('hpp');
        $q->upah = $request->get('upah');
        $q->hjs = $request->get('hjs');
        $q->hjg = $request->get('hjg');
        // dd($request);
        $q->save();

        return response()->json('data successfuly updated');
    }
    public function addData(Request $request)
    {
        $q = new Produksi;
        $q->barang_id = $request->get('barang_id');
        $q->pegawai_id = $request->get('pegawai_id');
        $q->produksi_tanggal = $request->get('produksi_tanggal');
        $q->produksi_jumlah = $request->get('produksi_jumlah');
        $q->hpp = $request->get('hpp');
        $q->upah = $request->get('upah');
        $q->hjs = $request->get('hjs');
        $q->hjg = $request->get('hjg');
        $q->save();
        
        return response()->json('data successfuly added');
    }

}
