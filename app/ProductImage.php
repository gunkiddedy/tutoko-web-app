<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $fillable = ['product_owner', 'product_name', 'product_id', 'product_path'];

    // inverse from product
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
