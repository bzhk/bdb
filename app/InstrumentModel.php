<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InstrumentModel extends Model
{
    protected $table = 'instruments';
    
    protected $hidden = ['id','instruments_name_id','created_at','updated_at'];

    public function name()
    {
        return $this->belongsTo('App\InstrumentNameModel','instruments_name_id','id');
    }
}
