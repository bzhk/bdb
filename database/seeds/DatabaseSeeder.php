<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('history_type')->insert(
        ['name' => 'Add','created_at'=> date("Y-m-d H:i:s"),'updated_at'=>date("Y-m-d H:i:s")]);

        DB::table('history_type')->insert(
        ['name' => 'Remove','created_at'=> date("Y-m-d H:i:s"),'updated_at'=>date("Y-m-d H:i:s")]);

        DB::table('history_type')->insert(
        ['name' => 'Archive','created_at'=> date("Y-m-d H:i:s"),'updated_at'=>date("Y-m-d H:i:s")]);

                
    }
}
