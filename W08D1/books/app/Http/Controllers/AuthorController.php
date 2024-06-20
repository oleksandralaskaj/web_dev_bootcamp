<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function search()
    {
        $authors = Author::limit(100)->get();
        return view('authors.search', compact('authors'));
    }

    public function detail($id)
    {
        $author = Author::findOrFail($id);
        return view('authors.detail', compact('author'));
    }
}
