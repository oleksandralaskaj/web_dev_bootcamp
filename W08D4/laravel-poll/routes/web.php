<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('polls.index');
});
Route::get('/home', function () {
    return view('polls.index');
});

