<?php

namespace Database\Seeders;

use App\Models\Building;
use App\Models\Room;
use App\Models\Cctv;
use Illuminate\Database\Seeder;

class CctvSeeder extends Seeder
{
    public function run(): void
    {
        $buildingModels = Building::orderBy('id')->get();
        if ($buildingModels->isEmpty()) return;
        $statuses = ['online', 'offline', 'maintenance'];

        for ($i = 1; $i <= 700; $i++) {
            $b = $buildingModels[($i - 1) % $buildingModels->count()];
            $room = Room::where('building_id', $b->id)->inRandomOrder()->first();
            $lat = (float)$b->latitude + mt_rand(-50, 50) / 10000;
            $lng = (float)$b->longitude + mt_rand(-50, 50) / 10000;
            $ipLast = str_pad((string)$i, 3, '0', STR_PAD_LEFT);
            $ip = "rtsp://admin:password.123@10.56.236.$ipLast/streaming/channels/";
            Cctv::updateOrCreate(
                ['name' => 'CCTV '.$i],
                [
                    'building_id' => $b->id,
                    'room_id' => $room?->id,
                    'ip' => $ip,
                    'status' => $statuses[array_rand($statuses)],
                    'latitude' => $lat,
                    'longitude' => $lng,
                ]
            );
        }
    }
}

