<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Review;
use App\Models\Movie;
class ReviewController extends Controller
{
    public function show()
    {
        $id =1;
        return view('reviews.store-review',  compact('id'));
    }
    public function store($movie_id)
    {
        $review = new Review;
        $review->movie_id = $movie_id;
        $review->text = $_POST['text'];
        $review->save();

        return redirect()->back();
    }

}
