<?php

use Illuminate\Support\Facades\Route;

Route::get('/books/latest', [\App\Http\Controllers\Api\MainController::class, 'latest']);
Route::get('/books/crime', [\App\Http\Controllers\Api\MainController::class, 'crime']);
Route::get('/books/search', [\App\Http\Controllers\Api\MainController::class, 'search'])->name('search');
