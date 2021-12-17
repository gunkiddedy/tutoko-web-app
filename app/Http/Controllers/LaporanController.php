<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class LaporanController extends Controller
{
    
    public function getGaji($date1, $date2) {
        $q = DB::table('detail_gaji')
                     ->select(DB::raw('detail_gaji.*, sum(total_gaji) as total, SUM(jumlah_jam) AS jumlah_hari_kerja'))
                     ->whereBetween('updated_at', [$date1, $date2])
                     ->groupBy('nama_pegawai')
                     ->get();
        return response()->json($q);
    }

    public function getAbsensi($date1, $date2) {
        $q = DB::table('detail_absensi')
           ->whereBetween('tanggal', [$date1, $date2])
           ->get();
        return response()->json($q);
    }

    public function getProduksi($date1, $date2) {
        $q = DB::table('detail_produksi')
           ->whereBetween('produksi_tanggal', [$date1, $date2])
           ->orderBy('pegawai_nama', 'desc')
           ->get();
        return response()->json($q);
    }

    public function getPenjualan($date1, $date2) {
        $q = DB::table('detail_penjualan')
           ->whereBetween('tanggal', [$date1, $date2])
           ->get();
        return response()->json($q);
    }

    public function getPembelian($date1, $date2) {
        $q = DB::table('detail_pembelian')
           ->whereBetween('tanggal', [$date1, $date2])
           ->get();
        return response()->json($q);
    }

}
