<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\IndexController::class, 'index'])->name('home');

Route::get('/about-us', [\App\Http\Controllers\AboutController::class, 'about'])->name('about');
Route::get('/latest', [\App\Http\Controllers\LatestController::class, 'index'])->name('latest');

Route::get('/book/{id}', [\App\Http\Controllers\BookController::class, 'show'])->name('detail');

Route::post('/book/{id}/reviews', [\App\Http\Controllers\BookController::class, 'storeReview'])->name('review')->middleware('auth');

Route::get('/bookshop/{id}', [\App\Http\Controllers\BookshopController::class, 'show'])->name('bookshop');

Route::get('/authors/search', [\App\Http\Controllers\AuthorController::class, 'search'])->name('authors.search');

Route::get('/authors/{id}', [\App\Http\Controllers\AuthorController::class, 'detail'])->name('authors.detail');



Route::group(['middleware' => 'can:admin'], function() {
    //we don't use whole url as "admin/" is prefixed
    Route::get('/authors', [App\Http\Controllers\Admin\AuthorController::class, 'index'])->name('authors.index');

    Route::get('/authors/create', [App\Http\Controllers\Admin\AuthorController::class, 'create'])->name('authors.create');

    Route::post('/authors/store', [App\Http\Controllers\Admin\AuthorController::class, 'store'])->name('authors.store');

    Route::get('/books', [App\Http\Controllers\Admin\BookController::class, 'index'])->name('books.index');

    Route::get('/books/create', [App\Http\Controllers\Admin\BookController::class, 'create'])->name('books.create');

    Route::get('/books/edit/{id}', [App\Http\Controllers\Admin\BookController::class, 'create'])->name('books.edit');

    Route::post('/books/store', [App\Http\Controllers\Admin\BookController::class, 'store'])->name('books.store');

    Route::put('/books/store/{id}', [App\Http\Controllers\Admin\BookController::class, 'store'])->name('books.update');

    Route::get('/books/crime', [\App\Http\Controllers\CrimeController::class, 'index'])->name('books.crime');

    Route::get('/admin/users', [\App\Http\Controllers\Admin\UserController::class, 'index'])->name('users')->middleware('auth');

    Route::delete('books/{id}/reviews/{review_id}}', [\App\Http\Controllers\Admin\BookController::class, 'deleteReview'])->name('review.delete');
});

