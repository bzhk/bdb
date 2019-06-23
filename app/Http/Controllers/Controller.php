<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function parseErrorResponse( $error_msg, $text = "Server error")
    {
        if(getenv('APP_ENV') == 'local')
        {
            return $error_msg;
        }else{
            return $text;
        }
    }
}
