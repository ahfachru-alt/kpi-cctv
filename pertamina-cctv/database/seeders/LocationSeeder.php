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
        $buildings = [
            'Gedung Kolaboratif',
            'Gerbang Utama',
            'AWI',
            'Shelter Maintenance Area 1',
            'Shelter Maintenance Area 2',
            'Shelter Maintenance Area 3',
            'Shelter Maintenance Area 4',
            'Shelter White OM',
            'Pintu Masuk Area Kilang Pertamina',
            'Marine Region III Pertamina Balongan',
            'Main Control Room',
            'Tank Farm Area 1',
            'Gedung EXOR',
            'Area Produksi Crude Distillation Unit (CDU)',
            'HSSE Demo Room',
            'Gedung Amanah',
            'POC',
            'JGC',
        ];

        // Base coordinates for RU VI Balongan area (approx)
        $baseLat = -6.3500000; // placeholder
        $baseLng = 108.4000000; // placeholder

        $buildingModels = [];
        foreach ($buildings as $i => $name) {
            $lat = $baseLat + ($i * 0.001);
            $lng = $baseLng + ($i * 0.001);
            $buildingModels[] = Building::updateOrCreate(
                ['name' => $name],
                ['latitude' => $lat, 'longitude' => $lng]
            );
        }

        // Create some rooms per building
        foreach ($buildingModels as $building) {
            for ($r = 1; $r <= 3; $r++) {
                Room::firstOrCreate([
                    'building_id' => $building->id,
                    'name' => 'Room '.$r,
                ]);
            }
        }

        // Seed 700 CCTV sample with IPs
        $statuses = ['online', 'offline', 'maintenance'];
        for ($i = 1; $i <= 700; $i++) {
            $b = $buildingModels[($i - 1) % count($buildingModels)];
            $room = Room::where('building_id', $b->id)->inRandomOrder()->first();
            $lat = $b->latitude + mt_rand(-50, 50) / 10000;
            $lng = $b->longitude + mt_rand(-50, 50) / 10000;
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

