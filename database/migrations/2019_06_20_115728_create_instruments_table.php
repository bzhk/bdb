<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstrumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instruments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('instruments_name_id')->unsigned();
            $table->bigInteger('user_id')->unsigned()->index()->nullable();
            $table->string('catalog_id')->unique();
            $table->text('note')->nullable();
            $table->boolean('archive')->default(0);
            $table->timestamps();


            $table->foreign('instruments_name_id')->references('id')->on('instruments_name');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instruments');
    }
}
