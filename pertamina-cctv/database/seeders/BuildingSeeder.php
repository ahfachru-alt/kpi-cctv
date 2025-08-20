<?php

namespace Database\Seeders;

use App\Models\Building;
use Illuminate\Database\Seeder;

class BuildingSeeder extends Seeder
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

        $baseLat = -6.3500000; // approx RU VI Balongan
        $baseLng = 108.4000000;

        foreach ($buildings as $i => $name) {
            $lat = $baseLat + ($i * 0.001);
            $lng = $baseLng + ($i * 0.001);
            Building::updateOrCreate(
                ['name' => $name],
                ['latitude' => $lat, 'longitude' => $lng]
            );
        }
    }
}

