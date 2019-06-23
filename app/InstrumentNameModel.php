<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InstrumentNameModel extends Model
{
    protected $table = 'instruments_name';
    protected $hidden = ['id','created_at','updated_at'];
}
