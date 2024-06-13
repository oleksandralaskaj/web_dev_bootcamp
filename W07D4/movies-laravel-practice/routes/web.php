<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MoviesListController;

Route::get('/', [MoviesListController::class, 'index'])->name('movies.list');
Route::get('/edit/{id}', [MoviesListController::class, 'edit'])->name('movie.edit');
Route::put('/save', [MoviesListController::class, 'save'])->name('movie.save');
