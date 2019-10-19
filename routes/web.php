<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('v1')->group(function () { 
    Route::get('users','UserController@get');
    Route::post('user/new','UserController@create');
    Route::post('user/remove','UserController@remove');
    Route::get('user/{id}','UserController@getUser');


    Route::get('types','TypesController@get');
    Route::post('type/new','TypesController@newType');
    Route::post('type/edit','TypesController@editType');
    Route::post('type/remove','TypesController@removeType');

    Route::get('instrument/all','InstrumentsController@getAllInstrumentsList');
    Route::post('instrument/new','InstrumentsController@createnewInstrument');
    Route::post('instrument/del','InstrumentsController@removeInstrument');
    Route::get('instruments','InstrumentsController@getInstrumentsList');
    Route::post('instruments/add','InstrumentsController@setNewInstrumentsOwner');
    Route::post('instrument/freeup','InstrumentsController@freeupInstrument');
    Route::post('instrument/save/{id}','InstrumentsController@saveInstrument');
});



// Route::get('/list/filter','UsersInstrumentsController@getUsers');

Route::get('{slug}', function () {
    return view('welcome');
})->where('slug', '(?!api)([A-z\d-\/_.]+)?');