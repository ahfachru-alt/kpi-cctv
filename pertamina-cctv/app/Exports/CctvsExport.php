<?php

namespace App\Exports;

use App\Models\Cctv;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CctvsExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Cctv::select('id','name','ip','status','building_id','room_id','latitude','longitude')->get();
    }

    public function headings(): array
    {
        return ['ID','Name','IP','Status','Building ID','Room ID','Latitude','Longitude'];
    }
}

