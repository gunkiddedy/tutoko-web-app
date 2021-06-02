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
        $q = DB::table("barangs")->get();
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
    // public function updateDataBarangById(Request $request, $id)
    // {
    //     $q = Barang::find($id);

    //     $this->validate($request,[
    //         'barang_nama' => 'required',
    //         'barang_satuan'=> 'required',
    //         'barang_stok' => 'required',
    //         'barang_tipe' => 'required',
    //         'photo' => 'required'
    //     ]);

    //     $currentPhoto = $q->photo;
    //     $photo = $request->photo;
    //     $random = rand(1,9);
    //     if($request->photo != $currentPhoto){
    //         //get filename with extension
    //         $filenamewithextension = $photo->getClientOriginalName();
    //         //get filename without extension
    //         $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
    //         //get file extension
    //         $extension = $photo->getClientOriginalExtension();
    //         //filename to store
    //         $filenametostore = $filename.'-'.$random.'.'.$extension;
    //         //Upload File
    //         $photo->storeAs('public/images', $filenametostore);
    //         // $imagePath = public_path('storage/images/'.$currentPhoto);
    //         // if(file_exists($imagePath)){
    //         //     @unlink($imagePath);
    //         // }
    //     }

    //     $q->update($request->all());

    //     return response()->json('data successfuly updated');
    // }
    public function updateDataBarangById(Request $request, $id)
    {
        $q = Barang::find($id);
        $random = rand(1,99);
        if($request->hasFile('photo')) 
        {
            dd($q);    
            //get filename with extension
            // $filenamewithextension = $photo->getClientOriginalName();
            // //get filename without extension
            // $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
            // //get file extension
            // $extension = $photo->getClientOriginalExtension();
            // //filename to store
            // $filenametostore = $filename.'-'.$random.'.'.$extension;
            // //Upload File
            // $photo->storeAs('public/images', $filenametostore);
    
            // $q->barang_nama = $request->get('barang_nama');
            // $q->barang_satuan = $request->get('barang_satuan');
            // $q->barang_stok = $request->get('barang_stok');
            // $q->barang_tipe = $request->get('barang_tipe');
            // $q->photo = 'images/'.$filenametostore;
            // $q->active = $request->get('active');
            // $q->save();
        }
        // else
        // {
        //     $q->barang_nama = $request->get('barang_nama');
        //     $q->barang_satuan = $request->get('barang_satuan');
        //     $q->barang_stok = $request->get('barang_stok');
        //     $q->barang_tipe = $request->get('barang_tipe');
        //     $q->active = $request->get('active');
        //     $q->save();
        // }
        
        // return response()->json('data successfuly updated');
    }
    public function addDataBarang(Request $request)
    {
        // $q = new Barang;
        // $q->barang_nama = $request->get('barang_nama');
        // $q->barang_satuan = $request->get('barang_satuan');
        // $q->barang_stok = $request->get('barang_stok');
        // $q->barang_tipe = $request->get('barang_tipe');        
        // $q->save();

        $request->validate([
            'barang_nama' => 'required',
            'barang_satuan'=> 'required',
            'barang_stok' => 'required',
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
                    'barang_stok' => $barang_stok,
                    'barang_tipe' => $barang_tipe,
                    'photo' => 'images/'.$filenametostore
                ]);
            }
        });

        return response()->json('data successfuly added');
    }

}
