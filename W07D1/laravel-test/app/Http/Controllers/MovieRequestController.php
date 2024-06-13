<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\MovieRequest;
use App\Models\MovieType;
use Illuminate\Validation\Rule;

class MovieRequestController extends Controller
{
    public function index()
    {
        $movie_requests = MovieRequest::with("movieType")->get();
        return view('movie-requests.index', compact('movie_requests'));
    }

    public function create(Request $request, $id = null)
    {
        $movie_types = MovieType::get();
        if ($id) {
            $movie_request = MovieRequest::findOrFail($id);
        } else {
            $movie_request = new MovieRequest;
        }
        return view('movie-requests.create', compact('movie_types', 'movie_request'));
    }

    public function store(Request $request, $id = null)
    {
        $movie_type_ids = MovieType::get()->pluck('id');
        //validation
        $request->validate([
            'full_name' => "required",
            'email' => "required",
            'name' => "required",
            'year' => "required",
            'movie_type_id' => ["required", Rule::in($movie_type_ids)]
        ]);

        //create a new request object
        if ($id) {
            $movie_request = MovieRequest::findOrFail($id);
        } else {
            $movie_request = new MovieRequest;
        }

        //giv it a data
        $movie_request->full_name = $request->input('full_name');
        $movie_request->email = $request->input('email');
        $movie_request->name = $request->input('name');
        $movie_request->movie_id = $request->input('movie_id');
        $movie_request->year = $request->input('year');
        $movie_request->movie_type_id = $request->input('movie_type_id');
        //store it in DB
        $movie_request->save();
        //flash a session message
        session()->flash('success_message', 'Your movie request has been submited.');
        //redirect to list page
        return redirect()->route('movie-requests.index');
    }
}
