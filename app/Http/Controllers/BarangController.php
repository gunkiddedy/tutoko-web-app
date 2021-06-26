<?php

namespace App\Http\Controllers;
use App\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class BarangController extends Controller
{

    public function getDataBarang()
    {
        $q = DB::table("barangs")->orderBy('id', 'desc')->limit(1000)->get();
        return response()->json($q);
    }
    public function getDataNonMandiri()
    {
        $q = DB::table('barangs')->where('barang_tipe', '=', 'Supplier')->get();
        return response()->json($q);
    }
    public function getDataMandiri()
    {
        $q = DB::table('barangs')->where('barang_tipe', '=', 'Mandiri')->get();
        return response()->json($q);
    }
    public function getDataBarangById(Request $request, $id)
    {
        $q = Barang::find($id);
        return response()->json($q);
    }
    public function deleteFileStorage($id)
    {
        $q = Barang::find($id);
        Storage::disk('public')->delete($q['photo']);

        return response()->json('file on storage successfuly deleted');
    }
    public function updateDataBarangById(Request $request, $id)
    {
        $this->validate($request,[
            'barang_nama' => 'required',
            'barang_satuan'=> 'required',
            // 'barang_stok' => 'required',
            'barang_tipe' => 'required',
        ]);
        
        $q = Barang::find($id);
        
        if($request->hasFile('photo')) {
            $photo = $request->file('photo');
            
            // delete first the old image
            Storage::disk('public')->delete($q['photo']);

            //get filename with extension
            $filenamewithextension = $photo->getClientOriginalName();
            //get filename without extension
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
            //get file extension
            $extension = $photo->getClientOriginalExtension();
            //filename to store
            $filenametostore = $filename.'-'.rand(1000,9999).time().'.'.$extension;
            //Upload File
            $photo->storeAs('public/images', $filenametostore);
    
            $q->barang_nama = $request->get('barang_nama');
            $q->barang_satuan = $request->get('barang_satuan');
            $q->barang_stok = $request->get('barang_stok');
            $q->barang_tipe = $request->get('barang_tipe');
            $q->active = $request->get('active');
            $q->photo = 'images/'.$filenametostore;
            $q->save();
        }else{
            $q->barang_nama = $request->get('barang_nama');
            $q->barang_satuan = $request->get('barang_satuan');
            $q->barang_stok = $request->get('barang_stok');
            $q->barang_tipe = $request->get('barang_tipe');
            $q->active = $request->get('active');
            $q->save();
        }
        return response()->json('data successfuly updated');
    }
    
    public function addDataBarang(Request $request)
    {
        $request->validate([
            'barang_nama' => 'required',
            'barang_satuan'=> 'required',
            // 'barang_stok' => 'required',
            'barang_tipe' => 'required',
        ]); 

        DB::transaction(function () use ($request) {
            $barang_nama = $request->barang_nama;
            $barang_satuan = $request->barang_satuan;
            $barang_stok = $request->barang_stok;
            $barang_tipe = $request->barang_tipe;
            $photo = $request->photo;
            $random = rand(100, 9999);
            
            if($request->hasFile('photo')) {                
                //get filename with extension
                $filenamewithextension = $photo->getClientOriginalName();
                //get filename without extension
                $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
                //get file extension
                $extension = $photo->getClientOriginalExtension();
                //filename to store
                $filenametostore = $filename.'-'.$random.'.'.$extension;
                //Upload File
                $photo->storeAs('public/images', $filenametostore);
        
                // $imagePath = public_path('storage/images/'.$filenametostore);
                $product = Barang::create([
                    'barang_nama' => $barang_nama,
                    'barang_satuan'=> $barang_satuan,
                    // 'barang_stok' => $barang_stok,
                    'barang_tipe' => $barang_tipe,
                    'photo' => 'images/'.$filenametostore
                ]);
            }
        });

        return response()->json('data successfuly added');
    }

}
