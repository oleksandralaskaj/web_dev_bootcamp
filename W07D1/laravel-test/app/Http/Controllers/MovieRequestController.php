<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\MovieRequest;

class MovieRequestController extends Controller
{
    public function index()
    {
        $movie_request= MovieRequest::with("movieType")->get();
        return view('movie-requests.index', compact('movie_request'));
    }
}
