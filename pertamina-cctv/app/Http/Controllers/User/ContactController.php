<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Contact/index', [
            'contacts' => Contact::orderBy('id','desc')->get(['id','name','email','phone','whatsapp','address'])
        ]);
    }
}

