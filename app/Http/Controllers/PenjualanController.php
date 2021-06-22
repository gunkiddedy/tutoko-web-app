<?php

namespace App\Http\Controllers;
use App\Penjualan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PenjualanController extends Controller
{

    public function getData()
    {
        $q = DB::table("detail_penjualan")->limit(100)->get();
        return response()->json($q);
    }
    public function getDataById(Request $request, $id)
    {
        $q = Penjualan::find($id);
        return response()->json($q);
    }
    public function updatePenjualan(Request $request, $id)
    {
        $this->validate($request,[
            'barang_id'=> 'required',
            'tanggal' => 'required',
            'jumlah' => 'required',
            'harga_jual' => 'required',
            'payment'=> 'required',
        ]);
        
        // dd($request);
        $q = Penjualan::find($id);
        $q->barang_id = $request->get('barang_id');
        $q->tanggal = $request->get('tanggal');
        $q->jumlah = $request->get('jumlah');
        $q->harga_jual = $request->get('harga_jual');
        $q->payment = $request->get('payment');
        $q->nama_pembeli = $request->get('nama_pembeli');
        $q->phone_pembeli = $request->get('phone_pembeli');
        $q->alamat_pembeli = $request->get('alamat_pembeli');
        $q->save();

        return response()->json('data successfuly updated');
    }
    public function addData(Request $request)
    {
        $q = new Penjualan;
        $q->barang_id = $request->get('barang_id');
        $q->tanggal = $request->get('tanggal');
        $q->jumlah = $request->get('jumlah');
        $q->harga_jual = $request->get('harga_jual');
        $q->payment = $request->get('payment');
        $q->nama_pembeli = $request->get('nama_pembeli');
        $q->phone_pembeli = $request->get('phone_pembeli');
        $q->alamat_pembeli = $request->get('alamat_pembeli');
        // dd($request);
        $q->save();
        
        return response()->json('data successfuly added');
    }

}
