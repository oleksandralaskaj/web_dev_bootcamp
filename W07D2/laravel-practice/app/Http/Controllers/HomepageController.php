<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;
use App\Models\Offeree;
use Illuminate\Support\Facades\DB;

class HomepageController extends Controller
{
    public function index()
    {
//        $new_offer_id = DB::table('offers')
//            ->insertGetId([1, 'Offer number one from employer number one.']);
        $offer = Offer::find(1);
        $employer_name = $offer->offeree->name;
        $employer_id = $offer->offeree->id;
        $employer = Offeree::find($employer_id);
        $offers_of_employer =$employer->offers;
        dd($offers_of_employer);
        return view('index', compact('employer_name'));
    }
}
