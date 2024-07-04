<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\PersonController;
use App\Http\Controllers\Api\StatusController;
use App\Http\Controllers\Api\MissionController;

//no need for /api
Route::middleware('auth')->get('/user', function (Request $r) {
    return $r->user();
});

// list of employees and their detail
Route::get('/people', [PersonController::class, 'index'])->name('api.people');

Route::get('/people/{person_id}', [PersonController::class, 'show'])->name('api.person');


//statuses possible
Route::get('/statuses', [StatusController::class, 'index'])->name('api.statuses');


//missions
Route::get('/missions', [MissionController::class, 'index'])->name('api.missions');

Route::get('/missions/{mission_id}', [MissionController::class, 'show'])->name('api.edit-mission');

Route::post('/missions/store/{mission_id}', [MissionController::class, 'store'])->name('api.store-mission');

Route::post('/missions/assign-person', [MissionController::class, 'assignPerson'])->name('api.assign-person');

Route::post('/missions/unassign-person', [MissionController::class, 'unAssignPerson'])->name('api.unassign-person');

Route::post('/missions/send-details', [MissionController::class, 'sendDetailsByMail'])->name('api.send-details');



