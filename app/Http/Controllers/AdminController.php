<?php

namespace App\Http\Controllers;

use App\Product;
use App\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function uploadProduct(Request $request)
    {
        $request->validate([
            'dfkecamatan_id' => 'required',
            'dfdesa_id' => 'required',
            'product_owner' => 'required',
            'product_name'=> 'required',
            'product_address' => 'required',
            'product_phone' => 'required',
            'images' => 'required'
        ]); 

        DB::transaction(function () use ($request) {
            $dfkecamatan_id = $request->dfkecamatan_id;
            $dfdesa_id = $request->dfdesa_id;
            $product_owner = $request->product_owner;
            $product_name = $request->product_name;
            $product_address = $request->product_address;
            $product_phone = $request->product_phone;
            $product_email = $request->product_email;
            $product_description = $request->product_description;
            // $product_path = $request->product_path;
            $images = $request->images;
            $rand = rand(10000, 999999);
            
            if($request->hasFile('images')) {
                foreach($images as $image_product)
                //get filename with extension
                $filenamewithextension = $image_product->getClientOriginalName();

                //get filename without extension
                $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
        
                //get file extension
                $extension = $image_product->getClientOriginalExtension();
                //filename to store
                
                $filenametostore = $filename.'-'.$dfkecamatan_id.'-'.$product_owner.'-'.$rand.'.'.$extension;

                $product = Product::create([
                    'dfkecamatan_id' => $dfkecamatan_id,
                    'dfdesa_id' => $dfdesa_id,
                    'product_owner' => $product_owner,
                    'product_name' => $product_name,
                    'product_address' => $product_address,
                    'product_phone' => $product_phone,
                    'product_email' => $product_email,
                    'product_description' => $product_description,
                    'product_path' => 'images/'.$filenametostore
                ]);

                // store each image
                foreach($images as $image) {
                    //get filename with extension
                    $filenamewithextension = $image->getClientOriginalName();
            
                    //get filename without extension
                    $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
            
                    //get file extension
                    $extension = $image->getClientOriginalExtension();
            
                    //filename to store
                    $filenametostore = $filename.'-'.$dfkecamatan_id.'-'.$product_owner.'-'.$rand.'.'.$extension;
            
                    //Upload File
                    $image->storeAs('public/images', $filenametostore);
            
                    $imagePath = public_path('storage/images/'.$filenametostore);

                    ProductImage::create([
                        'product_owner' => $product->product_owner,
                        'product_name' => $product->product_name,
                        'product_id' => $product->id,
                        'product_path' => 'images/'.$filenametostore,
                    ]);
                }
            }
        });
        return response()->json(200);
    }
}
