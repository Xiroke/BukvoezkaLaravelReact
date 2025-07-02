<?php

namespace Database\Seeders;

use App\Models\BookCard;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $admin = User::factory()->create([
            'name' => 'admin',
            'email'=> 'admin@example.com',
            'password' => Hash::make('bookworm')
        ]);
        $admin->is_admin = true;
        $admin->save();

        $user = User::factory()->create([
            'name' => 'test',
            'email' => 'test@example.com',
        ]);

        BookCard::factory()->count(20)->create([
            'user_id' => $user->id,
        ]);
    }
}
