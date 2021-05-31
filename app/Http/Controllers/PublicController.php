<?php

namespace App\Http\Controllers;

use App\Product;
use App\ProductImage;
use Illuminate\Http\Request;
use App\Http\Resources\PublicResource;

class PublicController extends Controller
{
    public function index()
    {
        $products = Product::withFilters()
            ->orderBy('id', 'desc')
            ->paginate(5);

        return PublicResource::collection($products);
    }

    public function totalProducts()
    {
        $products = Product::get();

        return response()->json($products);
    }

    public function productDetail($id)
    {
        $product = Product::find($id);
        $images = ProductImage::where('product_id', $id)->with('product')->get();
        
        return response()->json([
            'product' => $product,
            'images' => $images
        ]);
    }
}
