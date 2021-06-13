<?php

namespace App\Http\Controllers;
use App\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class SupplierController extends Controller
{

    public function getData()
    {
        $q = DB::table("suppliers")->get();
        return response()->json($q);
    }
    public function getDataById($id)
    {
        $q = Supplier::find($id);
        return response()->json($q);
    }
    

}
