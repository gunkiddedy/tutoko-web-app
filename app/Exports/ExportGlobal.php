<?php

namespace App\Exports;

use App\Ukm;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class ExportGlobal implements FromView, ShouldAutoSize, WithEvents
{
    private $tahun;

    public function __construct($tahun) 
    {
        $this->tahun = $tahun;
    }

    public function view(): View
    {
        // $umkm = DB::table('ukms')->where('dfkecamatan_id', '=', $this->kecamatan_id)->get();
        $global = DB::select("SELECT k.dfkecamatan_id id_kec, k.dfkecamatan_nama kecamatan,
            count(u.id) total_umkm,
            sum(if(u.kriteria='Usaha Mikro',1,0))u_mikro,
            sum(if(u.kriteria='Usaha Kecil',1,0))u_kecil,
            sum(if(u.kriteria='Usaha Menengah',1,0))u_menengah,
            sum(if(u.kriteria='Undefined',1,0))u_undef,
            sum(if(u.tk2_l='l',1,0))tkl,
            sum(if(u.tk2_p='p',1,0))tkp,
            sum(u.ms2)modal,
            SUM(u.omset2)omset
            from dfkecamatan k 
            left join ukms u on(u.dfkecamatan_id = k.dfkecamatan_id and u.tahun = $this->tahun) 
            group by kecamatan");

        $arrayUMKM = json_decode(json_encode($global), true);

        $total_umkm = 0;
        $total_mikro = 0;
        $total_kecil = 0;
        $total_menengah = 0;
        $total_tkl = 0;
        $total_tkp = 0;
        $total_modal = 0;
        $total_omset = 0;

        foreach($arrayUMKM as $v){
            $t1 = $v['total_umkm'];
            $t2 = $v['u_mikro'];
            $t3 = $v['u_kecil'];
            $t4 = $v['u_menengah'];
            $t5 = $v['tkl'];
            $t6 = $v['tkp'];
            $t7 = $v['modal'];
            $t8 = $v['omset'];

            $total_umkm += $t1;
            $total_mikro += $t2;
            $total_kecil += $t3;
            $total_menengah += $t4;
            $total_tkl += $t5;
            $total_tkp += $t6;
            $total_modal += $t7;
            $total_omset += $t8;
        }

        $totals = [
           'total_umkm' => $total_umkm,
           'total_mikro' => $total_mikro,
           'total_kecil' => $total_kecil,
           'total_menengah' => $total_menengah,
           'total_tkl' => $total_tkl,
           'total_tkp' => $total_tkp,
           'total_modal' => $total_modal,
           'total_omset' => $total_omset,
        ];
        
        if (empty($global)) 
            $msg = 0;
        else
            $msg = 1;

        return view('exports.umkm-global', [
            'umkms' => $global,
            'totals' => $totals,
            'msg' => $msg
        ]);
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function(AfterSheet $event) {
                $cellRange = 'A4:J4'; //header
                $event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setSize(12);
                $to = $event->sheet->getDelegate()->getHighestRowAndColumn();
                $event->sheet->setOrientation(\PhpOffice\PhpSpreadsheet\Worksheet\PageSetup::ORIENTATION_LANDSCAPE);
                $event->sheet->styleCells(
                    'A4:'.$to['column'].$to['row'],
                    [
                        'borders' => [
                            'allBorders' => [
                                'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                                'color' => ['argb' => '000'],
                            ]
                        ]
                    ]
                );
            },
        ];
    }
    
}
