<?php

use Illuminate\Support\Facades\Route;

//no need for /api

Route::get('/people-of-interest', [\App\Http\Controllers\Api\PersonController::class, 'index'])->name('api.people');

Route::get('/people/{person_id}', [\App\Http\Controllers\Api\PersonController::class, 'show'])->name('api.person');
