<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function testCode(Request $request)
    {
        $user = User::findOrFail(2); 
       dd($user->orders());
    }
}
