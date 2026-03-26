<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Admin korisnik
        User::updateOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'Admin Budget Tracker',
                'password' => Hash::make('admin'),
                'user_type' => 'admin',
            ]
        );

        // 2 poznata korisnika
        $knownUsers = [
            [
                'name' => 'Anja Jandrić',
                'email' => 'anja123@gmail.com',
                'password' => 'password123',
            ],
            [
                'name' => 'Nevena Maksic',
                'email' => 'nevena123@gmail.com',
                'password' => 'password123',
            ]
        ];

        //fja da prodjemo i kreiramo poznate korisnike
        foreach ($knownUsers as $u) {
            User::updateOrCreate(
                ['email' => $u['email']],
                [
                    'name' => $u['name'],
                    'password' => Hash::make($u['password']),
                    'user_type' => 'user',
                ]
            );
        }

        // Jos 6 random user-a
        User::factory()
            ->count(6)
            ->state(['user_type' => 'user'])
            ->create();
    
    }
}
