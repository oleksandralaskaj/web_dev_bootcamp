<?php
use App\Models\Movie;

$movie = Movie::find(1);

dd($movie->reviews[0]->movie_id);
?>

<form action="{{route("movie.review", $movie->id)}}" method="post">
    @csrf
    <label for="review"></label>
    <input type="text" name="text" id="review">
    <button type="submit">Submit review</button>
</form>

@foreach ($movie->reviews as $review)

    <div class="review">
        {{ $review->text }}
    </div>

@endforeach
