<?php

namespace Database\Seeders;

use App\Models\Building;
use App\Models\Room;
use App\Models\Cctv;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    public function run(): void
    {
        // Kept for compatibility. Prefer running BuildingSeeder, RoomSeeder, and CctvSeeder separately.
        $this->call([
            BuildingSeeder::class,
            RoomSeeder::class,
            CctvSeeder::class,
        ]);
    }
}

