<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'admin']);
        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'user']);

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