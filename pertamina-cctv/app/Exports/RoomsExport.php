<?php

namespace App\Exports;

use App\Models\Room;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class RoomsExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Room::select('id','building_id','name')->get();
    }

    public function headings(): array
    {
        return ['ID','Building ID','Name'];
    }
}

