<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MoviesListController extends Controller
{
    public function index()
    {
        return view('movies-list');
    }
}
