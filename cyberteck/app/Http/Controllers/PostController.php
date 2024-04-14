<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        $postes = Post::all();
        return response()->json($postes);
    }

    public function store(PostRequest $request){
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
        } else {
            $imageName = '';
        }

        $post = Post::create($request->all());
        return response()->json($post, 201);
    }

    public function update(PostRequest $request, $id){
$post= Post::find($id);
if(!$post){
    return response()->json(['message' => 'Post not found'], 404);
}
$post->update($request->all());
return response()->json($post,200);

    }
}
