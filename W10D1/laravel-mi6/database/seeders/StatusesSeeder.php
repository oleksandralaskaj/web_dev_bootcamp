<?php

namespace Database\Seeders;

use App\Models\Status;
use DB;
use Illuminate\Database\Seeder;

class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->truncate();

        $statuses = [
            'Active',
            'Alive',
            'Arrested',
            'Deceased',
            'In Custody',
            'Incarcerated',
            'Retired',
            'Unknown'
        ];

        foreach ($statuses as $name) {
            Status::create([
                'name' => $name
            ]);
        }
    }
}
