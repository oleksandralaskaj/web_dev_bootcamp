<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\IndexController::class, 'index'])->name('home');

Route::get('/about-us', [\App\Http\Controllers\AboutController::class, 'about'])->name('about');
Route::get('/latest', [\App\Http\Controllers\LatestController::class, 'index'])->name('latest');

