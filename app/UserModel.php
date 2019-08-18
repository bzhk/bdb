<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    protected $table = 'users';
    protected $hidden = ['created_at','updated_at'];

    public function instruments()
    {
        return $this->hasMany('App\InstrumentModel','user_id','id');
    }
}
