<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $prodcutSuffixes = ['Sweater', 'Pants', 'Shirts', 'Glasses', 'Hat', 'Socks'];
        $name = $this->faker->company.' '.Arr::random($prodcutSuffixes);

        return [
            'name' => $name ,
            'slug' => Str::slug($name),
            'description' => $this->faker->realText(320),
            'price' => $this->faker->numberBetween(10000, 100000)
        ];
    }
}
