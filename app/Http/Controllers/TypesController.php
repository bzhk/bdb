<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use App\TypesModel;
class TypesController extends Controller
{
    public function get(Request $req)
    {
        return TypesModel::get();
    }   

    public function newType(Request $req)
    {
        try{
            $name = $req->name;

            $new_type = new TypesModel;
            $new_type->name = $name;
            $new_type->save();
    
            return response(['status'=>'ok', 'value'=> 'Utworzono nowy typ instrumentu.'], 200);
        }catch(QueryException $e)
        {
            
            $msg = $this->parseErrorResponse($e->getMessage());
            return response(['status'=>'error', 'value'=>'Błąd bazy danych, prawdopodobnie próba utworzenia duplikatu.'],500);
        }

    }

    public function editType(Request $req)
    {
        $id = $req->id;
        $name = $req->name;

        $type = TypesModel::where('id',$id)->first();
        $type->name = $name;
        $type->save();

        return response(['status'=>'ok', 'value'=> 'Zaktualizowano typ.'], 200);
    }

    public function removeType(Request $req)
    {
        try{
            $id = $req->id;
    
            $type = TypesModel::where('id',$id)->first();
            $type->delete();

            return response(['status'=>'ok', 'value'=> 'Usunięto typ.'], 200);
        }catch(QueryException $e)
        {
            
            $msg = $this->parseErrorResponse($e->getMessage());
            return response(['status'=>'error', 'value'=>'Błąd bazy danych.'],500);
        }
    }
}
