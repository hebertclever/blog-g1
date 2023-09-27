<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\comments>
 */
class CommentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'content' => $this->faker->paragraph,
            'user_id' => function () {
                return \App\Models\User::factory()->create()->id;
            },
            'post_id' => function () {
                return \App\Models\Post::factory()->create()->id;
            },

        ];
    }
}
