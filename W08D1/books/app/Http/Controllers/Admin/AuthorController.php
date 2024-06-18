<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::limit(15)
            ->get();

        return view('authors.index', compact('authors'));
    }

    public function create()
    {
        return view('authors.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'slug' => 'required|unique:authors'
        ]);

        $author = new Author;
        $author->name = $request->input('name');
        $author->slug = $request->input('slug');
        $author->bio = $request->input('bio');
        $author->save();

        session()->flash('success_message', 'Author has been created!');

        return redirect()->route('authors.index');
    }
}
