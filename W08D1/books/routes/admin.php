<?php
use Illuminate\Support\Facades\Route;

//we don't use whole url as "admin/" is prefixed
Route::get('/authors', [\App\Http\Controllers\Admin\AuthorController::class, 'index'])->name('authors');

Route::get('/authors/create', [\App\Http\Controllers\Admin\AuthorController::class, 'create'])->name('author.create');

Route::post('/authors/save', [\App\Http\Controllers\Admin\AuthorController::class, 'save'])->name('author.save');
