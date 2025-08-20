<?php

namespace Database\Seeders;

use App\Models\Building;
use App\Models\Room;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    public function run(): void
    {
        foreach (Building::all() as $building) {
            for ($r = 1; $r <= 3; $r++) {
                Room::firstOrCreate([
                    'building_id' => $building->id,
                    'name' => 'Room '.$r,
                ]);
            }
        }
    }
}

