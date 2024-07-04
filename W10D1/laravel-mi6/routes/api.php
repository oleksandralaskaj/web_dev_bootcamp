<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

//no need for /api
Route::middleware('auth')->get('/user', function (Request $r) {
    return $r->user();
});

// list of employees and their detail
Route::get('/people', [\App\Http\Controllers\Api\PersonController::class, 'index'])->name('api.people');

Route::get('/people/{person_id}', [\App\Http\Controllers\Api\PersonController::class, 'show'])->name('api.person');


//statuses possible
Route::get('/statuses', [\App\Http\Controllers\Api\StatusController::class, 'index'])->name('api.statuses');


//missions
Route::get('/missions', [\App\Http\Controllers\Api\MissionController::class, 'index'])->name('api.missions');

Route::get('/missions/{mission_id}', [\App\Http\Controllers\Api\MissionController::class, 'show'])->name('api.edit-mission');

Route::post('/missions/store/{mission_id}', [\App\Http\Controllers\Api\MissionController::class, 'store'])->name('api.store-mission');

