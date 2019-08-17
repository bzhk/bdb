<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UsersInstrumentModel;
use App\InstrumentsHistoryModel;
class UsersInstrumentsController extends Controller
{
    public function get(Request $req)
    {   
        try{
            $name = $req->query('name') === NULL ? "%" : '%'.$req->query('name').'%';
            $surname = $req->query('surname') === NULL ? "%" : '%'.$req->query('surname').'%';
            $instrument = $req->query('instrument') === NULL ? "%" : '%'.$req->query('instrument').'%';
            $catalog_id = $req->query('catalog_id') === NULL ? "%" : '%'.$req->query('catalog_id').'%';
            
        $users = UsersInstrumentModel::with(['user','instruments.name'])
                ->whereHas('user', function ($q) use($name,$surname) {
                    $q->where('name','like',$name)->where('surname','like',$surname);
                })->whereHas('instruments.name', function ($q) use ($instrument){
                    $q->where('name','like',$instrument);
                })->whereHas('instruments', function ($q) use ($catalog_id){
                    $q->where('catalog_id','like',$catalog_id);
                })->get();
            return response(['status'=>'ok', 'value'=>$users],200);
        }catch(Error $e)
        {      
            $msg = $this->parseErrorResponse($e->getMessage());
            return response(['status'=>'error', 'value'=>$msg],500);
        }   
    }

    private function addToHistory($user_id, $instrument_id, $type)
    {   
        try{
            $new_history_item = new InstrumentsHistoryModel;
            $new_history_item->user_id = $user_id;
            $new_history_item->instrument_id = $instrument_id;
            $new_history_item->history_type_id = $type;
    
            $new_history_item->save();
        }catch(Error $e)
        {      
            $msg = $this->parseErrorResponse($e->getMessage());
            return ['status'=>'error', 'value'=>$msg];
        }  

        return;
    }

    public function freeupInstrument(Request $req)
    {
        $instrument_id = $req->instrumentId;
        $user_id = $req->userId;
        
      
        $instrument = UsersInstrumentModel::where('instrument_id',$instrument_id)->first();
    
        $instrument->delete();

        $this->addToHistory($user_id, $instrument_id, 2);
        return response(['status'=>'ok'],200);
    }
    
}
