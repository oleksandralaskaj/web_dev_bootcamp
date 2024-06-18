<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;

class MainController extends Controller
{
    public function latest()
    {
        $books = Book::orderBy('publication_date', 'desc')->limit(20)->get();
        return $books;
    }
}
