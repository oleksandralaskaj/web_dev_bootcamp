<?php

use Illuminate\Support\Facades\Route;

Route::view('/{path?}', 'main')->where('path', '.*'); // if main.blade.php renders the React app


