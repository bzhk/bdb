<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //
    public function create(Request $req)
    {
        $name = $req->name;
        $surname = $req->surname;

        DB::table('users')->insert(
            ['name' => $name, 'surname' => $surname]
        );

        var_dump([$surname, $name]);
    }
}
