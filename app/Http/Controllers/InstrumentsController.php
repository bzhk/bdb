<?php

namespace App\Http\Controllers;
use App\InstrumentModel;
use App\InstrumentsHistoryModel;
use Illuminate\Http\Request;

class InstrumentsController extends Controller
{


    public function getInstrumentsList(Request $req)
    {
        $instruments = InstrumentModel::with(['name'])->where('user_id',NULL)->get();

        return response(['status'=>'ok', 'value'=>$instruments],200);
    }

    
    public function setNewInstrumentsOwner(Request $req)
    {
        $user_id = $req->userId;
        $catalog_id = $req->catalogId;

        $instrument = InstrumentModel::where('catalog_id',$catalog_id)->first();
        $this->addEventToHistory($user_id, $instrument->id, 1);
        $instrument->user_id = $user_id;
        $instrument->save();
        return response(['status'=>'ok'],200);
    }

    public function freeupInstrument(Request $req)
    {
        $catalog_id = $req->catalogId;    
       
        $instrument = InstrumentModel::where('catalog_id',$catalog_id)->first();
        $this->addEventToHistory($instrument->user_id, $instrument->id, 2);
        $instrument->user_id = null;
        $instrument->save();
        return response(['status'=>'ok'],200);
    }

    private function addEventToHistory($user_id, $instrument_id, $type)
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
}
