<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'dfkecamatan_id', 
        'dfdesa_id', 
        'product_owner', 
        'product_name', 
        'product_address', 
        'product_phone', 
        'product_email',
        'product_description',
        'product_path'
    ];

    //(one to many)
    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function scopeWithFilters($query)
    {
        return $query->when(count(request()->input('selectedKecamatan', [])), function ($query) {
            $query->whereIn('dfkecamatan_id', request()->input('selectedKecamatan'));
        })
        ->when(count(request()->input('selectedDesa', [])), function ($query) {
            $query->whereIn('dfdesa_id', request()->input('selectedDesa'));
        })
        ->when(request()->input('keywords'), function ($query) {
            $query->where('product_name', 'like', '%'.request()->input('keywords').'%');
        });
        // return $query->when(request()->input('selectedKecamatan', []), function ($query) {
        //     $query->whereIn('dfkecamatan_id', request()->input('selectedKecamatan'));
        // })
        // ->when(request()->input('selectedDesa', []), function ($query) {
        //     $query->whereIn('dfdesa_id', request()->input('selectedDesa'));
        // })
        // ->when(request()->input('keywords'), function ($query) {
        //     $query->where('product_name', 'like', '%'.request()->input('keywords').'%');
        // });
    }
}
