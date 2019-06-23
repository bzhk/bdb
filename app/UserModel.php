<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    protected $table = 'users';
    protected $hidden = ['created_at','updated_at'];

    public function usersInstruments()
    {
        return $this->hasOne('App\UsersInstrumentModel','user_id','id');
    }
}
