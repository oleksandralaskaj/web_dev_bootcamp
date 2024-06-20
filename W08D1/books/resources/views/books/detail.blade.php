@extends('layouts.main', [
    'current_page' => 'detail'
])
@section('content')
    <h1>{{$book->title}}</h1>
    <img src="{{$book->image}}" alt="cover">
    <h2>Written by {{$book->authors->pluck('name')->join(', ')}}</h2>
    <h3>Usual price: {{$book->price}}</h3>
    <p>ISBN: {{$book->isbn}};</p>
    <p>Published in {{substr ($book->publication_date, 0, 4)}};</p>
    <p>Language: {{$book->language}};</p>
    <p>Number of pages: {{$book->pages}};</p>
    {{$book->decription}}
    <br>

    @auth
        <h2>Reviews</h2>
        <div>
            @if (count($book->reviews) > 0)
                @foreach($book->reviews as $review)
                    <div><strong>{{$review->user->name}}</strong>
                            <?php $source = substr($review->created_at, 0, 10);
                            $date = new DateTime($source); ?>
                        ({{$date->format('d.m.Y')}}):
                        {{$review->text}}.
                        @can('admin')
                            <form action="{{route('review.delete', ['id'=> $book->id, 'review_id'=> $review->id])}}"
                                  method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit">Delete</button>
                            </form>
                        @endcan
                    </div>
                @endforeach
            @else
                No reviews yet :(
            @endif
        </div>
        <h3>Place a review</h3>
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        @if ($book->reviews->pluck('user_id')->contains(auth()->id()))
            Review has been already submitted by you.
        @else
            <form action="{{ route('review', ['id'=> $book->id])}}" method="post">
                @csrf
                <textarea name="text" placeholder="write something here -->>"></textarea>
                <br>
                <button>Add review</button>
            </form>
        @endif
    @endauth
@endsection

