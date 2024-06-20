<?php

namespace App\Http\Controllers;

use App\Models\Bookshop;
use Illuminate\Http\Request;

class BookshopController extends Controller
{
    public function show($bookshop_id)
    {
        $bookshop =Bookshop::findOrFail($bookshop_id);
        $books = $bookshop->books;

        return view('bookshop.show', ['bookshop' => $bookshop, 'books'=>$books]);
    }
}
