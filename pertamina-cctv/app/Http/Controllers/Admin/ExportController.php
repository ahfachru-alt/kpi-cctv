<?php

namespace App\Http\Controllers\Admin;

use App\Exports\CctvsExport;
use App\Exports\UsersExport;
use App\Exports\BuildingsExport;
use App\Exports\RoomsExport;
use App\Exports\ContactsExport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function cctvs()
    {
        return Excel::download(new CctvsExport, 'cctvs.xlsx');
    }

    public function users()
    {
        return Excel::download(new UsersExport, 'users.xlsx');
    }

    public function buildings()
    {
        return Excel::download(new BuildingsExport, 'buildings.xlsx');
    }

    public function rooms()
    {
        return Excel::download(new RoomsExport, 'rooms.xlsx');
    }

    public function contacts()
    {
        return Excel::download(new ContactsExport, 'contacts.xlsx');
    }
}

