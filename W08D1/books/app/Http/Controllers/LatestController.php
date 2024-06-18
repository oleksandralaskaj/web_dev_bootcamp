<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LatestController extends Controller
{
    public function index()
    {
      return view('books.latest-books');
    }
}
