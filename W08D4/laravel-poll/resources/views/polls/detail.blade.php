@extends('layouts.main', [
    'current_page' => 'detail'
])

@section('content')
    @if(session()->has("success_message"))
        <p> {{session()->get("success_message")}}</p>
    @endif

    <h1>{{$poll->title}}</h1>
    <h3>{{$poll->description}}</h3>
    <form action="{{route('vote.store')}}" method="post">
        @csrf
        <fieldset>
            @foreach($poll->options as $option)
                Option {{ $loop->index +1 }}:
                <label>{{$option->description}}</label>
                <input type="radio" name="option_id" value="{{$option->id}}"> <br>
            @endforeach
        </fieldset>
        <button type="submit">Submit my vote</button>
    </form>
@endsection

