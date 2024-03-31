<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(UserRequest $request)
    {
        try {

            $validatedData = $request->validated();
            $validatedData['password'] = Hash::make($validatedData['password']);

            $user = User::create($validatedData);
            $accessToken = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'access_token' => $accessToken,
                'user' => $user,
                'status' => true,
                'message' => 'user has created Successfully'
            ], 201);
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
}
