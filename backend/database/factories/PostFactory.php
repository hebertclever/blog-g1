<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \App\Models\Post::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'content' => $this->faker->text(4000) . ' ' . $this->faker->paragraph(5),
            'image' => $this->faker->randomElement([
                'https://source.unsplash.com/random/800x600?nature',
                'https://source.unsplash.com/random/800x600?city',
                'https://source.unsplash.com/random/800x600?technology',
                'https://source.unsplash.com/random/800x600?animals',
                'https://source.unsplash.com/random/800x600?food',
                'https://source.unsplash.com/random/800x600?business',
                'https://source.unsplash.com/random/800x600?sports',
                'https://source.unsplash.com/random/800x600?music',
                'https://source.unsplash.com/random/800x600?abstract',
                'https://source.unsplash.com/random/800x600?vintage',
                'https://source.unsplash.com/random/800x600?health',
                'https://source.unsplash.com/random/800x600?travel',
                'https://source.unsplash.com/random/800x600?education',
                'https://source.unsplash.com/random/800x600?fashion',
                'https://source.unsplash.com/random/800x600?science',
                'https://source.unsplash.com/random/800x600?history'
            ]),
            'user_id' => function () {
                return \App\Models\User::inRandomOrder()->take(3)->get()->random()->id;
            }
        ];
    }
}
