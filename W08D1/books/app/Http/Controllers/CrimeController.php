<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class CrimeController extends Controller
{
    public function index()
    {
        $books = Book::where('category_id', 12)
            ->orderBy('publication_date', 'desc')
            ->limit(50)
            ->get();
        return view('books.crime-books', compact('books'));
    }
}
