<?php

namespace App\Http\Controllers;
use App\Pegawai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PegawaiController extends Controller
{

    public function getDataPegawai()
    {
        $q = DB::table("pegawais")->orderBy('id', 'desc')->limit(100)->get();
        return response()->json($q);
    }
    public function getDataPegawaiById(Request $request, $id)
    {
        $q = Pegawai::find($id);
        return response()->json($q);
    }
    public function updateDataPegawaiById(Request $request, $id)
    {
        $this->validate($request,[
            'pegawai_nama' => 'required',
            'pegawai_phone'=> 'required',
            'pegawai_alamat' => 'required',
            'active' => 'required',
        ]);
        
        $q = Pegawai::find($id);
        $q->pegawai_nama = $request->get('pegawai_nama');
        $q->pegawai_phone = $request->get('pegawai_phone');
        $q->pegawai_alamat = $request->get('pegawai_alamat');
        $q->active = $request->get('active');
        $q->save();

        return response()->json('data successfuly updated');
    }
    
    public function addDataPegawai(Request $request)
    {
        $request->validate([
            'pegawai_nama' => 'required',
            'pegawai_phone'=> 'required',
            'pegawai_alamat' => 'required',
        ]); 

        DB::transaction(function () use ($request) {
            $pegawai_nama = $request->pegawai_nama;
            $pegawai_phone = $request->pegawai_phone;
            $pegawai_alamat = $request->pegawai_alamat;
            $product = Pegawai::create([
                'pegawai_nama' => $pegawai_nama,
                'pegawai_phone'=> $pegawai_phone,
                'pegawai_alamat' => $pegawai_alamat
            ]);
        });

        return response()->json('data successfuly added');
    }

}
