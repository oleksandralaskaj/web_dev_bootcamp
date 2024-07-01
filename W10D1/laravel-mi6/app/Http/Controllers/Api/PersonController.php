<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        return Person::with("alias", 'image', "status")->get();
    }

    public function show($person_id)
    {
        return Person::with("alias", 'image', "status")->findOrFail($person_id);
    }
}
