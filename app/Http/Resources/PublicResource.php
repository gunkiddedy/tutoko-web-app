<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PublicResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'dfkecamatan_id' => $this->provinsi_id,
            'dfdesa_id' => $this->kabupaten_id,
            'product_owner' => $this->product_owner,
            'product_name' => $this->product_name,
            'product_address' => $this->product_address,
            'product_phone' => $this->product_phone,
            'product_email' => $this->product_email,
            'product_path' => $this->product_path
        ];
    }
}
