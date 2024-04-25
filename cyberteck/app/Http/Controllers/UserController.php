<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(UserRequest $request){
        try {

            $validatedData = $request->validated();
            $validatedData['password'] = Hash::make($validatedData['password']);

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
            } else {
                $imageName = '';
            }

            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => $validatedData['password'],
                'image' => $imageName
            ]);

            $accessToken = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'access_token' => $accessToken,
                'user' => $user,
                'status' => true,
                'message' => 'User created successfully'
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // return response()->json($request,200);

        if (!auth()->attempt($loginData)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $accessToken = auth()->user()->createToken('authToken')->plainTextToken;

        return response()->json([
            'access_token' => $accessToken,
            'user' => auth()->user(),
            'status' => true,
            'message' => 'valid login'
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Successfully logged out', 'status' => true], 200);
    }


   public function edit($id, Request $request){
    try{
        $user = User::find($id);
        if(!$user){
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'User updated successfully', 'status' => true], 200);
    }
    catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], 500);
    }

   }
}
