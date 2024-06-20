@extends('layouts.main', [
    'current_page' => 'bookshop'
])

@section('content')
    <h1>{{$bookshop->name}}</h1>
    <h2>{{$bookshop->city}}</h2>
    <div>
        <h3>Available items</h3>
        <ol>
            @foreach($books as $book)
                <li>
                   " {{$book->title}}" by  {{$book->authors->pluck('name')->join(', ')}}
                </li>
            @endforeach
        </ol>
    </div>
@endsection
