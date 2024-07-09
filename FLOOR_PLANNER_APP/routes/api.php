<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

//no need for /api
Route::get('/', function (Request $request) {
    return 'hi this is api being called';
});

Route::middleware('auth')->get('/user', function (Request $r) {
    return $r->user();
});
