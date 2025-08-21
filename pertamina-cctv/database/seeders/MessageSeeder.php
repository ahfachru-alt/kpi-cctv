<?php

namespace Database\Seeders;

use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::where('email','admin@pertamina.local')->first();
        $user = User::where('email','user@pertamina.local')->first();
        if ($admin && $user) {
            Message::firstOrCreate([
                'from_user_id' => $admin->id,
                'to_user_id' => $user->id,
                'content' => 'Selamat datang di platform monitoring KPI RU VI Balongan.',
            ]);
        }
    }
}

