@extends('layouts.main', [
    'current_page' => 'author_search'
])
@section('content')
    <div id="search">
        <h2>Search for a book by title</h2>
        <input type="text" id="search-input" name="search">
        <div id="search-output"></div>
        @vite('resources/js/author-search.js')
    </div>

    <h3>List of all authors</h3>
    @foreach($authors as $author)
        <p>{{$author->name}}</p>
    @endforeach
@endsection
