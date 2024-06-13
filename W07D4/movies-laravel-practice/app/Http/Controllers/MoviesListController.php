<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use Illuminate\Validation\Rule;

class MoviesListController extends Controller
{
    public function index()
    {
        $movies_list = Movie::where('id', ">", 3000)
            ->where('votes_nr', ">", 20000)
            ->orderBy('rating', 'desc')
            ->limit(100)
            ->get();
        return view('movies-list', compact('movies_list'));
    }

    public function edit($id)
    {
        $movie = Movie::find($id);
        return view('edit', compact('movie'));
    }

    public function save(Request $r, $id = null)
    {
        //validation
        $r->validate([
            'name' => "required",
            'year' => "required",
            'rating' => "required"
        ]);
        //get intial data as we don't affect all the fields
        $movie = Movie::find($id);
        //change some fields acconding to new inputs
        $movie->name = $r->input('name');
        $movie->year = $r->input('year');
        $movie->rating = $r->input('rating');
        $movie->timestamps = false;
//        store changes in DB
        $movie->save();
//        //flash a session message
        session()->flash('success_message', 'Your movie has been successfully edited.');
//        redirect to list page
        return redirect()->route('movies.list');
    }
}
