<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
       try{
            $products = Product::all();
            return response()->json(['products' => $products], 200);
        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
       }
    }

    public function store(ProductRequest $request)
    {
        try{
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
            } else {
                $imageName = '';
            }
            $product = Product::create($request->all());
            return response()->json($product, 201);

        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }



    public function update(ProductRequest $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        if ($request->fails()) {
            return response()->json($request->errors(), 400);
        }

        $product->update($request->all());
        return response()->json($product, 200);
    }

    public function destroy($id)
    {
        try{
            $product = Product::find($id);

            if (!$product) {
                return response()->json(['message' => 'Product not found'], 404);
            }

            $product->delete();
            return response()->json(['message' => 'Product deleted'], 200);
        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

    
    }
}
