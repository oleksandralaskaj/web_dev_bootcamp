<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index(Request $r)
    {
        $status = $r->query('status');
        $people_query = Person::with("alias", 'image', "status")->limit(50);
        if ($status) {
            return $people_query->where("status_id", $status)->get();
        }
        return $people_query->get();
    }

    public function show($person_id)
    {
        return Person::with("alias", 'image', "status")->findOrFail($person_id);
    }
}
