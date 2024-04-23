<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
       try{
            $products = Product::with('categories')->get();
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
            $product = Product::create([
                'name' => $request->name,
                'price' => $request->price,
                'image' => $imageName,
                'description' => $request->description,
                'category_id' => $request->category_id,
                'stock_quantity'=>$request->stock_quantity
            ]);
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


    public function update(Request $request ,$id)
    {
        try {
            $product = Product::findOrFail($id);

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);

                if ($product->image && file_exists(public_path('images/' . $product->image))) {
                    unlink(public_path('images/' . $product->image));
                }
            } else {
                $imageName = $product->image;
            }

            $product->update([
                'name' => $request->name,
                'price' => $request->price,
                'description' => $request->description,
                'category_id' => $request->category_id,
                'stock_quantity' => $request->stock_quantity,
                'image' => $imageName
            ]);


            return response()->json([
                'product' => $product,
                'message' => 'product updated successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
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

    public function search(Request $request)
    {
        try{
            $category = $request->category_id;
            $name = $request->name;
            if($category){
                $products = Product::with('categories')->where('category_id', $category)->get();

                return response()->json(['products' => $products], 200);
            }

            if($name){
                $products = Product::with('categories')->where('name', 'like', '%' . $name . '%')->get();

                return response()->json(['products' => $products], 200);
            }
            
        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
}
