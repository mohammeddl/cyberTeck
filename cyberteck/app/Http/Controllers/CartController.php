<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;


class CartController extends Controller
{
    public function store(Request $request ){

        try {

            $request->validate([
                'user_id' => 'required',
                'product_id' => 'required',
                'quantity' => 'required',
            ]);
    
            $cart = Cart::create([
                'user_id' => $request->user_id,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
            ]);
    
            return response()->json(['message' => 'Order is successfully', 'cart' => $cart], 201);
        } catch (\Exception $e) {
            \Log::error('Error creating cart:', ['error' => $e->getMessage(), 'request' => $request->all()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
}}

