<?php

namespace App\Exports;

use App\Models\Contact;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ContactsExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Contact::select('id','name','email','phone','whatsapp','address')->get();
    }

    public function headings(): array
    {
        return ['ID','Name','Email','Phone','WhatsApp','Address'];
    }
}

