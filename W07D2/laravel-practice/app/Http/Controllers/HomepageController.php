<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;
use Illuminate\Support\Facades\DB;

class HomepageController extends Controller
{
    public function index()
    {
//        $new_offer_id = DB::table('offers')
//            ->insertGetId([1, 'Offer number one from employer number one.']);
        $offer = Offer::find(1);
        $employer = $offer->offeree->name;
        return view('index', compact('employer'));
    }
}
