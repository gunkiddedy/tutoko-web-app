<?php

namespace App\Http\Controllers;
use App\Absensi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AbsensiController extends Controller
{
    public function getDataAbsensi()
    {
        $q = DB::table("absensis")->orderBy('id', 'desc')->limit(100)->get();
        return response()->json($q);
    }
    public function getDetailGaji()
    {
        $q = DB::table("detail_gaji")->orderBy('id', 'desc')->limit(100)->get();
        return response()->json($q);
    }
    public function addDataAbsensi(Request $request)
    {
        $request->validate([
            'tanggal'=> 'required',
            'pegawai_jam' => 'required'
        ]); 

        DB::transaction(function () use ($request) {
            $tanggal = $request->tanggal;
            $pegawai_jam = $request->pegawai_jam;
            $explodeJamKerja = explode(',', $pegawai_jam);

            $dp = DB::table("pegawais")->where('active', 'Active')->orderBy('id', 'desc')->limit(100)->get();

            for($i=0; $i<count($dp); $i++){
                $product = Absensi::create([
                    'pegawai_id' => $dp[$i]->id,
                    'jam_kerja' => $explodeJamKerja[$i],
                    'tanggal' => $tanggal
                ]);
            }
        });

        return response()->json('data successfuly added');
    }

}
