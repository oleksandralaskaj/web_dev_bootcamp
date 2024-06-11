<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function index()
    {
        $h1 = "hello, it's h1";
        return view('index', compact('h1'));
    }
}
