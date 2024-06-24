<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;


Route::get('/home', [\App\Http\Controllers\PollController::class, 'index'])->name('poll.index');

Route::get('/', [\App\Http\Controllers\PollController::class, 'index'])->name('poll.index');

Route::get('/poll/{id}',[\App\Http\Controllers\PollController::class, 'detail'])->name('poll.detail');

Route::post('/vote/store',[\App\Http\Controllers\PollController::class, 'voteStore'])->name('vote.store');



