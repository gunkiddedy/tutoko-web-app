<?php

namespace App\Http\Controllers;
use App\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BarangController extends Controller
{

    public function getDataBarang()
    {
        $q = DB::table("barangs")->get();
        return response()->json($q);
    }

}
