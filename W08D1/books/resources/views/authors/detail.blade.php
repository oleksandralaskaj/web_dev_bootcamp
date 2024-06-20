@extends('layouts.main', [
    'current_page' => 'author_detail'
])

@section('content')
    <h1>{{$author->name}}</h1>
    @if ($author->bio != "")
        <div><?= $author->bio ?></div>
    @else
        <p>No further information about this author.</p>
    @endif
@endsection
