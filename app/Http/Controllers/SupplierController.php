<?php

namespace App\Http\Controllers;
use App\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class SupplierController extends Controller
{

    public function getDataSupplier()
    {
        $q = DB::table("suppliers")->orderBy('id', 'desc')->limit(100)->get();
        return response()->json($q);
    }
    public function getDataSupplierById(Request $request, $id)
    {
        $q = Supplier::find($id);
        return response()->json($q);
    }
    public function updateDataSupplierById(Request $request, $id)
    {
        $this->validate($request,[
            'supplier_nama' => 'required',
            'supplier_phone'=> 'required',
            'supplier_alamat' => 'required',
        ]);
        
        $q = Supplier::find($id);
        $q->supplier_nama = $request->get('supplier_nama');
        $q->supplier_phone = $request->get('supplier_phone');
        $q->supplier_alamat = $request->get('supplier_alamat');
        $q->save();

        return response()->json('data successfuly updated');
    }
    
    public function addDataSupplier(Request $request)
    {
        $request->validate([
            'supplier_nama' => 'required',
            'supplier_phone'=> 'required',
            'supplier_alamat' => 'required',
        ]); 

        DB::transaction(function () use ($request) {
            $supplier_nama = $request->supplier_nama;
            $supplier_phone = $request->supplier_phone;
            $supplier_alamat = $request->supplier_alamat;
            $product = Supplier::create([
                'supplier_nama' => $supplier_nama,
                'supplier_phone'=> $supplier_phone,
                'supplier_alamat' => $supplier_alamat
            ]);
        });

        return response()->json('data successfuly added');
    }

}
