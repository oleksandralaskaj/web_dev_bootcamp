@extends('layouts.main', [
    'current_page' => 'books'
])
@section('content')
    @if(session()->has("success_message"))
        <p> {{session()->get("success_message")}}</p>
    @endif

    <h1>List of books</h1>
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <a href="{{ route('books.create') }}">+ Add a book</a>
    <ul class="books-list">
        @foreach ($books as $book)
            <li>
                <a href="{{ route('books.edit', $book->id) }}">{{ $book->title }}</a>
            </li>
        @endforeach
    </ul>

@endsection
