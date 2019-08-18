<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\UserModel;

class UserController extends Controller
{
  
    public function create(Request $req)
    {
        $name = $req->name;
        $surname = $req->surname;
        try{
            $new_user = new UserModel;

            $new_user->name = $name;
            $new_user->surname = $surname;
    
            $new_user->save();

            return response(['status'=>'ok', 'value'=>'Added'],200);
        }catch(Error $e)
        {
            
            $msg = $this->parseErrorResponse($e->getMessage());
            return response(['status'=>'error', 'value'=>$msg],500);
        }        
    }

    public function remove(Request $req)
    {
        $name = $req->name;
        $surname = $req->surname;
        $id = $req->id;
        
        try{
            UserModel::where('name',$name)
                        ->where('surname',$surname)
                        ->where('id',$id)
                        ->delete();

    
            return response(['status'=>'ok', 'value'=>'Removed'],200);
        }catch(Error $e)
        {
            
            $msg = $this->parseErrorResponse($e->getMessage());
            return response(['status'=>'error', 'value'=>$msg],500);
        }
    }

    public function get(Request $req)
    {   
        try{
            $name = $req->query('name') === NULL ? "%" : '%'.$req->query('name').'%';
            $surname = $req->query('surname') === NULL ? "%" : '%'.$req->query('surname').'%';
            
        $users = UserModel::with(['usersInstruments.instruments.name'])
                ->where('name','like',$name)
                ->where('surname','like',$surname)
                ->get();
            return response(['status'=>'ok', 'value'=>$users],200);
        }catch(Error $e)
        {      
            $msg = $this->parseErrorResponse($e->getMessage());
            return response(['status'=>'error', 'value'=>$msg],500);
        }   
    }

    public function getUser(Request $req)
    {
        try{
            $id = $req->id;
           
            
        $users = UserModel::with(['instruments.name'])
                ->where('id',$id)
                ->first();
            return response(['status'=>'ok', 'value'=>$users],200);
        }catch(Error $e)
        {      
            $msg = $this->parseErrorResponse($e->getMessage());
            return response(['status'=>'error', 'value'=>$msg],500);
        }   
    }

}
