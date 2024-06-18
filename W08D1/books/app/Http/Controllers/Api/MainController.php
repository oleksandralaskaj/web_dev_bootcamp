<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;

class MainController extends Controller
{
    public function latest()
    {
        return Book::orderBy('publication_date', 'desc')
            ->limit(20)
            ->get();
    }

    public function search(Request $request)
    {
        $search = $request->query('search');
        $results = Book::where('title', 'like', "%{$search}%")
            ->limit(10)->get();
        return $results;
    }

}
