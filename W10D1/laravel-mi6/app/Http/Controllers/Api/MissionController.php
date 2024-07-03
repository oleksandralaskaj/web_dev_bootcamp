<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function index()
    {
        return Mission::get();
    }

    public function show($mission_id)
    {
        return Mission::with('people')->findOrFail($mission_id);
    }

    public function store(Request $request, $mission_id = null)
    {
        $mission_id ? $mission = Mission::findOrFail($mission_id) : $mission = new Mission();

        $request->validate([
            'name' => 'required|max:255',
            'year' => 'required|max:4|min:4',
            'outcome' => 'required',
        ]);


        $mission->name = $request->input('name');
        $mission->year = $request->input('year');
        $mission->outcome = $request->input('outcome');

        $mission->save();

        return [
            'status' => "success",
            'message' => 'mission has benn updated'
        ];
    }
}
