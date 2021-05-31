<?php

namespace App\Http\Controllers;

use App\Ukm;
use Illuminate\Http\Request;

class UmkmController extends Controller
{
    public function addData(Request $request)
    {
        $umkm = new Ukm;
        $umkm->nama_pemilik = $request->get('nama_pemilik');
        $umkm->nama_usaha = $request->get('nama_usaha');
        $umkm->kelembagaan = $request->get('kelembagaan');
        $umkm->nik = $request->get('nik');
        $umkm->jenis_kelamin = $request->get('jenis_kelamin');
        $umkm->disabilitas = $request->get('disabilitas');
        $umkm->siu = $request->get('siu');
        $umkm->npwp = $request->get('npwp');
        $umkm->tmu = $request->get('tmu');
        $umkm->alamat = $request->get('alamat');
        $umkm->desa = $request->get('desa');
        $umkm->tlp = $request->get('tlp');
        $umkm->email = $request->get('email');
        $umkm->up1 = $request->get('up1');
        $umkm->up2 = $request->get('up2');
        $umkm->up3 = $request->get('up3');
        $umkm->up4 = $request->get('up4');
        $umkm->up5 = $request->get('up5');
        $umkm->up6 = $request->get('up6');
        $umkm->up7 = $request->get('up7');
        $umkm->up8 = $request->get('up8');
        $umkm->up9 = $request->get('up9');
        $umkm->up10 = $request->get('up10');
        $umkm->up11 = $request->get('up11');
        $umkm->bahan_baku = $request->get('bahan_baku');
        $umkm->tk1_l = $request->get('tk1_l');
        $umkm->tk1_p = $request->get('tk1_p');
        $umkm->tk2_l = $request->get('tk2_l');
        $umkm->tk2_p = $request->get('tk2_p');
        $umkm->kp1 = $request->get('kp1');
        $umkm->kp2 = $request->get('kp2');
        $umkm->omset1 = $request->get('omset1');
        $umkm->omset2 = $request->get('omset2');
        $umkm->ms1 = $request->get('ms1');
        $umkm->ms2 = $request->get('ms2');
        $umkm->bp1 = $request->get('bp1');
        $umkm->bp2 = $request->get('bp2');
        $umkm->pk1 = $request->get('pk1');
        $umkm->pk2 = $request->get('pk2');
        $umkm->pp1 = $request->get('pp1');
        $umkm->pp2 = $request->get('pp2');
        $umkm->pb1 = $request->get('pb1');
        $umkm->pb2 = $request->get('pb2');
        $umkm->input_by = $request->get('input_by');
        $umkm->tahun = date('Y');
        $umkm->dfdesa_id = $request->get('dfdesa_id');
        $umkm->dfkecamatan_id = $request->get('dfkecamatan_id');

        $omset = $request->get('omset2');
        $asset = $request->get('ms2') + $request->get('bp2') + $request->get('pk2') + $request->get('pp2') + $request->get('pb2');
        
        if($omset > 2500000000 && $omset <= 50000000000 && $asset > 500000000 && $asset <= 10000000000)
            $kriteria = 'Usaha Menengah';
        elseif($omset > 300000000 && $omset <= 2500000000 && $asset > 50000000 && $asset <= 500000000)
            $kriteria = 'Usaha Kecil';
        elseif($omset <= 300000000 && $asset <= 50000000)
            $kriteria = 'Usaha Mikro';
        else
            $kriteria = 'Undefined';

        $umkm->kriteria = $kriteria;
        
        $umkm->save();
        
        return response()->json('data successfuly added');
    }
}
