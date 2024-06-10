<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;
use Illuminate\Support\Facades\DB;
use function Laravel\Prompts\select;

class GenreController extends Controller
{
    public function index()
    {
        $genres = DB::select('SELECT * FROM genres LIMIT 10');
        return view('genres.index', compact('genres'));
    }

    public function genre()
    {
        $selected_genre = $_GET['selected_genre'] ?? null;
        if (isset($selected_genre)) {
            $genre_id = DB::table('genres')
                ->select('id')
                ->where('slug', 'LIKE', $selected_genre)
                ->get()[0]->id;
            $films = DB::table('movies')
                ->select("name")
                ->join('genre_movie', 'movies.id', '=', 'genre_movie.movie_id')
                ->where('genre_movie.genre_id', '=', "$genre_id")
                ->orderBy('rating', 'desc')
                ->limit(100)
                ->get();
            return view('genres.search-by-genre', ['films' => $films, 'selected_genre' => $selected_genre]);

        }
        $genres = DB::select('SELECT * FROM genres');
        return view('genres.search-by-genre', compact('genres'));
    }
}
