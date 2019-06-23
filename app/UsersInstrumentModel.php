<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersInstrumentModel extends Model
{
    protected $table = 'users_instruments';
    protected $hidden = ['user_id','instrument_id','created_at','updated_at'];
    public function user()
    {
        return $this->belongsTo('App\UserModel','user_id','id');
    }

    public function instruments()
    {
        return $this->belongsTo('App\InstrumentModel','instrument_id','id');
    }

}
