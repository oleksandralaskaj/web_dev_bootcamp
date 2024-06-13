<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;

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
    public function save(Request $r)
    {
        //get intial data as we don't affect all the fields
        $movie = Movie::findOrFail($r->input('id'));
        //change some fields acconding to new inputs
        $movie->name = $r->input('name');
        $movie->year = $r->input('year');
        $movie->rating = $r->input('rating');
        //store changes in DB
        $movie->save();
        //flash a session message
        session()->flash('success_message', 'Your movie has been successfully edited.');
        //redirect to list page
        return redirect()->route('movies.list');
    }
}
