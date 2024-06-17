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
        $authors = Author::limit(10)->get();

        return view('authors.authors', compact('authors'));
    }

    public function create()
    {
        return view('authors.author-create');
    }

    public function save(Request $r)
    {
        $r->validate([
            'slug' => "required",
            'name' => "required",
        ]);
        $author = new Author;

        $author->slug = $r->input('slug');
        $author->name = $r->input('name');
        $author->bio = $r->input('bio');

        $author->save();
        session()->flash('success_message', 'New author has been added.');
        //redirect to list page
        return redirect()->route('admin.authors');
    }
}
