<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::limit(15)
            ->get();

        return view('books.index', compact('books'));
    }

    public function create($id = null)
    {
        $categories = Category::get();

        if ($id) {
            $book = Book::findOrFail($id);
        } else {
            $book = new Book;
        }

        return view('books.create', compact('categories', 'book'));
    }

    public function store(Request $request, $id = null)
    {
        if ($id) {
            $book = Book::findOrFail($id);
        } else {
            $book = new Book;
        }

        $request->validate([
            'slug' => [
                'required',
                Rule::unique('books')->ignore($book->id)
            ],
            'isbn' => [
                Rule::unique('books')->ignore($book->id)
            ],
        ]);

        $book->slug = $request->input('slug');
        $book->title = $request->input('title');
        $book->category_id = $request->input('category_id');
        $book->price = $request->input('price');
        $book->image = $request->input('image');
        $book->publication_date = $request->input('publication_date');
        $book->language = $request->input('language');
        $book->isbn = $request->input('isbn');
        $book->format = $request->input('format');
        $book->edition = $request->input('edition');
        $book->pages = $request->input('pages');
        $book->description = $request->input('description');
        $book->save();

        if ($id) {
            session()->flash('success_message', 'Book has been updated!');
        } else {
            session()->flash('success_message', 'Book has been created!');
        }

        return redirect()->route('books.index');
    }
}
