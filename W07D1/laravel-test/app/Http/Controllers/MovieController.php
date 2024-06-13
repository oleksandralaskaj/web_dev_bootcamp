<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MovieController extends Controller
{
    public function topRated()
    {
        $films = DB::select('SELECT * FROM movies ORDER BY rating DESC LIMIT 50');
        return view('top-rated.index-movies', compact('films'));
    }

    public function shawshank()
    {
        $film = DB::selectOne('SELECT * FROM movies WHERE name LIKE "%The Shawshank Redemption%"');

        return view('movies.shawshank-redemption', compact('film'));
    }

    public function search(Request $request)
    {
        if (isset($request->search)) {
            $reference = $request->search;
            $films = DB::table('movies')
                ->where('name', 'LIKE', $reference . '%')
                ->limit(10)
                ->get();
            return view('movies.search', compact('films'));
        }
        return view('movies.search');
    }


    public function movieType()
    {
        $movie = Movie::find(468569);
        $movie_type= $movie->movieType->name;
        $movie_name= $movie->name;
        return view('movies.movie-type', compact('movie_name', 'movie_type'));
    }
}
