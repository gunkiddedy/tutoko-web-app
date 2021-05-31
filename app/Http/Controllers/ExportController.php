<?php

namespace App\Http\Controllers;

use App\Exports\ExportKK;
use App\Exports\ExportKDK;
use App\Exports\ExportUPD;
use App\Exports\ExportUPK;
use App\Exports\DesaExport;
use Illuminate\Http\Request;
use App\Exports\ExportGlobal;
use App\Exports\ExportKecamatan;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    // per desa by desa role --clear
    public function exportDesa(Request $request, $id)
    {
        return Excel::download(new DesaExport($id), 'umkm-desa-'.$id.'.xlsx');
    }
     
    // kriteria per desa  --clear
    public function exportKDK(Request $request, $kecamatan_id, $desa_id, $kriteria)
    {
        return Excel::download(new ExportKDK($kecamatan_id, $desa_id, $kriteria), 'umkm-'.$kecamatan_id.'.xlsx');
    }
    
    // kriteria per kecamatan --clear
    public function exportKK(Request $request, $kecamatan_id, $kriteria)
    {
        return Excel::download(new ExportKK($kecamatan_id, $kriteria), 'umkm-'.$kriteria.'.xlsx');
    }

    // per kecamatan --clear
    public function exportKecamatan(Request $request, $kecamatan_id)
    {
        return Excel::download(new ExportKecamatan($kecamatan_id), 'umkm-'.$kecamatan_id.'.xlsx');
    }

    // usaha pokok per desa --clear
    public function exportUPD(Request $request, $kecamatan_id, $desa_id, $usaha)
    {
        return Excel::download(new ExportUPD($kecamatan_id, $desa_id, $usaha), 'umkm-'.$usaha.'.xlsx');
    }

    // usaha pokok per kecamatan --clear
    public function exportUPK(Request $request, $kecamatan_id, $usaha)
    {
        return Excel::download(new ExportUPK($kecamatan_id, $usaha), 'umkm-'.$usaha.'.xlsx');
    }

    // global per tahun --clear
    public function exportGlobal(Request $request, $tahun)
    {
        return Excel::download(new ExportGlobal($tahun), 'umkm-'.$tahun.'.xlsx');
    }
}
