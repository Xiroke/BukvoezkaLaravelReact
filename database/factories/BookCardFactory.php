<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BookCard>
 */
class BookCardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(6),
            'author' =>  fake()->name(),
            'is_my_book' => fake()->randomElement([true, false]),
            'publisher' => fake()->company(),
            'year' => fake()->year(),
            'typeBinding' => fake()->randomElement(['твердый', 'мягкий', null]),
            'quality' => fake()->randomElement(['идеальное', 'нормальное', 'требует внимания', 'годится чтобы подпирать ножку стола']),
        ];
    }
}
