<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AwardController extends Controller
{
    public function index()
    {
        $awards = [
            'Oscars',
            'Golden Globes',
            'Bafta',
            'Emmy'
        ];
        return view("index", compact('awards'));
    }
}
