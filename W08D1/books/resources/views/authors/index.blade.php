@extends('layouts.main', [
    'current_page' => 'authors'
])
@section('content')
    @if(session()->has("success_message"))
        <p> {{session()->get("success_message")}}</p>
    @endif
    <h1>List of authors</h1>
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    @foreach($authors as $author)
        <p>{{$author->name}}</p>
    @endforeach

@endsection
