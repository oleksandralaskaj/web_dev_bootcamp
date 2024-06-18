<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class BookController extends Controller
{
    public function show($id)
    {
        $book = Book::find($id);
        return view('books.detail', compact('book'));
    }

    public function store(Request $r, $id)
    {
        $r->validate([
            'text' => 'required|max:255'
        ]);

        $review = new Review();

        $review->text = $r->input('text');
        $review->user_id = Auth::id();
        $review->book_id = $id;

        $review->save();

        session()->flash('success_message', 'Review has been saved!');

        return redirect()->route('detail', compact('id'));
    }
}
