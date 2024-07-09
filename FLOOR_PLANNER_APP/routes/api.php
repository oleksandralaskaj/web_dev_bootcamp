<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

//no need for /api
Route::get('/', function (Request $request) {
    return 'hi this is admin';
});

Route::middleware('auth')->get('/user', function (Request $r) {
    return $r->user();
});
