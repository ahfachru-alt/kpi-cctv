<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    public function run(): void
    {
        Contact::updateOrCreate(
            ['email' => 'balongan@pertamina.co.id'],
            [
                'name' => 'KPI RU VI Balongan',
                'phone' => '+62 21 1234 5678',
                'whatsapp' => '+62 812 3456 7890',
                'address' => 'Kilang Pertamina Internasional, Refinery Unit VI Balongan',
            ]
        );
    }
}

