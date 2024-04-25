<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'user_id' => 'required',
                'product_id' => 'required',
                'review' => 'required',
            ]);

            $review = Review::create([
                'user_id' => $request->user_id,
                'product_id' => $request->product_id,
                'review' => $request->review,
            ]);

            return response()->json(['message' => 'Review is successfully', 'review' => $review], 201);
        } catch (\Exception $e) {
            \Log::error('Error creating review:', ['error' => $e->getMessage(), 'request' => $request->all()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
