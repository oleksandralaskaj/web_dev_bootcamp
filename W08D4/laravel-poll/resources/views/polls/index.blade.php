@extends('layouts.main', [
    'current_page' => 'index'
])

@section('content')
<h1>All open polls</h1>
@if (!auth()->check())
    <p class="info">To vote in any of listed polls log in first.</p>
@endif
    <div>
        @foreach($polls as $poll)
            <div class="poll">
                <h3>{{$poll->title}}</h3>
                <p>{{$poll->description}}</p>
                @auth
                <a href="{{route('poll.detail', $poll->id)}}"><button>VOTE</button></a>
                @endauth
            </div>
        @endforeach
    </div>

@endsection
