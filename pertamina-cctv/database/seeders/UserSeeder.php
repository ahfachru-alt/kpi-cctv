<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        if (!User::where('email', 'admin@pertamina.local')->exists()) {
            $admin = User::create([
                'name' => 'Admin Pertamina',
                'email' => 'admin@pertamina.local',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'role' => 'admin',
            ]);
            $admin->assignRole('admin');
        }

        if (!User::where('email', 'user@pertamina.local')->exists()) {
            $user = User::create([
                'name' => 'User Pertamina',
                'email' => 'user@pertamina.local',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'role' => 'user',
            ]);
            $user->assignRole('user');
        }
    }
}

