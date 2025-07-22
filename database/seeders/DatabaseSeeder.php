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
        // создание админа
        $admin = User::factory()->create([
            'name' => 'admin',
            'email'=> 'admin@example.com',
            'password' => Hash::make('bookworm')
        ]);
        $admin->is_admin = true;
        $admin->save();
        // создание простого пользователя
        $user = User::factory()->create([
            'name' => 'test',
            'email' => 'test@example.com',
        ]);
        // создание карточек книг
        BookCard::factory()->count(20)->create([
            'user_id' => $user->id,
        ]);
    }
}
