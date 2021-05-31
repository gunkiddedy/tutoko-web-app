<?php

namespace App\Exports;

use App\Ukm;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class DesaExport implements FromView, WithEvents, ShouldAutoSize
{
    private $id;

    public function __construct($id) 
    {
        $this->id = $id;
    }
    
    public function view(): View
    {
        $umkm = Ukm::where('dfdesa_id', $this->id)->get();
        $total_tk1_l = 0;
        $total_tk1_p = 0;
        $total_tk2_l = 0;
        $total_tk2_p = 0;
        // $total_kp1 = 0;
        // $total_kp2 = 0;
        $total_omset1 = 0;
        $total_omset2 = 0;
        $total_ms1 = 0;
        $total_ms2 = 0;
        $total_bp1 = 0;
        $total_bp2 = 0;
        $total_pk1 = 0;
        $total_pk2 = 0;
        $total_pp1 = 0;
        $total_pp2 = 0;
        $total_pb1 = 0;
        $total_pb2 = 0;

        foreach($umkm as $v){
            $tk1_l = $v['tk1_l'];
            $tk1_p = $v['tk1_p'];
            $tk2_l = $v['tk2_l'];
            $tk2_p = $v['tk2_p'];
            // $kp1 = $v['kp1'];
            // $kp2 = $v['kp2'];
            $omset1 = $v['omset1'];
            $omset2 = $v['omset2'];
            $ms1 = $v['ms1'];
            $ms2 = $v['ms2'];
            $bp1 = $v['bp1'];
            $bp2 = $v['bp2'];
            $pk1 = $v['pk1'];
            $pk2 = $v['pk2'];
            $pp1 = $v['pp1'];
            $pp2 = $v['pp2'];
            $pb1 = $v['pb1'];
            $pb2 = $v['pb2'];

            $total_tk1_l += $tk1_l;
            $total_tk1_p += $tk1_p;
            $total_tk2_l += $tk2_l;
            $total_tk2_p += $tk2_p;
            // $total_kp1 += $kp1;
            // $total_kp2 += $kp2;
            $total_omset1 += $omset1;
            $total_omset2 += $omset2;
            $total_ms1 += $ms1;
            $total_ms2 += $ms2;
            $total_bp1 += $bp1;
            $total_bp2 += $bp2;
            $total_pk1 += $pk1;
            $total_pk2 += $pk2;
            $total_pp1 += $pp1;
            $total_pp2 += $pp2;
            $total_pb1 += $pb1;
            $total_pb2 += $pb2;
        }

        $totals = [
            'total_tk1_l' => $total_tk1_l,
            'total_tk1_p' => $total_tk1_p,
            'total_tk2_l' => $total_tk2_l,
            'total_tk2_p' => $total_tk2_p,
            'total_omset1' => $total_omset1,
            'total_omset2' => $total_omset2,
            'total_ms1' => $total_ms1,
            'total_ms2' => $total_ms2,
            'total_bp1' => $total_bp1,
            'total_bp2' => $total_bp2,
            'total_pk1' => $total_pk1,
            'total_pk2' => $total_pk2,
            'total_pp1' => $total_pp1,
            'total_pp2' => $total_pp2,
            'total_pb1' => $total_pb1,
            'total_pb2' => $total_pb2,
        ];

        return view('exports.umkm-desa', [
            'umkms' => $umkm,
            'totals' => $totals
        ]);
    }

    public function registerEvents(): array
    {
        return [
            // BeforeExport::class  => function(BeforeExport $event) {
            //     $event->writer->setCreator('Patrick');
            // },
            AfterSheet::class => function(AfterSheet $event) {
                $cellRange = 'A4:AS4'; //header
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

    public function total(Request $request, $id)
    {
        $ukm = Ukm::where('dfdesa_id', $id)->get();
        $total_tk1_l = 0;
        $total_tk1_p = 0;
        $total_tk2_l = 0;
        $total_tk2_p = 0;
        $total_omset1 = 0;
        $total_omset2 = 0;
        $total_ms1 = 0;
        $total_ms2 = 0;
        $total_bp1 = 0;
        $total_bp2 = 0;
        $total_pk1 = 0;
        $total_pk2 = 0;
        $total_pp1 = 0;
        $total_pp2 = 0;
        $total_pb1 = 0;
        $total_pb2 = 0;

        foreach($ukm as $v){
            $tk1_l = $v['tk1_l'];
            $tk1_p = $v['tk1_p'];
            $tk2_l = $v['tk2_l'];
            $tk2_p = $v['tk2_p'];
            $omset1 = $v['omset1'];
            $omset2 = $v['omset2'];
            $ms1 = $v['ms1'];
            $ms2 = $v['ms2'];
            $bp1 = $v['bp1'];
            $bp2 = $v['bp2'];
            $pk1 = $v['pk1'];
            $pk2 = $v['pk2'];
            $pp1 = $v['pp1'];
            $pp2 = $v['pp2'];
            $pb1 = $v['pb1'];
            $pb2 = $v['pb2'];

            $total_tk1_l += $tk1_l;
            $total_tk1_p += $tk1_p;
            $total_tk2_l += $tk2_l;
            $total_tk2_p += $tk2_p;
            $total_omset1 += $omset1;
            $total_omset2 += $omset2;
            $total_ms1 += $ms1;
            $total_ms2 += $ms2;
            $total_bp1 += $bp1;
            $total_bp2 += $bp2;
            $total_pk1 += $pk1;
            $total_pk2 += $pk2;
            $total_pp1 += $pp1;
            $total_pp2 += $pp2;
            $total_pb1 += $pb1;
            $total_pb2 += $pb2;
        }
        
        return response()->json([
            'total_tk1_l' => $total_tk1_l,
            'total_tk1_p' => $total_tk1_p,
            'total_tk2_l' => $total_tk2_l,
            'total_tk2_p' => $total_tk2_p,
            'total_omset1' => $total_omset1,
            'total_omset2' => $total_omset2,
            'total_ms1' => $total_ms1,
            'total_ms2' => $total_ms2,
            'total_bp1' => $total_bp1,
            'total_bp2' => $total_bp2,
            'total_pk1' => $total_pk1,
            'total_pk2' => $total_pk2,
            'total_pp1' => $total_pp1,
            'total_pp2' => $total_pp2,
            'total_pb1' => $total_pb1,
            'total_pb2' => $total_pb2,
        ]);
    }
}
