<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'category',
        'price',
        'stock_quantity',
        'image',
        'offer',
    ];

    public function Cart()
    {
        return $this->hasMany(Cart::class);
    }
}
