<?php

namespace App\Http\Controllers;

use App\Models\Poll;
use App\Models\Vote;
use Illuminate\Http\Request;

class PollController extends Controller
{
    public function index()
    {
        $polls = Poll::limit(10)->get();
        return view('polls.index', compact('polls'));
    }
    public function detail($id)
    {
        $poll = Poll::findOrFail($id);

        return view('polls.detail', compact('poll'));
    }

    public function voteStore(Request $r)
    {
        $vote = new Vote;
        $vote->option_id = $r->input('option_id');
        $vote->user_id = $r->user()->id;

        $vote->save();
        session()->flash('success_message', 'Your vote has been counted in!');
        return redirect()->route('poll.detail', ['id'=> $vote->user_id]);
    }

    public function userVoted($user_id)
    {
        if (Vote::where([
            ['user_id', '=', '$user_id'],
            ['column_2', '<>', 'option_id']);
    }
}
