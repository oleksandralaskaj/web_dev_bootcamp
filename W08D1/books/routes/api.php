<?php

use Illuminate\Support\Facades\Route;

Route::get('/books/latest', [\App\Http\Controllers\Api\MainController::class, 'latest']);
