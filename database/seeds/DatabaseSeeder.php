<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        \App\User::create([
            'name' => 'Jomoto',
            'email' => 'j@admin.com',
            'password' => bcrypt('12345678')
        ]);

        \App\Events::create([
            'id' => 1,
            'title' => 'Comida',
            'description' => 'ir a comer con mi padre',
            'backgroundColor' => '#000000',
            'textColor' => '#FFFFFF',
            'start' => '2021-09-16 10:30:00',
            'end' => '2021-09-16 10:30:00',
            
        ]);
    }
}
