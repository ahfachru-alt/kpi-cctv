<?php

namespace App\Exports;

use App\Models\Building;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class BuildingsExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Building::select('id','name','latitude','longitude')->get();
    }

    public function headings(): array
    {
        return ['ID','Name','Latitude','Longitude'];
    }
}

