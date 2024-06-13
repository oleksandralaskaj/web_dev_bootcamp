<?php

use Illuminate\Support\Facades\Route;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/', [App\Http\Controllers\AwardController::class, 'index']);

Route::get('/genres', [App\Http\Controllers\GenreController::class, 'index']);

Route::get('/movies/top-rated-movies', [App\Http\Controllers\MovieController::class, 'topRated']);

Route::get('/movies/movie-type', [App\Http\Controllers\MovieController::class, 'movieType']);

Route::get('/movies/shawshank-redemptions', [App\Http\Controllers\MovieController::class, 'shawshank']);

Route::get('/movies/search', [App\Http\Controllers\MovieController::class, 'search']);

Route::get('/genres/search-by-genre', [App\Http\Controllers\GenreController::class, 'genre']);

Route::get('/movies/{movie_id}/review', [App\Http\Controllers\ReviewController::class, 'show']);

Route::post('/movies/{movie_id}/review', [App\Http\Controllers\ReviewController::class, 'store'])->name('movie.review');

Route::get('/movies/movie-requests', [App\Http\Controllers\MovieRequestController::class, 'index'])->name('movie-requests.index');

Route::get('/movies/movie-requests/create', [App\Http\Controllers\MovieRequestController::class, 'create']);

Route::post('/movies/movie-requests/store', [App\Http\Controllers\MovieRequestController::class, 'store'])->name('movie-requests.store');

