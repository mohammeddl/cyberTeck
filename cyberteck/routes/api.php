<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\categoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);
Route::patch('/user/{id}', [UserController::class, 'edit']);

route::get('/categories', [categoryController::class, 'index']);

Route::post('/products', [ProductController::class, 'store']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::put('/products/{id}/', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
Route::get('/search', [ProductController::class, 'search']);
Route::get('/offer', [ProductController::class,'offer']);

Route::post('/checkout',[CartController::class, 'store']);
Route::get('/history/{id}', [CartController::class, 'show']);

Route::post('/reviews', [ReviewController::class, 'store']);
Route::get('/reviews/{id}', [ReviewController::class, 'show']);

Route::post('/blog', [BlogController::class, 'store']);
Route::get('/blogs', [BlogController::class, 'index']);
Route::put('/blog/{id}', [BlogController::class, 'edit']);
Route::delete('/blog/{id}', [BlogController::class, 'destroy']);












