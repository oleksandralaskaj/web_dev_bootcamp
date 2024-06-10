<?php

use Illuminate\Support\Facades\Route;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/', [App\Http\Controllers\AwardController::class, 'index']);

Route::get('/genres', [App\Http\Controllers\GenreController::class, 'index']);

Route::get('/movies/top-rated-movies', [App\Http\Controllers\MovieController::class, 'topRated']);

Route::get('/movies/shawshank-redemptions', [App\Http\Controllers\MovieController::class, 'shawshank']);

Route::get('/movies/search', [App\Http\Controllers\MovieController::class, 'search']);

Route::get('/genres/search-by-genre', [App\Http\Controllers\GenreController::class, 'genre']);

