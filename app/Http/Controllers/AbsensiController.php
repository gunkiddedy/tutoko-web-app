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
    public function getDetailAbsensi()
    {
        $q = DB::table("detail_absensi")->orderBy('id', 'desc')->limit(100)->get();
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

    public function getGaji($date1, $date2)
    {
        /**
         * SELECT d.*, sum(total_gaji) AS total FROM detail_gaji d WHERE updated_at BETWEEN '2021-06-01' AND '2021-11-28' GROUP BY nama_pegawai
         */
        // $q = DB::table('detail_gaji')
        //    ->whereBetween('updated_at', [$date1, $date2])
        //    ->orderBy('nama_pegawai', 'desc')
        //    ->get();
        $q = DB::table('detail_gaji')
                     ->select(DB::raw('detail_gaji.*, sum(total_gaji) as total, SUM(jumlah_jam) AS jumlah_hari_kerja'))
                     ->whereBetween('updated_at', [$date1, $date2])
                     ->groupBy('nama_pegawai')
                     ->get();
        return response()->json($q);
    }

}
