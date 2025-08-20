<?php

namespace App\Http\Controllers\Admin;

use App\Exports\CctvsExport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function cctvs()
    {
        return Excel::download(new CctvsExport, 'cctvs.xlsx');
    }
}

