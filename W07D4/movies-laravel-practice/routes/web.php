<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MoviesListController;

Route::get('/', [MoviesListController::class, 'index'])->name('movies.list');
Route::get('/edit/{id?}', [MoviesListController::class, 'edit'])->name('movie.edit');
Route::any('/save/{id?}', [MoviesListController::class, 'save'])->name('movie.save');
