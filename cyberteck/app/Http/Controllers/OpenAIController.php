<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OpenAIController extends Controller
{
    public function getCompletions(Request $request)
    {
        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer sk-proj-sgFA2SbotxLq3LN6ZNn9T3BlbkFJq0DBPDZKP215lkaBMgwo',
            ])->post('https://api.openai.com/v1/engines/davinci/completions', [
                'prompt' => $request->input('prompt'),
                'max_tokens' => $request->input('max_tokens', 150),
            ]);

            return $response->json();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
