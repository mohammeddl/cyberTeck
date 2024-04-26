<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Exception;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(){
        try{
            $blogs = Blog::all();
            return response()->json(['blogs' => $blogs], 201);
        }catch(Exception $e){
            return response()->json($e, 400);
        }
    }

    public function store(Request $request){
        try{
           $validatedData = $request->validate([
                'image' => 'required',
                'title' => 'required',
                'content' => 'required'
           ]);
           if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
        } else {
            $imageName = '';
        }
              $blog = Blog::create([
                'image' => $imageName,
                'title' => $validatedData['title'],
                'content' => $validatedData['content']
              ]);
                return response()->json($blog, 201);
        }catch(Exception $e){
            return response()->json($e, 400);
        }
    }

    public function edit($id, Request $request){
       try{
            $blog = Blog::find($id);
            if(!$blog){
                return response()->json(['message' => 'Blog not found'], 404);
            }
            $validatedData = $request->validate([
                'image' => 'required',
                'title' => 'required',
                'content' => 'required'
            ]);
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
            } else {
                $imageName = '';
            }
            $blog->image = $imageName;
            $blog->title = $validatedData['title'];
            $blog->content = $validatedData['content'];
            $blog->save();
            return response()->json($blog, 201);
         }catch(Exception $e){
            return response()->json($e, 400);
       }
    }

    public function destroy($id){
        try{
            $blog = Blog::find($id);
            if(!$blog){
                return response()->json(['message' => 'Blog not found'], 404);
            }
            $blog->delete();
            return response()->json(['message' => 'Blog deleted successfully'], 201);
        }catch(Exception $e){
            return response()->json($e, 400);
        }
    }

    public function search(Request $request){
        try{
            if(!$request->title){
                return response()->json(['message' => 'Please enter a title'], 402);
            }
            $title = $request->title;
            $blogs = Blog::where('title', 'like', '%'.$title.'%')->get();
            return response()->json(['blogs' => $blogs], 201);
        }catch(Exception $e){
            return response()->json($e, 400);
        }
    }
}
